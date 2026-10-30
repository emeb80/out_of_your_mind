//VALIDERING AV BOKNINGSFORMULÄR

//Hämtar bokningsformulär
const bookingForm = document.querySelector(".booking");
//hämtar namnfält
const bookingName = document.querySelector("#name");
//hämtar nummerfält
const bookingNumber = document.querySelector("#number");
//hämtar e-postfält
const bookingEmail = document.querySelector("#mail");
//hämtar godkännande av vilkor
const bookingTerms = document.querySelector("#terms");
//Hämtar boningsvilkoren + knapp som visar vilkor
const bookingTermsText = document.querySelector("#bookingterms");
const termsToggle = document.querySelector(".terms-toggle");
//Hämtar knapp för att stänga vilkoren
const termsClose = document.querySelector(".terms-close");

//Kontroll av form. när man klickar boka
bookingForm.addEventListener("submit", function (event) {
  event.preventDefault();
  //Rensar fel när de korrigeras så det inte skapas flera listor
  const oldErrorList = bookingForm.querySelector(".booking-errors");
  if (oldErrorList) {
    oldErrorList.remove();
  }
  //Rensar gamla meddelande för bekräftelse rätt ifyllt formulär
  const oldSuccessMessage = bookingForm.querySelector(".booking-success");
  if (oldSuccessMessage) {
    oldSuccessMessage.remove();
  }

  //Skapar en lista för felmeddelande
  const errorList = document.createElement("ul");
  errorList.classList.add("booking-errors");

  //förutsätt att formuläret är korrekt
  let isValid = true;

  //Kontrollerar att namn fyllts i väljer felmeddelande som visas
  if (bookingName.value.trim() === "") {
    const errorItem = document.createElement("li");
    errorItem.textContent = "Fyll i namn!";
    errorList.appendChild(errorItem);
    isValid = false;
  }
  //Kontrollerar att telefonnummer angetts och visar felmeddelande
  if (bookingNumber.value.trim() === "") {
    const errorItem = document.createElement("li");
    errorItem.textContent = "Fyll i telefonnummer!";
    errorList.appendChild(errorItem);
    isValid = false;
  }
  //Kontrollerar e-post och visar felmeddelande vid fel
  if (bookingEmail.value.trim() === "") {
    const errorItem = document.createElement("li");
    errorItem.textContent = "Fyll i e-post!";
    errorList.appendChild(errorItem);
    isValid = false;
  } else if (
    !bookingEmail.value.includes("@") ||
    !bookingEmail.value.includes(".")
  ) {
    const errorItem = document.createElement("li");
    errorItem.textContent = "Ange korrekt e-postformat!";
    errorList.appendChild(errorItem);
    isValid = false;
  }
  //Kontroll av bokningsvilkorsrutan
  if (!bookingTerms.checked) {
    const errorItem = document.createElement("li");
    errorItem.textContent = "Du måste godkänna bokningsvilkor!";
    errorList.appendChild(errorItem);
    isValid = false;
  }
  //Visar fellistan om det finns fel
  if (isValid === false) {
    bookingForm.appendChild(errorList);
  }

  //Meddelande om allt fyllts i korrekt
  if (isValid) {
    const successMessage = document.createElement("p");
    successMessage.classList.add("booking-success");
    successMessage.textContent = "Tack! Formuläret är korrekt ifyllt!";
    bookingForm.appendChild(successMessage);
  }
});
//Visar bokningsvillkoren när man klickar på knappen
termsToggle.addEventListener("click", function () {
  if (getComputedStyle(bookingTermsText).display === "none") {
    bookingTermsText.style.display = "block";
  } else {
    bookingTermsText.style.display = "none";
  }
});
//Stänger bokningsvilkoren vid klick på knapp "stäng"
termsClose.addEventListener("click", function () {
  bookingTermsText.style.display = "none";
});
