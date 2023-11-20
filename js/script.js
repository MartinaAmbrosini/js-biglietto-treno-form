// Descrizione:**
// Scrivere un programma che chieda all’utente:
// Il numero di chilometri da percorrere
// Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// MILESTONE 1: Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
// La risposta finale (o output) sarà anch’essa da scrivere in console.
// MILESTONE 2: Solo una volta che il milestone 1 sarà completo e funzionante allora finalizzeremo il layout di pagina, in cui l’utente vedrà il form stilizzato e tutto l’output stampato in pagina (il prezzo dovrà sempre essere formattato con massimo due decimali).

const generateTicketButton = document.getElementById("play-button");
const deleteTicketButton = document.getElementById("delete-button");
const display = document.getElementById("display");

//* al click del mouse
generateTicketButton.addEventListener("click", function () {
    const userName = document.getElementById("text-name");
    const userKm = parseFloat(document.getElementById("text-km").value);
    const userAge = parseInt(document.getElementById("text-age").value);
    const userNameEl = document.getElementById("username");
    const price = document.getElementById("price");

    display.classList.replace("d-none","d-block");

    const ticketfare = 0.21;
    let ticketPrice = userKm * ticketfare;
    //* se l'età dell'utente è meno di 18
    if (userAge < 18) {
      //* applichiamo uno sconto del 20%
      ticketPrice *= 0.8;
      //* altrimenti se l'età dell'utente è meno di 18
    } else if (userAge > 65) {
      //* applichiamo uno sconto del 40%
      ticketPrice *= 0.6;
    }

    //* infine stampiamo il biglietto
    userNameEl.innerHTML = userName.value;
    price.innerHTML = "€ " + ticketPrice.toFixed(2);
    
    console.log(ticketPrice.toFixed(2));
  });

  deleteTicketButton.addEventListener("click", function () {
    window.location.reload(true);
  });