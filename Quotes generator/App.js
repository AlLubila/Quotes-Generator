/* URL variable */
const url = 'https://type.fit/api/quotes'

/* Getting HTLM elements */
const btnElement = document.querySelector('button')
const quotePlace = document.querySelector('.quotePlace')


/* Fetching quotes function */
async function fetchQuotes(url) {
    let response = await fetch(url)
    let data = await response.json()
    return data
}

/* Function to display quotes on screen */
async function displayQuote(){

    /* General style for quotes */
    quotePlace.style.color = "black"
    quotePlace.style.fontSize = "1.5em"

    /* Loading message */
    quotePlace.innerHTML = "Wait...";

    try {
        const data = await fetchQuotes(url);
        const No = Math.floor(Math.random() * data.length);
        quotePlace.innerHTML = data[No].text;
    } catch (error) {
        console.log('Error fetching quotes: ', error);
        const errMsg = "An error occurred, please click again";
        quotePlace.innerHTML = errMsg;
        quotePlace.style.color = "red";
    }

}

/* Event listener */
btnElement.addEventListener('click', displayQuote);
