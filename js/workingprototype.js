const cube = document.querySelector('.cube');
const cubeFaces = document.querySelectorAll('.faceX');
const faces = [cubeFaces[3], cubeFaces[0], cubeFaces[2], cubeFaces[1]];
var currentFaceX = 0;
// var currentFaceY = 0;
const arrows = document.querySelectorAll('.arrow');
const languages = ["1", "2", "3", "4", "5", "6"];
const langMax = languages.length;
const max = 4;
var dir = 0;
var currentPage = 0;
var front = 1;
var back = mod(front - 2, 4);

for (let g = 0; g < max; g++) {
    faces[g].innerHTML = languages[g];
}

faces.forEach((face) => {
    face.style.color = 'transparent';
    // resize_to_fit(face, cube);
});
faces[front].style.color = 'white';

// first calibration
currentPage += 4;

arrows.forEach((arr) => {
    arr.addEventListener('click', () => {
        let valueOne = parseInt(arr.getAttribute('valueOne'));
        currentFaceX += parseInt(arr.getAttribute('valuex'));

        // refresh front and back
        front = mod(front + valueOne, max);
        back = mod(back + valueOne, max);

        // rotate cube
        cube.style.transform = `translateZ(-50px) rotateY(${currentFaceX}deg)`;
        // console.log(back)

        // make back invisible
        faces.forEach((face) => {
            face.style.color = 'transparent';
        });
        faces[front].style.color = 'white';

        // change 
        if (valueOne > 0) {
            // sides recalibrations idk
            if (dir >= 0) {
                faces[mod(back - 1, 4)].innerHTML = languages[mod(currentPage - 1, langMax)];
                dir = -1;
            }
            // change the backside
            faces[back].innerHTML = languages[mod(currentPage, langMax)];
        } else {
            // sides recallibration but opposite
            if (dir <= 0) {
                faces[mod(back + 1, 4)].innerHTML = languages[mod(currentPage + 1, langMax)];
                dir = 1;
            }
            // change the backside
            faces[back].innerHTML = languages[mod(currentPage, langMax)];
        }
        currentPage += valueOne;

        // faces[back].innerHTML = valueOne > 0 ? languages[mod(currentPage + 4, langMax)] : languages[mod(currentPage + 2, langMax)];
        // console.log(currentPage);

    });
})


// function nonEuclide(idk) {
//     for (let g = 0; g < max; g++) {
//         faces[g].innerHTML = languages[g];
//     }
// }

function mod(x, m) {
    return (x % m + m) % m;
}

// function resize_to_fit(elment, containering) {
//     let fontSize = window.getComputedStyle(elment).fontSize;
//     elment.style.fontSize = (parseFloat(fontSize) - 1) + 'px';

//     if (elment.clientHeight >= containering.clientHeight) {
//         resize_to_fit(elment, containering);
//     }
// }

// function wrapArray(arrayy, start) {
//     const startIndex = start;
//     let newArrayy = [];

//     [
//         ...arrayy.slice(startIndex),
//         ...arrayy.slice(0, startIndex)
//     ].forEach(elm => newArrayy.push(elm));

//     return newArrayy;
// }



/**
const cube = document.querySelector('.cube');
const cubeFaces = document.querySelectorAll('.faceX');
const faces = [cubeFaces[3], cubeFaces[0], cubeFaces[2], cubeFaces[1]];
var currentFaceX = 0;
// var currentFaceY = 0;
const arrows = document.querySelectorAll('.arrow');
const languages = ["1", "2", "3", "4", "5", "6"];
const langMax = languages.length;
const max = 4;
var dir = 0,
    currentPage = 0,
    front = 1,
    back = mod(front - 2, 4);


for (let g = 0; g < max; g++) {
    faces[g].innerHTML = languages[g];
}

transitioning()

// first calibration
currentPage += 4;

arrows.forEach((arr) => {
    arr.addEventListener('click', () => {
        let valueOne = parseInt(arr.getAttribute('valueOne'));
        currentFaceX += parseInt(arr.getAttribute('valuex'));

        // refresh front and back
        front = mod(front + valueOne, max);
        back = mod(back + valueOne, max);

        // rotate cube
        cube.style.transform = `translateZ(-50px) rotateY(${currentFaceX}deg)`;
        // console.log(back)

        // make back invisible
        transitioning();

        // change 
        nonEuclidean(valueOne);

        // faces[back].innerHTML = valueOne > 0 ? languages[mod(currentPage + 4, langMax)] : languages[mod(currentPage + 2, langMax)];
        // console.log(currentPage);

    });
})

function transitioning() {
    faces.forEach((face) => {
        face.style.color = 'transparent';
    });
    faces[front].style.color = 'white';
}


function nonEuclidean(value) {
    if (value > 0) {
        // sides recalibrations idk
        if (dir >= 0) {
            faces[mod(back - 1, 4)].innerHTML = languages[mod(currentPage - 1, langMax)];
            dir = -1;
        }
        // change the backside
        faces[back].innerHTML = languages[mod(currentPage, langMax)];
    } else {
        // sides recallibration but opposite
        if (dir <= 0) {
            faces[mod(back + 1, 4)].innerHTML = languages[mod(currentPage + 1, langMax)];
            dir = 1;
        }
        // change the backside
        faces[back].innerHTML = languages[mod(currentPage, langMax)];
    }
    currentPage += value;
}

function mod(x, m) {
    return (x % m + m) % m;
}
 */