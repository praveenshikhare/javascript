let mode=document.querySelector("#mode");
let currmode="light";
mode.addEventListener("click",()=>{
    if(currmode==="light"){
        currmode="dark"
        document.body.style.backgroundColor="black";
    }
    else{
        currmode="light"
        document.body.style.backgroundColor="white";
    }
    console.log(currmode)
});