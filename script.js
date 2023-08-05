// toggle icon navbar 

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Toggle menu icon shape (hamburger or close)
    navbar.classList.toggle('active'); // Toggle the visibility of the navigation menu
}

///scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY; // Corrected typo 'windos' to 'window'
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // activate navbar links
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });
    
      // Sticky header
        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);


        // remove toggle icon and navbar when click navbar links (scroll)

        menuIcon.classList.remove('bx-x'); 
        navbar.classList.remove('active'); 
}

