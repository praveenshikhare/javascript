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
// const getPromise=()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("promise created");
//         reject("error");
//     });
// };
// let promise=getPromise();
// promise.then(()=>{
//     console.log("promise fullfiled");
// });
// promise.catch(()=>{
//     console.log("promise rejected");
// })

// function asyncfunc1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data1");
//             resolve("succuss");
//         },5000);
//     });
// }
// function asyncfunc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data2");
//             resolve("succuss");
//         },5000);
//     });
// }
// console.log("fetching the data1.....");
// asyncfunc1().then((res)=>{
//     console.log("fetching the data 2.....");
//     let p2=asyncfunc2();
//     asyncfunc2().then((res)=>{});
//     });

// function getData(dataid){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataid);
//             resolve("succuss");
//         },4000);
//     });
// }
// console.log("fetching the data 1.....");
// getData(1).then((res)=>{
//     console.log("fetching the data 2.....");
//     return getData(2);
// }).then((res)=>{
//     console.log("fetching the data 3.....");
//     return getData(3);
// }).then((res)=>{
//     console.log("fetching the data 4.....");
//     return getData(4);
// }).then((res)=>{
//     console.log(res);
// });
// (async function getAlldata(){
//     console.log("fetching data 1....");
//     await getData(1);
//     console.log("fetching data 2....");
//     await getData(2);
//     console.log("fetching data 3....");
//     await getData(3);
//     console.log("fetching data 4....");
//     await getData(4);
//     console.log("fetching data 5....");
//     await getData(5);
// })();

function getAnswer(answers,getNewAnswer){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("answer",answers);
            if(getNewAnswer){
                getNewAnswer();
            }
            resolve("succuss");
        },3000);
    });
}
// call back hell
console.log("getting answer1...");
getAnswer(1, ()=>{
    console.log("getting answer2...");
    getAnswer(2,()=>{
        console.log("getting answer3...");
        getAnswer(3,()=>{
            console.log("getting answer4...");
            getAnswer(4);
        });
    });
})
// promise chaining
// console.log("getting answer1...");
// getAnswer(1).then((res)=>{
//     console.log("getting answer2...");
//     return getAnswer(2);
// }).then((res)=>{
//     console.log("getting answer3...");
//     return getAnswer(3);
// }).then((res)=>{
//     console.log("getting answer4...");
//     return getAnswer(4);
// }).then((res)=>{
//     console.log(res);
// })
// async-await 
// (async function getallAnswer(){
//     console.log("getting answer1...");
//     await getAnswer(1);
//     console.log("getting answer2...");
//     await getAnswer(2); 
//     console.log("getting answer3...");
//     await getAnswer(3);
//     console.log("getting answer4...");  
//     await getAnswer(4);
//     console.log("getting answer5...");
//     await getAnswer(5);
// })();


