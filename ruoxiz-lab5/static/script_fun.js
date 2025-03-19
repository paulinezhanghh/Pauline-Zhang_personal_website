
function addYear(){
    let currentYear=new Date().getFullYear();
    let pageYear=document.getElementById('copyYear');
    pageYear.innerHTML="© "+currentYear+" designed and coded by Pauline Zhang";
}

function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(data => {
            document.getElementById("adviceText").innerText = data.slip.advice;
        })
        .catch(() => {
            document.getElementById("adviceText").innerText = "Oops! Something went wrong. Try again.";
        });
}