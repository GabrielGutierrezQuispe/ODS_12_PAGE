const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan')

const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public/'))

const pool = mysql.createPool({
    host: "ods12.cjiggxssg9dg.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "ecobagods12",
    database: "ods_12",
});

// Ruta inicial
app.get("/", function (req, res) {
    console.log("Ruta inicial");
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get("/ods12", function (req, res) {
    res.sendFile(path.join(__dirname, 'public/html/ods12.html'));
});

app.get("/presentacion", function (req, res) {
    res.sendFile(path.join(__dirname, 'public/html/Inicio.html'));
});

app.get("/proyectos", function (req, res) {
    res.sendFile(path.join(__dirname, 'public/html/proyectos.html'));
});

app.get("/servicio", function (req, res) {
    res.sendFile(path.join(__dirname, 'public/html/servicio.html'));
});

app.get("/nosotros", function (req, res) {
    res.sendFile(path.join(__dirname, 'public/html/nosotros.html'));
});

app.get("/contac", function (req, res) {
    res.sendFile(path.join(__dirname, 'public/html/contactanos.html'));
});

app.get("/snosotros", function (req, res) {
    res.sendFile(path.join(__dirname, 'public/service/about-us.html'));
});

app.get("/scontactanos", function (req, res) {
    res.sendFile(path.join(__dirname, 'public/service/contact-us.html'));
});

app.get("/sBlocks", function (req, res) {
    res.sendFile(path.join(__dirname, 'public/service/typography.html'));
});


// Ruta para obtener datos del calendario por fecha
app.get("/api/dates/:current", (req, res) => {
    const request = req.params.current;
    console.log("Fecha solicitada:", request);

    pool.query(
        "SELECT nombre, descripcion, DATE_FORMAT(dia, '%d/%m/%Y') AS dia FROM calendar WHERE dia = ?",
        [request],
        (err, rows, fields) => {
            if (err) {
                console.error('Error al consultar datos del calendario:', err);
                res.status(500).json({ error: 'Error al consultar datos del calendario.' });
                return;
            }

            console.log("Filas encontradas:", rows); 

            if (rows.length > 0) {
                res.json(rows[0]); 
            } else {
                res.json(null); 
            }
        }
    );
});


// Ruta para recibir datos del formulario y guardar en la base de datos

app.post('/submit-form', (req, res) => {
    const { name, lastname, number, email, request } = req.body;

    console.log(req.body);

    const status = 'A';

    const query = `INSERT INTO consultation (name, lastname, number, email, request, status)
    VALUES (?, ?, ?, ?, ?, ?)`;

    console.log(query);

    pool.query(query, [name, lastname, number, email, request, status], (err, result) => {
        if (err) {
            console.error('Error al insertar datos: ' + err.stack); // Mostrar el error completo en la consola
            res.status(500).send('Ocurrió un error al procesar tu consulta.');
            return;
        }
    
        res.status(200).send('Tu consulta ha sido procesada exitosamente.');
    });
});

// Ruta para manejar el envío del segundo formulario
app.post('/contacto', (req, res) => {
    const { nombre, apellido, email, mensaje } = req.body;

    // Validaciones en el servidor
    if (!nombre || !apellido || !email || !mensaje) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }

    const query = `INSERT INTO Contactos (nombre, apellido, email, mensaje) VALUES (?, ?, ?, ?)`;
    pool.query(query, [nombre, apellido, email, mensaje], (err) => {
        if (err) {
            console.error('Error al insertar datos:', err);
            res.status(500).send('Error al guardar la información.');
            return;
        }

        res.status(200).send('Información guardada con éxito.');
    });
});



// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://127.0.0.1:${port}`);
});
