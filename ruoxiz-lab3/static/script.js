let x=5;
let y=7;
let z=x+y;
console.log(z);

let A='Hello ';
let B='world!';
let C=A+B;
console.log(C);

function SunNPrint(x1,x2){
    let x3=x1+x2;
    console.log(x3);
}

SunNPrint(x,y);
SunNPrint(A,B);

if(C.length>z){
    console.log(C);
}
else if(C.length<z){
    console.log(z);
}
else{
    console.log('good job!');
}

let L1=['Watermelon','Pineapple','Pear','Banana'];
let L2=['Apple','Banana','Kiwi','Orange'];

function findTheBanana(item){
   if(item=='Banana'){
    alert('We found the Banana in the first array');
    }
}

L1.forEach(findTheBanana);

function greetingFunc(){
    let G=document.getElementById('greeting');
    let d=new Date();
    let h=d.getHours();
    let message='';
    if(0<h && h<5){
        message='Good night';
    }
    else if(h<12){
        message='Good morning';
    }
    else if(h<18){
        message='Good afternoon';
    }
    else if(h<20){
        message='Good evening';
    }
    else{
        message='Good night';
    }
    console.log(message);
    G.innerHTML= message+', '+'I am Pauline Zhang'
}


if(window.location.href.includes('index.html')){
    window.onload=greetingFunc;
}