// Create an array to store ticket data
let ticketArray = [];

function submitForm() {
    let film = document.getElementById("film").value;
    let antall = document.getElementById("antall").value;
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let telefon = document.getElementById("telefon").value;
    let epost = document.getElementById("epost").value;

    // Validates phone number using regex
    const telefonRegex = /^[0-9]{3} [0-9]{2} [0-9]{3}|[0-9]{8}$/;
    if (!telefonRegex.test(telefon)) {
        alert("Vennligst skriv et gyldig telefonnummer (8 siffer)");
        return;
    }

    // Validates email using regex
    const epostRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!epostRegex.test(epost)) {
        alert("Vennligst skriv en gyldig epostadresse");
        return;
    }

    // Create an object to represent the ticket
    let ticket = {
        film: film,
        antall: antall,
        fornavn: fornavn,
        etternavn: etternavn,
        telefon: telefon,
        epost: epost
    };

    // Add the ticket object to the array
    ticketArray.push(ticket);

    // Display the array in a table underneath <h2>Alle Billetter</h2>
    displayTickets();

    // Reset input fields in form for next input
    document.getElementById("bestilling").reset();
}

// Prevent duplicate tables
function displayTickets() {
    const ticketsContainer = document.getElementById("ticketsContainer");
    ticketsContainer.innerHTML = "";

    // Create a table to display the tickets
    const ticketTable = document.createElement("table");

    // Add a class to the table for styling
    ticketTable.className = "ticket-table";

    // Create the table header
    const headerRow = ticketTable.insertRow(0);
    const headers = ["Film", "Antall", "Fornavn", "Etternavn", "Telefon", "Epost"];

    for (let i = 0; i < headers.length; i++) {
        let headerCell = headerRow.insertCell(i);
        headerCell.textContent = headers[i];
    }

    // Loop through the array and create rows for each ticket
    for (let i = 0; i < ticketArray.length; i++) {
        let ticket = ticketArray[i];
        let row = ticketTable.insertRow(i + 1);

        // Loop through ticket properties and create cells for each ticket
        for (let j = 0; j < headers.length; j++) {
            let cell = row.insertCell(j);
            cell.textContent = ticket[headers[j].toLowerCase()];
        }
    }

    ticketsContainer.appendChild(ticketTable);
}

function slettAlle() {
    // Clear the form inputs
    document.getElementById("film").value = "";
    document.getElementById("antall").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefon").value = "";
    document.getElementById("epost").value = "";

    // Reset the ticketArray
    ticketArray = [];

    // Clear the displayed tickets
    displayTickets();
}