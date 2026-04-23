// console.log("i love js");
// console.log("hello world");

// fullName ="praveen shikhare";
// console.log(fullName);

//  const student={
//     fullName:"praveen shikhare",
//     age:19,
//     cgpa:8.6,
//  }
//  student["fullName"]="shweta patil";
//  console.log(student.fullName);

// const profile={
//     fullName:"shradha khapra",
//     post:195,
//     follow:true,
//     likes:100
// }
// console.log(profile);

//operrators 
// let a=5;
// let b=4;
//  console.log("a+b =",a+b);
//  console.log("a-b =",a-b);
//  console.log("a*b =",a*b);
//  console.log("a/b =",a/b);
//  console.log("a%b =",a%b);
//  console.log("a**b =",a**b);
//  console.log("a++ =",a++);
//  console.log("++a =",++a);

// logical operators
// let a=5;
// let b=3;
// let cond1 =a<b;
// let cond2=b===3;
// console.log(cond1&&cond2);
// console.log(cond1||cond2);

// conditional statements
// let mode="dark";
// let color;
// if(mode==="dark"){
//     console.log("dark");
// }
// if(mode==="light"){
//     console.log("light")
// }

// let mode="light";
// let color;
// if(mode==="dark"){
//     console.log("dark");
// }else{
//     console.log("light")
// }

// let num =prompt("enter a number");
// if(num%5===0){
//     console.log(num,"is multiple of 5");
// }else{
//     console.log(num,"is not multiple of 5");
// }

// let marks=prompt("enter marks");
// if(marks>=80){
//     console.log("grade A");
// }else if(marks>=70){
//     console.log("grade B");
// }else if(marks>=60){
//     console.log("grade C");
// }else if(marks>=50){
//     console.log("grade D");
// }else{
//     console.log("FAIL")
// }

// loops

// for(let i=0;i<10; i++){
//     console.log("apnacollege",i);
// }

// print all the even numbers 0 to 100
//  for(let i=0;i<=100;i++){
//      if(i%2===0){
//          console.log(i);
//     }
// }

// let gameNum=18;
// let userNum=prompt("enter a number");
// while(userNum!=gameNum){
//     userNum=prompt("you enterd wronge number! please enter number again");

// }
// console.log("congratulations you guessed the correct number ");
// let fullName=prompt("enter your full name");

// console.log("@"+fullName.concat(fullName.length));

// let marks=[85,97,44,37,76,60];
// let sum=0;
// for (let mark of marks){
//     sum+=mark;
//     avg=sum/marks.length;
    
// }
// console.log(avg);

// let items=[250,645,300,900,50];
// let i=0;
// for(let item of items){
//     let offer=item/10;
//     items[i]=items[i]-offer;
//     console.log(items[i]);
//     i++;
// }
// let companies=["blooming","microsoft","uber","google","IBM","netflix"];
// console.log(companies.shift());
// console.log(companies.splice(2,1,"ola"));
// console.log(companies.push("Amazon"));

// functions
// function countVowels(str){
//     let vowels="shwetapatil";
//     let count=0;
//     for(let char of vowels){
//         if(char==="a"|| char==="e"||char==="i"||char==="o"||char==="u"){
//             count++;
//         }
//     }
//     console.log(count);
// }
// const countVowels=(str)=>{
//     let count=0;
//     let vowels="praveenshikhare";
//     for(let char of vowels){
//          if(char==="a"|| char==="e"||char==="i"||char==="o"||char==="u"){

//              count++;
        
//     }
// } 
// console.log(count);
// }
// let arr=["praveen","shweta"];
// arr.forEach((val)=>{
//     console.log(val);
// });
// let arr=[3,4,2,10,5];
// arr.forEach((val,index,arr)=>{
//     console.log(val*val,index,arr);
// });
// let arr=[2,4,6,8];
// let newArr=arr.map((val)=>{
//     return val*3;
// });
// console.log(newArr);

// let arr=[1,2,3,4,5,6,7,8,9];
// let newArr=arr.filter((val)=>{
//     return val%2===0;
// });
// console.log(newArr);
// let arr=[3,5,2,7,119,120];
// let newArr=arr.reduce((prev,curr)=>{
//     return prev>curr?prev:curr;
// });
// console.log(newArr);

// let arr=[89,91,83,99,97,56];
// let newArr=arr.filter((val)=>{
//     return val>=90;   
// });
// console.log(newArr);
// let n=prompt("enter a number");
// let arr=[];
// for(let i=1; i<=n;i++){
//     arr[i-1]=i;  
// }
// console.log(arr);
// let newArr=arr.reduce((prev,curr)=>{
//     return prev+curr;
// })
// console.log(newArr);
// let NewArr=arr.reduce((prev,curr)=>{
//     return prev*curr;
// })
// console.log(NewArr);
//  let divs=document.querySelectorAll(".box");
//  console.log(divs);
//  let idx=1;
//  for(let div of divs){
//     div.innerText=`new unique value${idx}`;
    
//     idx++;
//  }
// let newbtn=document.querySelector("button");
// newbtn.style.backgroundColor="red";
// newbtn.style.color="white";
// let para=document.querySelector("p");
// para.classList.add("myclass")

// let changemode=document.querySelector("#btn");
// let currMode="light";
// changemode.addEventListener("click", ()=>{
//     if(currMode==="light"){
//         currMode="dark";
//         document.querySelector("body").style.backgroundColor="black";

//     }else{
//         currMode="light";
//         document.querySelector("body").style.backgroundColor="white";
//     }
//     console.log(currMode);

// });
let mode=document.querySelector("div");
let changemode="light";
mode.addEventListener("mouseover",()=>{
    if(changemode==="light"){
        changemode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }else{
        changemode="light";
        document.querySelector("body").style.backgroundColor="white";

    }
    console.log(changemode);
});






