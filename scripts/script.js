document.addEventListener('DOMContentLoaded', function(){
    var burgerMenu = document.querySelector('.burger-menu')
    var navLinks = document.querySelector('.nav-links')
    var links = document.querySelectorAll('.nav-item');

    function toggleNavbar() {
        navLinks.classList.toggle('active');
        burgerMenu.classList.toggle('close');
    }

    burgerMenu.addEventListener('click', toggleNavbar);

 

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            var targetId = event.target.getAttribute('href')
            var targetSection = document.querySelector(targetId)
            targetSection.scrollIntoView({behavior: 'smooth'})
            toggleNavbar();
            
            navLinks.classList.remove('active')
            navLinks.classList.remove('close')
        })
    })

    navLinks.addEventListener('click', () =>{
        if (event.target.tagName === 'a'){
            toggleNavbar()
        }
    })
})

