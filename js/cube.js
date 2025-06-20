const cube = document.querySelector(".cube");
const cubeFaces = document.querySelectorAll(".faceX");
var currentFaceX = 0;

{
  // const languages = [
  //     { names: "python", color: "#ffa500dd" },
  //     { names: "javascript", color: "#ffff00dd" },
  //     { names: "php", color: "#800080dd" },
  //     { names: "ruby", color: "#ff0000dd" },
  //     { names: "java", color: "#ffffffdd" },
  //     { names: "C++", color: "#008000dd" }
  // ];
}

const cursors = {
  front: {
    face: cubeFaces[0],
    value: 0,
  },
  right: {
    face: cubeFaces[2],
    value: 0,
  },
  left: {
    face: cubeFaces[3],
    value: 0,
  },
  back: {
    face: cubeFaces[1],
    value: 0,
  },
};

const cursorOrder = [
  cursors["front"],
  cursors["right"],
  cursors["back"],
  cursors["left"],
];

const arrows = document.querySelectorAll(".arrow");
const languages = [
  { names: "1", color: "red" },
  { names: "2", color: "orange" },
  { names: "3", color: "yellow" },
  { names: "4", color: "lime" },
  { names: "5", color: "green" },
  { names: "6", color: "cyan" },
  { names: "7", color: "blue" },
  { names: "8", color: "purple" },
];

let currentCursor = 0;

let activeFrontFace = 0;

const main = () => {
  let next = languages.at(activeFrontFace + 1)
    ? activeFrontFace + 1
    : activeFrontFace - 3;
  let previous = languages.at(activeFrontFace - 1)
    ? activeFrontFace - 1
    : activeFrontFace + 3;

  cursorOrder.at(activeFrontFace).value = activeFrontFace;
  cursorOrder.at(activeFrontFace + 1).value = next;
  cursorOrder.at(activeFrontFace - 1).value = previous;

  cursorOrder.forEach((cursor) => {
    cursor.face.innerHTML = languages.at(cursor.value).names;
    cursor.face.style.backgroundColor = languages.at(cursor.value).color;
  });
};

arrows.forEach((arr) => {
  arr.addEventListener("click", () => {
    const valuex = parseInt(arr.getAttribute("valuex"));
    const valueOne = parseInt(arr.getAttribute("valueone"));

    let rotate =
      valuex === 90
        ? valuex * (currentCursor - 1)
        : valuex * (currentCursor + 1);

    console.log(rotate);
    cube.style.transform = `translateZ(-50px) rotateY(${rotate}deg)`;

    if (activeFrontFace === 7 && valueOne === 1) {
      activeFrontFace = 0;
    } else if (activeFrontFace === 0 && valueOne === -1) {
      activeFrontFace = 7;
    } else {
      activeFrontFace += valueOne;
    }
    main();

    // console.log(activeFrontFace);
  });
});

main();
// const langMax = languages.length;
// const max = 4;
// var dir = 0,
//   currentPage = 0,
//   front = 1,
//   back = mod(front - 2, 4),
//   initialD = false,
//   changeLenght = langMax - 6;

// for (let g = 0; g < max; g++) {
//   faces[g].innerHTML = languages[g].names;
//   faces[g].style.backgroundColor = languages[g].color;
// }

// transitioning();

// first calibration
// currentPage += 4;

// arrows.forEach((arr) => {
//   arr.addEventListener("click", () => {
//     let valueOne = parseInt(arr.getAttribute("valueOne"));
//     currentFaceX += parseInt(arr.getAttribute("valuex"));

//     // refresh front and back
//     front = mod(front + valueOne, max);
//     back = mod(back + valueOne, max);

//     console.log({ front, back });

//     // rotate cube
//     cube.style.transform = `translateZ(-50px) rotateY(${currentFaceX}deg)`;

//     // make back invisible
//     transitioning();

//     // console.log("after", { front, back });
//     // change
//     nonEuclidean(valueOne);
//     console.log("after", { front, back });

//     // faces[back].innerHTML = valueOne > 0 ? languages[mod(currentPage + 4, langMax)] : languages[mod(currentPage + 2, langMax)];
//     // console.log(currentPage);
//   });
// });

// function transitioning() {
//   faces.forEach((face) => {
//     face.style.color = "transparent";
//   });
//   faces[front].style.color = "white";
// }

// function nonEuclidean(value) {
//   let forWard = 1;
//   // calibration
//   if (value > 0 && dir >= 0) {
//     currentPage = initialD ? (currentPage += changeLenght) : currentPage;
//     faces[mod(back - 1, 4)].innerHTML =
//       languages[mod(currentPage - forWard, langMax)].names;
//     faces[mod(back - 1, 4)].style.backgroundColor =
//       languages[mod(currentPage - forWard, langMax)].color;
//     dir = -1;

//     console.log("up");
//   } else if (value < 0 && dir <= 0) {
//     // currentPage -= changeLenght;
//     currentPage = initialD ? (currentPage -= changeLenght) : currentPage;
//     faces[mod(back + 1, 4)].innerHTML =
//       languages[mod(currentPage + forWard, langMax)].names;
//     faces[mod(back + 1, 4)].style.backgroundColor =
//       languages[mod(currentPage + forWard, langMax)].color;
//     dir = 1;
//     // initialD = true;

//     console.log("down");
//   }
//   // change the backside
//   faces[back].innerHTML = languages[mod(currentPage, langMax)].names;
//   faces[back].style.backgroundColor =
//     languages[mod(currentPage, langMax)].color;

//   console.log(languages[mod(currentPage, langMax)]);

//   currentPage += value;
//   console.log(currentPage);
// }

// function mod(x, m) {
//   return ((x % m) + m) % m;
// }

// unused but very cool

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
