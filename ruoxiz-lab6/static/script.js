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
addYear()

let L1=['Watermelon','Pineapple','Pear','Banana'];
let L2=['Apple','Banana','Kiwi','Orange'];

function findTheBanana(item){
   if(item=='Banana'){
    alert('We found the Banana in the first array');
    }
}

//L1.forEach(findTheBanana);

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

function addYear(){
    let currentYear=new Date().getFullYear();
    let pageYear=document.getElementById('copyYear');
    pageYear.innerHTML="© "+currentYear+" designed and coded by Pauline Zhang";
}


function showList(){
    let list=document.getElementById('funList');
    let button=document.getElementById("showButton");

    if (list && button) {
        list.style.display = "block";
        button.style.display = "none";
    }
}

$(document).ready(function() {
    $("#readMoreBtn").click(function() {
        $("#fullBio").slideDown(); 
        $("#readMoreBtn").hide(); 
        $("#readLessBtn").show();
    });

    $("#readLessBtn").click(function() {
        $("#fullBio").slideUp();
        $("#readMoreBtn").show();   
        $("#readLessBtn").hide();  
    });
});


function validateForm() {
    let nameField = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");
    let feedback = document.getElementById("formFeedback");

    if(!nameField.checkValidity() || !email.checkValidity() || !message.checkValidity()){
        feedback.innerHTML = "Please fill out the form correctly so I can get back to you :)";
    }
    else{
        feedback.innerHTML = "Thank you for your message! I'll get back to you as soon as possible.";
    }
}

function toggleMenu() {
    let navLinks = document.querySelector(".nav-links-mob");
    
    if (navLinks.style.display === "block") {
      navLinks.style.display = "none";
    } else {
      navLinks.style.display = "block";
    }
    navLinks.style.gap = "10px";
}

function highlightActiveLink() {
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        const href = link.getAttribute("href");
        console.log(href);
        if (href.includes(currentPath)) {
            link.classList.add("active");
            console.log("HERE");
            console.log(link.classList);
        }
    });
}

document.addEventListener("DOMContentLoaded", highlightActiveLink);
