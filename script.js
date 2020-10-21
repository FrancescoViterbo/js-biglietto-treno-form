/* Selettori */

var name = document.getElementById("name").value;
var kilo = document.getElementById("km").value;
var age = document.getElementById("age").value;
const generaBtn = document.getElementById("genera");
const annullaBtn = document.getElementById("annulla");
const ticketSection = document.getElementById("ticket");

/* Assegno al click sul bottone genera la funzione relativa */
generaBtn.addEventListener("click", generaBiglietto);

/* Creo elementi e li appendo nella seconda section */
function generaBiglietto(event){
    event.preventDefault();

    console.log(name);
    console.log(kilo);
    console.log(age);

}