//VALIDERING AV BOKNINGSFORMULÄR

//Hämtar bokningsformulär
const bookingForm=document.querySelector(".booking");
//hämtar namnfält
const bookingName=document.querySelector("#name");
//hämtar nummerfält
const bookingNumber=document.querySelector("#number");
//hämtar e-postfält
const bookingEmail=document.querySelector("#mail");
//hämtar godkännande av vilkor
const bookingTerms=document.querySelector("#terms");

//Kontroll av form. när man klickar boka
bookingForm.addEventListener("submit", function (event){
    event.preventDefault();
    //Rensar fel när de korrigeras så det inte skapas flera listor
    const oldErrorList =bookingForm.querySelector(".booking-errors");
    if (oldErrorList){
        oldErrorList.remove();
    }

    //Skapar en lista för felmeddelande
    const errorList = document.createElement("ul");
    errorList.classList.add("booking-errors");
    
    //förutsätt att formuläret är korrekt
    let isValid=true;

    //Kontrollerar att namn fyllts i väljer felmeddelande som visas
    if(bookingName.value.trim()===""){
        const errorItem = document.createElement("li");
        errorItem.textContent = "Fyll i namn!";
        errorList.appendChild(errorItem);
        isValid=false;
    }
    //Kontrollerar att telefonnummer angetts och visar felmeddelande
    if(bookingNumber.value.trim()===""){
        const errorItem = document.createElement("li");
        errorItem.textContent = "Fyll i telefonnummer!";
        errorList.appendChild(errorItem);
        isValid=false;
    }
    //Kontrollerar e-post och visar felmeddelande vid fel
    if(bookingEmail.value.trim()===""){
        const errorItem = document.createElement("li");
        errorItem.textContent = "Fyll i e-post!";
        errorList.appendChild(errorItem);
        isValid=false;
    }
    else if(!bookingEmail.value.includes("@")|| !bookingEmail.value.includes(".")){
        const errorItem = document.createElement("li");
        errorItem.textContent = "Ange korrekt e-postformat!";
        errorList.appendChild(errorItem);
        isValid=false;
    }
//Visar fellistan om det finns fel
if (isValid === false) {
    bookingForm.appendChild(errorList);
}
});