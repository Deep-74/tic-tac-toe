let turn = "X";
let sound = new Audio("Ting Sound .mp3");
let error = new Audio("Windows error.mp3");
let win = new Audio("win sound.mp3");
let arr = [
  [1, 2, 3],
  [1, 4, 7],
  [1, 5, 9],
  [2, 5, 8],
  [3, 6, 9],
  [3, 5, 7],
  [4, 5, 6],
  [7, 8, 9],
];

function changeturn() {
  if (turn == "X") turn = "O";
  else {
    turn = "X";
  }
}

let boxes = Array.from(document.getElementsByClassName("box"));
console.log(boxes);
function checkwin() {
  for (let i = 0; i < 9; i++) {
    if (
      boxes[arr[i][0] - 1].innerHTML == boxes[arr[i][1] - 1].innerHTML &&
      boxes[arr[i][1] - 1].innerHTML == boxes[arr[i][2] - 1].innerHTML &&
      boxes[arr[i][2] - 1].innerHTML != " "
    ) {
      win.play();
      window.alert("winner found click on reset button to restart");
    }
  }
}
console.log(boxes);
boxes.forEach((element) => {
  //  element.addEventListner("click", ()=> console.log("e"))
  element.addEventListener("click", () => {
    if (element.innerHTML == " ") {
      element.innerHTML = turn;
      sound.play();
      changeturn();
      checkwin();
    } else {
      error.play();
    }
  });
});

let butt = document.querySelector("button");
butt.addEventListener("click", () => {
  boxes.forEach((ele) => {
    ele.innerHTML = " ";
  });
});
