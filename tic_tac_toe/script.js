let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset_btn");
let newbtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg");
let turno=true; //playerx playero
let count=0;
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetgame=()=>{
    turno=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turno){
            box.innerText="o";
            box.style.color="#ED8282";
            turno=false;
        }else{
            box.innerText="X";
            box.style.color="#8C5679";
            turno=true;
        }
       box.disabled=true;
       count++;
       let isWinner=checkWinner();
       if(count===9&& !isWinner){
        gameDraw();
       }
    });
});
const gameDraw=()=>{
    msg.innerText="game was a draw";
    msgcontainer.classList.remove("hide");
    disableBoxes();
}
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};


const showWinner=(winner)=>{
    msg.innerText=`congragulations,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    
};
const checkWinner=()=>{
    for(let pattern of winpatterns){
        let ps1value=boxes[pattern[0]].innerText;
        let ps2value=boxes[pattern[1]].innerText;
        let ps3value=boxes[pattern[2]].innerText;
        if(ps1value!="" && ps2value!="" && ps3value!=""){
            if(ps1value===ps2value && ps2value===ps3value){
                console.log("winner",ps1value);
                showWinner(ps1value);
            }
        }
    }    
};
newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
