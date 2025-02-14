//RANDOM GREETING//
const quote = document.getElementById("random-greet");
const quotes = ["Hi!", "こんにちは!", "Bonjour!", "再见!", "좋은 하루!"];

function typeWriterGreeting(text, callback) {
    let i = 0;
    quote.innerHTML = ""; // Kosongkan sebelum mulai mengetik

    function typing() {
        if (i < text.length) {
            quote.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, 100); // Kecepatan mengetik
        } else {
            setTimeout(callback, 1000); // Tunggu sebelum menghapus
        }
    }

    typing();
}

function startTypingAnimation() {
    let index = 0;

    function nextWord() {
        if (index >= quotes.length) index = 0;
        typeWriterGreeting(quotes[index], () => {
            setTimeout(() => {
                quote.innerHTML = quotes[index]; // Tetap tampil saat menunggu
                index++;
                nextWord();
            }, 1000); // Waktu jeda sebelum berganti kata
        });
    }

    nextWord();
}

startTypingAnimation();




  //IMAGE SLIDER//
  var i = 0;
  var images = [];
  var time = 2000;
    images[0] = 'assets/marvin cis.jpg';
    images[1] = 'assets/marvin tangga.jpg';
    images[2] = 'assets/Semi Formal.jpg';
  function changeImg(){
  document.slide.src = images[i];
    if(i < images.length - 1){
          i++;
        } else {
          i = 0;
        }
    setTimeout("changeImg()",time);
      }
  window.onload = changeImg;
  

  document.addEventListener("DOMContentLoaded", function () {
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 100, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#31363F" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.5, "random": false },
            "size": { "value": 4.2, "random": true },
            "line_linked": { "enable": true, "distance": 150, "color": "#31363F", "opacity": 0.6, "width": 1 },
            "move": { "enable": true, "speed": 3, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": { "enable": true, "mode": "repulse" },
                "onclick": { "enable": true, "mode": "push" }
            },
            "modes": {
                "repulse": { "distance": 100, "duration": 0.4 },
                "push": { "particles_nb": 4 }
            }
        },
        "retina_detect": true
    });
});

const container = document.querySelector(".cards-container");
const cards = gsap.utils.toArray(".card");

// Duplikasi kartu untuk menciptakan efek seamless looping
cards.forEach((card) => {
    let clone = card.cloneNode(true);
    container.appendChild(clone);
});

gsap.to(container, {
    x: `-=${container.scrollWidth / 2}`, // Geser setengah dari total panjang (agar looping terasa seamless)
    ease: "linear",
    duration: 15, // Kecepatan scroll (bisa disesuaikan)
    repeat: -1 // Loop terus menerus
});

//NAVBAR SCROLLED//
window.addEventListener("scroll", function () {
    let navbar = document.getElementById("navbar");
    if (window.scrollY > 50) { // Jika scroll lebih dari 50px
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

//PARTICLE CONTACT
    particlesJS("particles-contact", {
        particles: {
            number: { value: 100, density: { enable: true, value_area: 800 } },
            color: { value: "#FBFBFB" },
            shape: { type: "circle" },
            opacity: { value: 0.8, random: true },
            size: { value: 3, random: true },
            move: { speed: 2, direction: "none", random: false, straight: false }
        },
        interactivity: {
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" }
            }
        }
    });




//TYPE WRITTER EXPERIENCE//


