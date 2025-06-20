const cube = document.querySelector('.cube');
const cubeFaces = document.querySelectorAll('.faceX');
const faces = [cubeFaces[3], cubeFaces[0], cubeFaces[2], cubeFaces[1]];
var currentFaceX = 0;
// var currentFaceY = 0;
const arrows = document.querySelectorAll('.arrow');
// const languages = ["python", "Javascript", "php"];
const languages = [
    { names: "python", color: "#ffa500dd" },
    { names: "javascript", color: "#ffff00dd" },
    { names: "php", color: "#800080dd" },
    { names: "ruby", color: "#ff0000dd" },
    { names: "java", color: "#ffffffdd" },
    // { names: "C++", color: "#008000dd" }
];
const langMax = languages.length;
const max = 4;
var currentPage = 0;
var front = 1;
var back = mod(front - 2, max);

for (let g = 0; g < max; g++) {
    faces[g].innerHTML = languages[mod(g, langMax)].names;
    faces[g].style.backgroundColor = languages[mod(g, langMax)].color;
}

faces.forEach((face) => {
    face.style.color = 'transparent';
    // resize_to_fit(face, cube);
});

faces[front].style.color = 'white';


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
        // console.log(languages[mod(currentPage + 4, 7)]);
        if (valueOne > 0) {
            faces[back].innerHTML = languages[mod(currentPage + 4, langMax)].names;
            faces[back].style.backgroundColor = languages[mod(currentPage + 4, langMax)].color;
        } else {
            faces[back].innerHTML = languages[mod(currentPage + 2, langMax)].names;
            faces[back].style.backgroundColor = languages[mod(currentPage + 2, langMax)].color;
        }
        // faces[back].innerHTML = valueOne > 0 ? languages[mod(currentPage + 4, langMax)].names : languages[mod(currentPage + 2, langMax)].names;
        // faces[back].style.backgroundColor = valueOne > 0 ? languages[mod(currentPage + 4, langMax)].color : languages[mod(currentPage + 2, langMax)].color;
        currentPage += valueOne;

    });
})


function nonEuclide(idk) {
    for (let g = 0; g < max; g++) {
        faces[g].innerHTML = languages[g];
    }
}

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


// const objArray = [
//     { first: "1", second: "one" },
//     { first: "2", second: "two" },
//     { first: "3", second: "three" }
// ];