/* Selettori */
const generaBtn = document.getElementById('genera');
const annullaBtn = document.getElementById("annulla");
const errorSection = document.getElementById('error-msg');
const ticketSection = document.getElementById("ticket");
const ticketTitle = document.getElementById("ticket-title");
const ticketContent = document.getElementById("ticket-content");
const ilTuo = document.getElementById('il-tuo');

/* Setta 'ilTuo' come invisibile */
ilTuo.style.display = "none";

/* Creo una variabile per controllare se il biglietto è già generato */
var bigliettoGenerato = false;

/* Creo una variabile per controllare se ci sono già messaggi di errore */
var errorMsg = false;


/* Assegno al click sul bottone la funzione relativa */
generaBtn.addEventListener("click", generaBiglietto);
annullaBtn.addEventListener("click", reset);

/* Reset dei campi */
function reset(){
    
}

/* Creo elementi e li appendo nella seconda section */
function generaBiglietto(event){
    event.preventDefault();

    /* Selettori */
    var name = document.getElementById('name').value;
    var kilo = document.getElementById('km').value;
    var age = document.getElementById('age').value;
    var prezzo = kilo * 0.21;
    var offer = "Nessuno Sconto";
    
    if (kilo === "" || name === ""){
        if (errorMsg !== true){
            var errore = document.createElement('h1');
            errore.innerHTML = 'Per favore, riempi tutti i campi prima di cliccare sul tasto "Genera"';
            errore.style.color = "red";
            errorSection.appendChild(errore);
            errorMsg = true;
        } else {
            return;
        }
    } else {
        if(bigliettoGenerato === false){
            
            ilTuo.style.display = "";

        
            if (age === "minorenne"){
                prezzo = prezzo * 0.80;
                offer = "Sconto Minorenne";
            } else if (age === "anziano"){
                prezzo = prezzo * 0.60;
                offer = "Sconto Anziano";
            }
        
            prezzo = prezzo.toFixed(2);
        
            bigliettoGenerato = true;
        
            /* Creo il titolo del biglietto */
            var title = document.createElement('h1');
            title.innerHTML = "DETTAGLIO PASSEGGERI";
            ticketTitle.appendChild(title);
        
            /* Creo div contenente il nome dell'intestatario del biglietto */
            var titolo = "NOME<br> PASSEGGERO:";
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
            var dati = 1 + Math.floor(Math.random() * 13);
            classe = "";
            creaDettagliBiglietto(titolo, dati, classe);
        
            /* Creo div contenente il nome dell'intestatario del biglietto */
            var titolo = "Codice<br> CP:";
            var dati = 90000 + (Math.floor(Math.random() * 10000));
            classe = "";
            creaDettagliBiglietto(titolo, dati, classe);
        
            /* Creo div contenente il nome dell'intestatario del biglietto */
            var titolo = "Costo<br> Biglietto:";
            var dati = prezzo + "€";
            classe = "";
            creaDettagliBiglietto(titolo, dati, classe);

            ticketContent.className = "gray-boder";
            ticket.style.paddingBottom = "1rem";
        
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
                ticketContent.appendChild(div);
            }
            if (errorMsg === true){
                errorSection.childNodes[0].remove();
                errorMsg = false;
            }
        } else {
            if (errorMsg !== true){
                var errore = document.createElement('h1');
                errore.innerHTML = 'Non puoi generare altri biglietti senza resettare il form, per favore premi il tasto "Annulla"';
                errore.style.color = "red";
                errorSection.appendChild(errore);
                errorMsg = true;
            }
        }
    }
}