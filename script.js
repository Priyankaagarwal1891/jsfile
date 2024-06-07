const k=20;
//k=k+20;
console.log(k);

var j=30;
function add(){
    let i=10;
    console.log(i);
    console.log(j);
}
add();
//console.log(i);

const myLang=['html','css','python','php'];
console.log(myLang[2]);
var numberofitems=myLang.length;
console.log(numberofitems);
var index=myLang.indexOf('php');
console.log("the index no. is: "+index);


var sum=0;
var text="";
for(let i=0;i<4;i++){
    sum=sum+i;
    text=text+myLang[i]+" ";
}
console.log(sum);
console.log("the languages are: "+text);
if(sum==6){
    console.log('correct');
}else{
    console.log('incorrect');
}




