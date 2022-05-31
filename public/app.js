let cells = document.querySelectorAll('.row>div');
let msg = document.querySelector('.msg');
let turnCounter = 0;

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked)
}

function cellClicked(e) {

    turnCounter++;

    if (msg.textContent === "X is the Winner!") {
        location.reload();
    }
    if (msg.textContent === "O is the Winner!") {
        location.reload();
    }
    if (turnCounter >= 10) {
        location.reload();
    }
    if (turnCounter % 2 == true) {
        e.target.textContent = "X";
    }
    else if (turnCounter % 2 == false) {
        e.target.textContent = "O";
    } 
   
    checkWin();
}

function checkWin() {

    let winCells = [
        [cells[0], cells[1], cells[2]],
        [cells[3], cells[4], cells[5]],
        [cells[6], cells[7], cells[8]],
        [cells[0], cells[3], cells[6]],
        [cells[1], cells[4], cells[7]],
        [cells[2], cells[5], cells[8]],
        [cells[0], cells[4], cells[8]],
        [cells[2], cells[4], cells[6]],
    ];

    for (let t = 0; t < winCells.length; t++) {

        let xCount = 0;
        let oCount = 0;

        for (let j = 0; j < winCells[t].length; j++) {

            if (winCells[t][j].textContent === 'X') {
                xCount++
                // winCells[t][j].removeEventListener('click', cellClicked); 
            } else if (winCells[t][j].textContent === 'O') {
                oCount++
                // winCells[t][j].removeEventListener('click', cellClicked); 
            }
            if (xCount == 3) {
                msg.innerHTML = "X is the Winner!";
                //setTimeout(() => location.reload(), 1200);
            } else if (oCount == 3) {
                msg.innerHTML = "O is the Winner!";
                // setTimeout(() => location.reload(), 1200);
            } 
            if (turnCounter >= 9) {
                msg.innerHTML = "Draw!"
            }
         }
    }
}
  
console.log('running!')     

//if(cells[0].textContent!==""){
    //Draw!
//}

      //if(e.target.textContent == ''){}

//if(turnCounter % 2 == 0){
    // e.target.textContent = "O";
    //}else if (turnCounter % 2 !== 0){
    //e.target.textContent = "X";}

//  if (msg.textContent === "Draw!") {
//         location.reload();
//     }
// function checkBox() {
//     for (let k = 0; k < cells.length; k++) {
//         if (cells[k].textContent == 'X' || 'O') {
//             cells[k].removeEventListener('click', cellClicked);
//         }
//     }
// }