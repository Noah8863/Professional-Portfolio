// === Functions for displaying/hiding information === //
function highschool() {
    const highschool = document.getElementById('highschool')
    highschool.classList.toggle('hide')
}
function college() {
    const college = document.getElementById('college')
    college.classList.toggle('hide')
}
function bootcamp() {
    const bootcamp = document.getElementById('bootcamp')
    bootcamp.classList.toggle('hide')
}
function bestbuy() {
    const bestbuyinfo = document.getElementById('bestbuyinfo')
    bestbuyinfo.classList.toggle('hide')
}
function observ() {
    const observinfo = document.getElementById('observinfo')
    observinfo.classList.toggle('hide')
}
function verizon() {
    const verizoninfo = document.getElementById('verizoninfo')
    verizoninfo.classList.toggle('hide')
}

// === Functions for changing the background color of the section === //
const background = document.getElementById('projects')

function parking() {
    background.classList.remove('coffee-back-drop')
    background.classList.remove('password-back-drop')
    background.classList.add('car-back-drop')
}

function coffee() {
    background.classList.remove('car-back-drop')
    background.classList.remove('password-back-drop')
    background.classList.add('coffee-back-drop')
}

function password() {
    background.classList.remove('car-back-drop')
    background.classList.remove('coffee-back-drop')
    background.classList.add('password-back-drop')
}


// === particle library object === //
particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
      },
      line_linked: {
        enable: true,
        distance: 120,
        color: "#ffffff",
        opacity: 0.4,
        width: 2
      },
      move: {
        enable: true,
        speed: 1,
        direction: "top",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: true, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
});
