particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 30,  // Adjust the number of flowers
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "shape": {
            "type": "image", 
            "image": {
                "src": "images/clipart120653.png",  // Make sure this path is correct!
                "width": 100,
                "height": 100
            }
        },
        "size": {
            "value": 40, // Adjust flower size
            "random": true
        },
        "move": {
            "enable": true,
            "speed": 2,  // Adjust speed of floating
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            }
        }
    }
});

console.log("Particles.js is initializing...");

