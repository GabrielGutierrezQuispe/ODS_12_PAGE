function iniciarMap() {  
    var coord = { lat: -13.081634, lng: -76.3877879 };  
    var map = new google.maps.Map(document.getElementById('map'), {  
        zoom: 10,  
        center: coord  
    });  
    var marker = new google.maps.Marker({  
        position: coord,  
        map: map  
    });  
}

