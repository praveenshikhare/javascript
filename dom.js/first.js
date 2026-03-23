let h2=document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText=h2.innerText + "from apna college";

let divs=document.querySelectorAll(".box");
let idx=1;
for(let div of divs){
    div.innerText=`new value ${idx}`;
    idx++;
}