// class ToyotaCar{
//     constructor(brand,milleage){
//         console.log("creating new object");
//         this.brand=brand;
//         this.milleage=milleage;
//     }
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
   
// }
// let fortuner=new ToyotaCar("fortuner",10);

// let lexus=new ToyotaCar("lexus",20);

// class person{
//     constructor(name){
//         this.name=name;
//         this.spicies="homo sapiens";
//     }
//     work(){
//         console.log("do nothing");
//     }
//     eat(){
//         console.log("eat");
//     }
//     sleep(){
//         console.log("sleep");
//     }
// }
// class engineer extends person{
//     constructor(name){
//         super(name);
//     }
//     work(){
//         console.log("solving problems");
//     }   
// }
// let praveenobj =new engineer("praveen");
// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             // console.log("data",dataId);
//         reject("error");
//         if(getNextData){
//             getNextData();
//         }

//         },5000);

//     })
// } 
const getPromise=()=>{
    return new Promise((resolve,reject)=>{
        console.log("promise created");
        reject("error");
    });
};
let promise=getPromise();
promise.then(()=>{
    console.log("promise fullfiled");
});
promise.catch(()=>{
    console.log("promise rejected");
})


