/* 
 *  QuotesChanger
 *  Responsible for cycling through an array of quotes
 *  (animations done in CSS)
 *  Kilde: Eksempel, Jarne Beutnagel
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
        error()
    });
// some text runs if something goes wrong and you cant receive response from the server
function error() {
    quote.textContent = 'The page faild to load the reviews, please check your internet connection '
}


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
    window.setInterval(nextQuote, 4500);
}

// This function changes the show quote to the next quote and is called from the setInterval timer
function nextQuote() {
    console.log("next quote", currentQuote);

    // increment the counter
    currentQuote = currentQuote + 1;

    // check if it at the last one and has to start over
    if (currentQuote === quotesList.length) {
        currentQuote = 0;
    }

    // show the quote
    quotesElement.textContent = quotesList[currentQuote].quote;
    quotesAuthorElement.textContent = quotesList[currentQuote].author;

}




// event listeners for offers headings and book button animation
let images = document.querySelectorAll('.offers')
let offersHeadings = document.querySelectorAll('.offersHeadings')
let bookButtons = document.querySelectorAll('.bookButton')


images.forEach(function(image) {
    // when hovering on offer image element
    image.addEventListener("mouseover", function(event) {
        offersHeadings.forEach(function(offersHeading) {
            offersHeading.classList.add("offersHeadingsUp")
            offersHeading.classList.remove("offersHeadingsDown")
        })
        bookButtons.forEach(function(bookButton) {
            bookButton.classList.add("bookFadeIn")
            bookButton.classList.remove("bookFadeOut")
            bookButton.classList.remove("noBook")
        })
    });

    // when moving the mouse pointer out the offer image element
    image.addEventListener("mouseout", function(event) {
        offersHeadings.forEach(function(offersHeading) {
            offersHeading.classList.add("offersHeadingsDown")
            offersHeading.classList.remove("offersHeadingsUp")
        })
        bookButtons.forEach(function(bookButton) {
            bookButton.classList.add("bookFadeOut")
            bookButton.classList.remove("bookFadeIn")
        })
    })
})


// fade in animation on honest fares sections
//inspired from https://www.youtube.com/watch?v=huVJW23JHKQ
const inFade = document.querySelectorAll('.fadeIn')
const leftFade = document.querySelectorAll('.fadeInLeft')

const appearOptions = {
    threshold: 0
}
const scrollAppear = new IntersectionObserver

//when it enters the intersection observer it adds the classlist appear 
    (function(entries, scrollAppear) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return
        } else {
            entry.target.classList.add('appear')
            scrollAppear.unobserve(entry.target)
        }
    })

}, appearOptions)

//adds the way thet should appear 
inFade.forEach(fade => {
    scrollAppear.observe(fade)
})

leftFade.forEach(slider => {
    scrollAppear.observe(slider)
})