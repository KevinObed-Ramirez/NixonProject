//on load event 
window.onload = (event) => {
    confirm("Page Loaded: Initiate Scam?");
};

//Nixon Button
function nixon() {
    window.alert("HOORAY YOU PICKED THE RIGHT CANDIDATE")
    window.open("Morgana Fortnite.mp4", "Congrats!", "width=1500,height=1500");   // Opens a new window
};


// TURN DOWN VOLUME FOR WRONG FUNCTION
function wrong() {
    window.alert("WRONG ANSWER! LOWER VOLUME")
    var i = 0;
    var stop = 150;
    for (i = 0; i < 150; i++) {
        document.write('<video width="100" height="100" controls autoplay><source src="Your computer has virus.mp4" type="video/mp4"><source src="Your Computer has virus.mp4" type="video/ogg">Your browser does not support the video tag.</video>');
    }
};

//Removes context Menu
const noContext = document.getElementById('noContextMenu');
noContext.addEventListener('contextmenu', e => {
    e.preventDefault();
});

//remove event listener
function erase() {
    removeEventListener("click", negate);
};

//Client X and Y
//custom  VOTE! cusor
    (function fairyDustCursor() {
        var possibleColors = ["#FF101F", "#F8F1FF", "#6BBAEC"]
        var width = window.innerWidth;
        var height = window.innerHeight;
        var cursor = { x: width / 2, y: width / 2 };
        var particles = [];
        function init() {
            bindEvents();
            loop();
        }
        // Bind events that are needed
        function bindEvents() {
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('touchmove', onTouchMove);
            document.addEventListener('touchstart', onTouchMove);
            window.addEventListener('resize', onWindowResize);
        }
        function onWindowResize(e) {
            width = window.innerWidth;
            height = window.innerHeight;
        }
        function onTouchMove(e) {
            if (e.touches.length > 0) {
                for (var i = 0; i < e.touches.length; i++) {
                    addParticle(e.touches[i].clientX, e.touches[i].clientY, possibleColors[Math.floor(Math.random() * possibleColors.length)]);
                }
            }
        }
        function onMouseMove(e) {
            cursor.x = e.clientX;
            cursor.y = e.clientY;
            addParticle(cursor.x, cursor.y, possibleColors[Math.floor(Math.random() * possibleColors.length)]);
        }
        function addParticle(x, y, color) {
            var particle = new Particle();
            particle.init(x, y, color);
            particles.push(particle);
        }
        function updateParticles() {
            // Updated
            for (var i = 0; i < particles.length; i++) {
                particles[i].update();
            }
            // Remove dead particles
            for (var i = particles.length - 1; i >= 0; i--) {
                if (particles[i].lifeSpan < 0) {
                    particles[i].die();
                    particles.splice(i, 1);
                }
            }
        }
        function loop() {
            requestAnimationFrame(loop);
            updateParticles();
        }
        /**
         * Particles
         */
        function Particle() {
            this.character = "YOU WANT TO VOTE NIXON";
            this.lifeSpan = 300; //ms
            this.initialStyles = {
                "position": "absolute",
                "display": "block",
                "pointerEvents": "none",
                "z-index": "10000000",
                "fontSize": "12px",
                "will-change": "transform"
            };
            // Init, and set properties
            this.init = function (x, y, color) {
                this.velocity = {
                    x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2),
                    y: 1
                };
                this.position = { x: x - 10, y: y - 20 };
                this.initialStyles.color = color;
                this.element = document.createElement('span');
                this.element.innerHTML = this.character;
                applyProperties(this.element, this.initialStyles);
                this.update();
                document.querySelector('.container').appendChild(this.element);
            };
            this.update = function () {
                this.position.x += this.velocity.x;
                this.position.y += this.velocity.y;
                this.lifeSpan--;
                this.element.style.transform = "translate3d(" + this.position.x + "px," + this.position.y + "px, 0) scale(" + (this.lifeSpan / 120) + ")";
            }
            this.die = function () {
                this.element.parentNode.removeChild(this.element);
            }
        }
        /**
         * Utils
         */
        // Applies css `properties` to an element.
        function applyProperties(target, properties) {
            for (var key in properties) {
                target.style[key] = properties[key];
            }
        }
        init();
    })();