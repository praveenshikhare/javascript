let num =prompt("enter a number");
arr=[]
for(let i=1;i<=num;i++){
    arr[i-1]=i;
}
console.log(arr);

let sum=arr.reduce((res,cur)=>{
    return res+cur;
}    
)
console.log(sum);
//factorial
let fact=arr.reduce((res,cur)=>{
    return res*cur;
});
console.log(fact);

