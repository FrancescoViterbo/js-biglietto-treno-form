/* Selettori */
const generaBtn = document.getElementById('genera');
const annullaBtn = document.getElementById("annulla");
const ticketSection = document.getElementById("ticket");

/* Assegno al click sul bottone genera la funzione relativa */
generaBtn.addEventListener("click", generaBiglietto);

/* Creo elementi e li appendo nella seconda section */
function generaBiglietto(event){
    event.preventDefault();

    /* Selettori */
    var name = document.getElementById('name').value;
    var kilo = document.getElementById('km').value;
    var age = document.getElementById('age').value;
    var prezzo = kilo * 0.21;
    var offer = "Nessuno Sconto";

    if (age === "minorenne"){
        prezzo = prezzo * 0.80;
        offer = "Sconto Minorenne";
    } else if (age === "anziano"){
        prezzo = prezzo * 0.60;
        offer = "Sconto Anziano";
    }

    /* Creo il titolo del biglietto */
    var title = document.createElement('h1');
    title.innerHTML = "DETTAGLIO PASSEGGERI";
    ticketSection.appendChild(title);

    /* Creo div contenente il nome dell'intestatario del biglietto */
    var titolo = "NOME PASSEGGERO:";
    var dati = name;
    classe = "gray";
    creaDettagliBiglietto(titolo, dati, classe);

    /* Creo div contenente il nome dell'intestatario del biglietto */
    var titolo = "Offerta:";
    var dati = offer;
    classe = "";
    creaDettagliBiglietto(titolo, dati, classe);

    /* Creo div contenente il nome dell'intestatario del biglietto */
    var titolo = "Carrozza:";
    var dati = Math.floor(Math.random() * 13);
    classe = "";
    creaDettagliBiglietto(titolo, dati, classe);

    /* Creo div contenente il nome dell'intestatario del biglietto */
    var titolo = "Codice CP:";
    var dati = 90000 + (Math.floor(Math.random() * 10000));
    classe = "";
    creaDettagliBiglietto(titolo, dati, classe);

    /* Creo div contenente il nome dell'intestatario del biglietto */
    var titolo = "Costo Biglietto:";
    var dati = prezzo;
    classe = "";
    creaDettagliBiglietto(titolo, dati, classe);

    /* Funzione per creare i vari div del biglietto */
    function creaDettagliBiglietto(titolo, dati, classe){
        var div = document.createElement("div");
        div.className = classe;
        var h2 = document.createElement("h2");
        h2.innerHTML = titolo;
        var parag = document.createElement("p");
        parag.innerHTML = dati;
        div.appendChild(h2);
        div.appendChild(parag);
        ticketSection.appendChild(div);
    }
}