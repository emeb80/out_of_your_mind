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
//hämtar plats för felmeddelandelista
const bookingErrors=document.querySelector("#booking-errors");

//Kontroll av form. när man klickar boka
bookingForm.addEventListener("submit", function (event){
    event.preventDefault();
    //förutsätt att formuläret är korrekt
    let isValid=true;
    //töm listan innan ny kontroll
    bookingErrors.textContent ="";

    //Kontrollerar att namn fyllts i och visar felmeddelande
    if(bookingName.value.trim()===""){
        bookingErrors.textContent = "Du måste fylla i namn!"
        isValid=false;
    }
});