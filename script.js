/* 
    *  QuotesChanger
    *  Responsible for cycling through an array of quotes
    *  (animations done in CSS)
*/


    // Get the quotes data json file
    fetch('quotes.json')
    .then(
        // check http status codes for errors
        function(response) {
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
            response.status);
            return;
        }
        
        // Take the response text, parse it as json, send to function handling it
        response.json().then(function(data) {
            console.log(data);
            initiateQuoteChanger(data);
        });
        }
    )
    .catch(function(err) {
        console.error('Fetch Error', err);
    });

    // Variable to hold the quotes
    let quotesList = [];

    // Counter for keeping track of which quote to show
    let currentQuote = null;

    // The HTML DOM element that has to show the quote
    const quotesElement = document.querySelector("#quote");
    const quotesAuthorElement = document.querySelector("#quoteAuthor");



    // Initiate function that sets up the quotes changer
    function initiateQuoteChanger(data) {
        quotesList = data.quotes;
        console.log("List of quotes:", quotesList);
        console.log("number of quotes:", quotesList.length);


        // show first quote
        currentQuote = 0; // set the currentQuote
        // update the DOM
        quotesElement.textContent = quotesList[currentQuote].quote;
        quotesAuthorElement.textContent = quotesList[currentQuote].author;

        // setup timer
        window.setInterval(nextQuote, 3500);
    }


    // This function changes the show quote to the next quote and is called from the setInterval timer
    function nextQuote() {
        console.log("next quote", currentQuote);
        
        // increment the counter
        currentQuote = currentQuote + 1;
        
        // check if it at the last one and has to start over
        if(currentQuote === quotesList.length) {
            currentQuote = 0;
        }

        // show the quote
        quotesElement.textContent = quotesList[currentQuote].quote;
        quotesAuthorElement.textContent = quotesList[currentQuote].author;

    }