let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetButton");
let newGameBtn=document.querySelector("#newbtn");
let msgContainers=document.querySelector(".messageContainer");
let msg= document.querySelector("#msg");

let turn0=true;
let winnerPatterns = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]];
const resetGame =()=>{
    turn0 = true;
    enabledBoxes();
    msgContainers.classList.add("hide");

}
boxes.forEach((box) => {
    box.addEventListener("click", () => {  
        if (turn0) {//for player O the condition will be true 
            box.innerText = "O";
            turn0 = false;
        }
        else {//for player X the condition will be true 
            box.innerText = "X";
            turn0 = true
        }
        box.disabled = true;
        checkWinner(); 
    });
})
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML=""
    }
}
  const showWinner=(winner)=>{
msg.innerText=`Congratulation the winner is ${winner}`;
msgContainers.classList.remove("hide");
}

const checkWinner = () => {
    for (let pattern of winnerPatterns) {
        let posiValue1 = boxes[pattern[0]].innerText;
        let posiValue2 = boxes[pattern[1]].innerText;
        let posiValue3 = boxes[pattern[2]].innerText;
        if (posiValue1 != "" && posiValue2 != "" && posiValue3 != "") {
            if (posiValue1 === posiValue2 && posiValue2 === posiValue3) {
                showWinner(posiValue1);
            }
        }
    }
}
newGameBtn.addEventListener('click',resetGame);
resetBtn.addEventListener('click',resetGame)