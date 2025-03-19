
function addYear(){
    let currentYear=new Date().getFullYear();
    let pageYear=document.getElementById('copyYear');
    pageYear.innerHTML="© "+currentYear+" designed and coded by Pauline Zhang";
}


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
