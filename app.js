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
let data="secrete imformation";
class user{
    constructor(name, email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log("data",data)
    }
}
class admin extends user{
    editData(){
        console.log("new data");
    };
    constructor(name,email){
        super(name, email);
    }
}
let student1=new user("praveen","praveen@example.com");
let student2=new user("shweta","shweta@example.com");
let admin1=new admin("admin","admin@example.com");