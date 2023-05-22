$(document).ready(function(){
//Affiche et cache les informations de contact
$("#contactBox").click(function(){
    $("#contact").toggleClass("hidden")
})

$("#contact").click(function(){
    if($("#contact").hasClass("hidden")){
        $("#contact").hide()
    }
})

//Bouton revenir au début
const start = document.getElementById('backToStart')

//Cacher le bouton
window.onload = () => {
    start.style.visibility = "hidden";
    start.style.opacity = 0;
}

//Affiche le bouton si le scroll est plus grand que 200px
window.onscroll = () => {
    if (window.scrollY > 150) {
        start.style.visibility = "visible";
        start.style.opacity = 1;
    } 
    //Si pas cacher le bouton
    else {
        start.style.visibility = "hidden";
        start.style.opacity = 0;
    }
};
})