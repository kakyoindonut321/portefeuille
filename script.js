// VARIABLE
const intro = document.querySelector('.intro');
const parts = document.querySelectorAll(".part");
const body = document.querySelector("body");
const main = document.querySelector(".main");
var textSpeed = 100;
var timer = true;
let state = 0;
var iType = 0;
var newText;
var funcState = false;



// EXAMPLE timer
// delayLama(() => {}, 1500);

// STARTER
for (let i = 0; i < parts.length; i++) {
    if (i == state) {
        parts[i].classList.add("show")
        continue;
    }
    parts[i].style.opacity = '0';
    parts[i].style.display = 'none';
}
delayLama(() => { body.classList.add('gradbody'); }, 0, () => { body.classList.remove('gradbody'); });
// STARTER TYPING 
delayLama(() => {
    typeWriter(newText, document.querySelector(".first"));
}, 1500, beforeType('first'));



// TYPING FUNCTION
function typeWriter(theText, targetText) {
    // theText must be a str, can be from element innerhtml 
    // targetText must be an element from the document e.g document.getElementById("demo")
    // textSpeed must be int
    if (iType < theText.length) {
        targetText.innerHTML += theText.charAt(iType);
        iType++;
        setTimeout(typeWriter.bind(null, theText, targetText), textSpeed);
    } else {
        iType = 0;
        newText = '';
        funcState = false;
    }


}

// setTimeout
function delayLama(daCode, daTime, optionalFirst = () => {}) {
    optionalFirst();
    setTimeout(daCode, daTime);
}


// MENGHINDARI REPEATING
function beforeType(daClass) {
    funcState = true;
    if (document.querySelector("." + daClass).innerHTML.trim() != "" && iType == 0) {
        newText = document.querySelector("." + daClass).innerHTML;
        document.querySelector("." + daClass).innerHTML = '';
    }
}



//EVENT LISTENER FOR INTRO
document.addEventListener("click", function() {
    if (funcState) {
        console.log('estrogen');
        return;
    }
    if ((state + 1) == parts.length) {
        delayLama(() => { body.classList.add('gradbody'); }, 0, () => { body.classList.remove('gradbody'); });
        intro.classList.add("hide");
        main.classList.add("show");
        setTimeout(() => {
            intro.style.display = 'none';
            intro.style.opacity = '0';
            main.style.display = 'block';
        }, 500);
        document.removeEventListener('click', arguments.callee);
        return;
    }
    let prevState = state;
    state++;
    delayLama(() => { body.classList.add('gradbody'); }, 0, () => { body.classList.remove('gradbody'); });
    delayLama(() => { typeWriter(newText, document.querySelector(".second")); }, 1500, beforeType('second'));
    for (let i = 0; i < parts.length; i++) {
        if (i == prevState) {
            parts[i].classList.remove("show")
            parts[i].classList.add("hide")
            delayLama(() => {
                parts[i].style.display = 'none';
                parts[i].style.opacity = '0';
            }, 500);
            continue
        }
        if (i == state) {
            delayLama(() => { parts[i].style.display = 'block'; }, 500);
            parts[i].classList.add("show")
            if (state == 2) {
                funcState = true;
                animate();
            }
            continue;
        }
    }
})


// START MORBIUS --------------------------------------------------------------------------------
const elts = {
    text1: document.getElementById("text1"),
    text2: document.getElementById("text2")
};
const containTitle = document.querySelector('.partThree');

// The strings to morph between. You can change these to anything you want!
const texts = ["PORTFOLIO"];

// Controls the speed of morphing.
const morphTime = 5;
const cooldownTime = 0.05;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;
var stopIt = false;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / morphTime;

    if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
    }

    setMorph(fraction);
}

// A lot of the magic happens here, this is what applies the blur filter to the text.
function setMorph(fraction) {
    // fraction = Math.cos(fraction * Math.PI) / -2 + .5;

    elts.text2.style.filter = `blur(${Math.min(16 / fraction - 16, 200)}px)`;
    elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 200}%`;

    fraction = 1 - fraction;
    // elts.text1.style.filter = `blur(${Math.min(16 / fraction - 16, 200)}px)`;
    // elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 200}%`;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
    morph = 0;

    elts.text2.style.filter = "";
    elts.text2.style.opacity = "100%";

    elts.text1.style.filter = "";
    elts.text1.style.opacity = "0%";
    elts.text1.style.display = "none";
}

// Animation loop, which is called every frame.
function animate() {
    if (!stopIt) {
        funcState = true;
        let newTime = new Date();
        let shouldIncrementIndex = cooldown > 0;
        let dt = (newTime - time) / 1000;
        time = newTime;

        cooldown -= dt;

        if (cooldown <= 0) {
            if (shouldIncrementIndex) {
                textIndex++;
            }
            doMorph();
        } else {
            if (textIndex == 2) {
                containTitle.style.filter = 'none';
                elts.text2.style.animation = 'glowin 1s linear infinite alternate-reverse';
                stopIt = true;
                delayLama(() => { funcState = false; }, 2000);
                return;
            }
            doCooldown();
        }
        requestAnimationFrame(animate);
    }
}

// expected output: 12

// ANIME JS----------------------------------------------------



// const staggerSwagger = document.querySelector('.demo');
// const fragment = document.createDocumentFragment();
// const grid = [5, 5];
// const col = grid[0];
// const row = grid[1];
// const numberOfElements = col * row;

// for (let i = 0; i < numberOfElements; i++) {
//     fragment.appendChild(document.createElement('div'));
// }

// staggerSwagger.appendChild(fragment);

// anime({
//     targets: '.demo div',
//     scale: [
//         { value: .1, easing: 'easeOutSine', duration: 500 },
//         { value: 1, easing: 'easeInOutQuad', duration: 1200 }
//     ],
//     delay: anime.stagger(200, { grid, from: 'center' })
// });

// END ANIME JS----------------------------------------------------

















// parts.forEach(elm => {

// })


// for (let i = 0; i < intro.childElementCount; i++) {
//     if (i === intLast) {
//         continue;
//     }
//     parts[i].style.opacity = '0';
//     parts[i].style.display = 'none';

// }

// // console.log();

// document.addEventListener("click", function() {
//     console.log('on');
//     intLast++;
//     if (intLast === 3) {
//         this.removeEventListener('click', arguments.callee);
//         return;
//     }
//     for (let i = 0; i < intro.childElementCount; i++) {
//         if (i != intLast) {
//             parts[i].style.opacity = '0';
//             parts[i].style.display = 'none';

//             continue;
//         }
//         parts[i].style.opacity = '1';
//         parts[i].style.display = 'block';
//     }
// });