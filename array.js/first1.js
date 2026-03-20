let i=0;
let items=[250,645,300,400,50];
for (val of items){
    let offer=val/10;
    items[i]=items[i]-offer
    console.log(items[i]);
    i++;
}

