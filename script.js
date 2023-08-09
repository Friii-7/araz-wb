 
 
 
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


 // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const contactFormDB = firebase.database().ref('contactAraz');

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  const name = getElementVal('name');
  const address = getElementVal('address');
  const number = getElementVal('number');
  const subject = getElementVal('subject');
  const texera = getElementVal('texera');

  console.log(name, address, number, subject, texera);
  saveMessages(name, address, number, subject, texera);

  const alertBox = document.querySelector('.alert');
  alertBox.style.display = 'block';

  setTimeout(() => {
    alertBox.style.display = 'none';
  }, 3000);

  document.getElementById('contactForm').reset();
}

function saveMessages(name, address, number, subject, texera) {
  const newContactForm = contactFormDB.push();
  newContactForm.set({
    name,
    address,
    number,
    subject,
    texera
  });
}

function getElementVal(id) {
  return document.getElementById(id).value;
}



/////////email 



    function resetForm() {
        document.getElementById('contactForm').reset();
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



