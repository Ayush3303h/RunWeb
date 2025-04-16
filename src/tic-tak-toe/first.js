export const text_html = `
<div class="turn-container">
    <h3>Turn For</h3>
    <div class="turn-box align">X</div>
    <div class="turn-box align">O</div>
    <div class="bg"></div>
</div>
<div class="main-grid">
    <div class="box align"></div>
    <div class="box align"></div>
    <div class="box align"></div>
    <div class="box align"></div>
    <div class="box align"></div>
    <div class="box align"></div>
    <div class="box align"></div>
    <div class="box align"></div>
    <div class="box align"></div>
</div>
<h2 id="results"></h2>
<button id="play-again">Play Again</button>
`;

export const text_css = `
* {
    color: white;
    font-family: sans-serif;
    transition: 0.2s ease-in-out;
    user-select: none;
}
.align {
    display: flex;
    justify-content: center;
    align-items: center;
}
body {
    background: linear-gradient(90deg,#025270,#3a4452);
    margin: 0;
    padding: 0;
    width: 100vw;
    text-align: center;
    padding-top: 5vh;
}
.turn-container {
    width: 170px;
    height: 80px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    position: relative;
}
.turn-container h3 {
    margin: 0;
    grid-column-start: 1;
    grid-column-end: 3;
}
.turn-container .turn-box {
    border: 3px solid #000;
    font-size: 1.6rem;
    font-weight: 700;
}
.turn-container .turn-box:nth-child(even) {
    border-right: none;
}
.bg {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 85px;
    height: 40px;
    background-color: #9ed908;
    z-index: -1;
}
.main-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    height: 250px;
    width: 250px;
    margin: 30px auto;
    border: 2px solid #000;
}
.box {
    cursor: pointer;
    font-size: 2rem;
    font-weight: 700;
    border: 2px solid #9ed908;
}
.box:hover {
    background-color: rgb(72, 6, 126);
}
#play-again {
    background-color: #147603;
    padding: 10px 25px;
    border: none;
    font-size: 1.2rem;
    border-radius: 5px;
    cursor: pointer;
    display: none;
}
#play-again:hover {
    padding: 10px 40px;
    background-color: #08D9D6;
    color: #000;
}
`;

export const text_js = `
let boxes = document.querySelectorAll(".box");
let turn = "X";
let isGameOver = false;

boxes.forEach(e => {
    e.innerHTML = "";
    e.addEventListener("click", () => {
        if (!isGameOver && e.innerHTML === "") {
            e.innerHTML = turn;
            checkWin();
            checkDraw();
            changeTurn();
        }
    });
});

function changeTurn() {
    if (turn === "X") {
        turn = "O";
        document.querySelector(".bg").style.left = "85px";
    } else {
        turn = "X";
        document.querySelector(".bg").style.left = "0";
    }
}

function checkWin() {
    let winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    for (let i = 0; i < winConditions.length; i++) {
        let v0 = boxes[winConditions[i][0]].innerHTML;
        let v1 = boxes[winConditions[i][1]].innerHTML;
        let v2 = boxes[winConditions[i][2]].innerHTML;

        if (v0 !== "" && v0 === v1 && v0 === v2) {
            isGameOver = true;
            document.querySelector("#results").innerHTML = turn + " wins!";
            document.querySelector("#play-again").style.display = "inline";

            for (let j = 0; j < 3; j++) {
                boxes[winConditions[i][j]].style.backgroundColor = "#08D9D6";
                boxes[winConditions[i][j]].style.color = "#000";
            }
        }
    }
}

function checkDraw() {
    if (!isGameOver) {
        let isDraw = true;
        boxes.forEach(e => {
            if (e.innerHTML === "") isDraw = false;
        });

        if (isDraw) {
            isGameOver = true;
            document.querySelector("#results").innerHTML = "Draw";
            document.querySelector("#play-again").style.display = "inline";
        }
    }
}

document.querySelector("#play-again").addEventListener("click", () => {
    isGameOver = false;
    turn = "X";
    document.querySelector(".bg").style.left = "0";
    document.querySelector("#results").innerHTML = "";
    document.querySelector("#play-again").style.display = "none";

    boxes.forEach(e => {
        e.innerHTML = "";
        e.style.removeProperty("background-color");
        e.style.color = "#fff";
    });
});
`;