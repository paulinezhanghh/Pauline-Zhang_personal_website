function addYear(){
    let currentYear=new Date().getFullYear();
    let pageYear=document.getElementById('copyYear');
    pageYear.innerHTML="© "+currentYear+" designed and coded by Pauline Zhang";
}
