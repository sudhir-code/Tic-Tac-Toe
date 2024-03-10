const btn = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
let count = 0;
const options = ["","","","","","","",""];
const winnerPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame = ()=>{
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
}

btn.forEach((item) => {
    item.addEventListener("click",(e)=>{
        if(turnO === "X")
        {
            item.innerHTML="X";
            turnO = "O";
        }
        else
        {
            item.innerHTML="O";
            turnO= "X"
        }
        checkWinner();
        item.disabled=true;
    })
})

const gameDraw = ()=>{
    msg.innerText = `Game was a Draw`;
    msgContainer.classList.remove("hide");
}

const boxDisable = () => {
    for (let boxe of btn) {
        boxe.disabled=true;
    }
}

const enableBoxes = ()=>{
    for(let box of btn)
    {
        box.disabled=false;
        box.innerText = "";
    }
}

const showWinner = (box) =>{
    msg.innerText = `Congratulation, Winner is ${box}`;
    msgContainer.classList.remove("hide")
    boxDisable();
}

const checkWinner = () => {
    for (let pattern of winnerPattern) {
    
        // const s = winnerPattern[i];
        const box1 = btn[pattern[0]].innerHTML;
        const box2 = btn[pattern[1]].innerHTML;
        const box3 = btn[pattern[2]].innerHTML;
        if(box1 != ' ' && box2 != '' && box3 != '')
        {
        if(box1 === box2 && box2 === box3) 
        {
        
            showWinner(box1)
            // btn.disabled= true;
            return true
        }
    }
}
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

