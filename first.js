let score =prompt("enter your score");
if(score>=80 && score<=100){
    console.log("your grade is A");
}
else if(score>=70 && score<80){
    console.log("your grade is B");
}
else if(score>=60 && score<70){
    console.log("your grade is C");
}
else if(score>=50 && score<60){
    console.log("your grade is D");
}
else if(score>=0 && score<50){
    console.log("your grade is F");
}
else{
    console.log("Invalid score");
}

