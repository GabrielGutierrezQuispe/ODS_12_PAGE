window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    nav.classList.toggle('scrolled', window.scrollY > 650);
  });

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header__container');
    if (window.scrollY > 650) { 
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }
});