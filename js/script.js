//HAMBURGERMENY MOBIL

//kopplar javascript till knappen i html//
const menuButton = document.querySelector(".menu-toggle");
//kopplar javascript till listan nav(länkarna)//
const menu = document.querySelector("nav ul");
//funktion för vad som händer vid klick på hamburgermeny--
menuButton.addEventListener("click", function(){
menu.classList.toggle("open");
});

//KONTAKFORMULÄR

//Hämtar kontaktformulär//
const contactForm = document.querySelector(".contactform");

//Hämtar felmeddelande för namn//
const nameError = document.querySelector("#name-error");
//Hämtar felmeddelande för mail//
const emailError = document.querySelector("#mail-error");
//Hämtar felmeddelande för meddelande//
const messageError = document.querySelector("#message-error");

//Funktion som kontrollerar formulär när det skickas
contactForm.addEventListener("submit", function(event){
event.preventDefault();
nameError.textContent = "";
emailError.textContent = "";
messageError.textContent = "";   


//Hämtar värden från formuläret och kontrollerr mellanslag
const name= document.querySelector("#name").value.trim();
const email= document.querySelector("#mail").value.trim();
const message= document.querySelector("#message").value.trim();

//Kontrollerar att namnfält ej är tomt
if (name===""){
    nameError.textContent= "Du måste fylla i namn!";
    return;
}
if (email===""){
    emailError.textContent= "Du måste fylla i e-post!";
    return;
}
if (message===""){
    messageError.textContent= "Meddelandefältet får ej vara tomt!";
    return;
}
});
