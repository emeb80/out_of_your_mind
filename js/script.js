//HAMBURGERMENY MOBIL

//kopplar javascript till knappen i html//
const menuButton = document.querySelector(".menu-toggle");
//kopplar javascript till listan nav(länkarna)//
const menu = document.querySelector("nav ul");
//funktion för vad som händer vid klick på hamburgermeny--
menuButton.addEventListener("click", function () {
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

//Hämtar formulärens inmatningsfält
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#mail");
const messageInput = document.querySelector("#message");

//Meddelande vid lyckad skickning av formulär
const successMessage = document.createElement("p");
successMessage.classList.add("success-message");
contactForm.appendChild(successMessage);

//Funktion för att ta bort felmeddelande när fällt fylls i
function clearError(input, error) {
  input.addEventListener("input", function () {
    if (input.value.trim() !== "") {
      error.textContent = "";
    }
  });
}
//funktionsanrop av fält
clearError(nameInput, nameError);
clearError(emailInput, emailError);
clearError(messageInput, messageError);

//Kontrollerar formuläret när användaren skickar
contactForm.addEventListener("submit", function (event) {
  //Tömmer formulären på felmeddelande bäkreftelsemeddelande
  event.preventDefault();
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMessage.textContent = "";

  let isValid = true;

  //Hämtar värden från formuläret och tar bort extra mellanslag
  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#mail").value.trim();
  const message = document.querySelector("#message").value.trim();

  //Kontrollerar att namnfält ej är tomt
  if (name === "") {
    nameError.textContent = "Du måste fylla i namn!";
    isValid = false;
  }
  //Kontrollerar att e-post ej är tomt
  if (email === "") {
    emailError.textContent = "Du måste fylla i e-post!";
    isValid = false;
  }
  //Kontroll att e-post har ett snabel-a och punkt
  else if (!email.includes("@") || !email.includes(".")) {
    emailError.textContent = "Ange en giltig e-postadress!";
    isValid = false;
  }

  //Kontrollerar att meddelande ej är tomt
  if (message === "") {
    messageError.textContent = "Meddelandefältet får ej vara tomt!";
    isValid = false;
  }

  //Meddelande som visas när alla valideringar är godkända och formuläret skickats
  if (isValid === true) {
    successMessage.textContent = "Kontaktformuläret är korrekt ifyllt!";
  }
});
