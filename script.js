 
 
 
 // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDo_tMQhSN7ld3PAfpi_AumGoBIwXiMQ9A",
    authDomain: "contactform-ef11d.firebaseapp.com",
    databaseURL: "https://contactform-ef11d-default-rtdb.firebaseio.com",
    projectId: "contactform-ef11d",
    storageBucket: "contactform-ef11d.appspot.com",
    messagingSenderId: "947486115147",
    appId: "1:947486115147:web:e5d1047f980216c94614ce"
  };


  // initialize firebase 
  firebase.initializeApp(firebaseConfig);

  // refebase firebase 

  const contactFormDB = firebase.database().ref('contactAraz');

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

    var name = getElementVal('name');
    var address = getElementVal('address');
    var number = getElementVal('number');
    var subject = getElementVal('subject');
    var texera = getElementVal('texera')

    console.log(name, address, number, subject, texera);
    saveMasseges(name, address, number, subject, texera);
  }

  const saveMasseges = (name, address, number, subject, texera) => {
    var newContatForm = contactFormDB.push();


    newContatForm.set ({
      name : name,
      address: address,
      number: number,
      subject: subject,
      texera: texera
    })
  };

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  }



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

