/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/




/*** 
 * `quotes` array, containing 10 quotes that I chose for this project.  
***/

var quotes = [
  {
    quote: 'My alma mater was books, a good library. I could spend the rest of my life reading, just satisfying my curiosity.',
    source: 'Malcolm X',
    citation: 'The Autobiography of Malcolm X',
    year: 1964
  },
  {
    quote: 'Wisdom cannot be imparted. Wisdom that a wise man attempts to impart always sounds like foolishness to someone else ... Knowledge can be communicated, but not wisdom.',
    source: 'Hermann Hesse',
    citation: 'Siddhartha',
    year: 1951
  },
  {
    quote: 'The Nephilim were on the earth in those days—and also afterward—when the sons of God went in to the daughters of humans, who bore children to them. These were the heroes that were of old, warriors of renown.',
    source: 'The Old Testament',
    citation: 'Genesis chapter 6, verses 1 through 4'
  },
  {
    quote: 'Sergeant Butterman, the little hand says it\'s time to rock n roll.',
    source: 'Nicholas Angel',
    citation: 'Hot Fuzz',
    year: 2007
  },
  {
    quote: 'I cannot sleep unless I am surrounded by books.',
    source: 'Jorge Luis Borges'
  },
  {
    quote: 'Per aspera, ad astra.',
    source: 'Popular Latin Phrase'
  },
  {
    quote: 'There was so much to grok, so little to grok from.',
    source: 'Robert Heinlein',
    citation: 'Stranger in a Strange Land', 
    year: 1961
  },
  {
    quote: 'To give a person an opinion one must first judge well whether that person is of the disposition to recieve it or not.',
    source: 'Yamamoto Tsunetomo', 
    citation: 'Hagakure: Book of the Samurai'
  },
  {
    quote: 'I once thought I had mono for an entire year, it turned out I was just really bored.',
    source: 'Wayne Campbell', 
    citation: 'Waynes World',
    year: 1992
  },
  {
    quote: 'Works of art make rules; rules do not make works of art.',
    source: 'Claude Debussy'
  }
];




/***
 * `getRandomQuote` function: generates quote at random from the array above.
***/

function getRandomQuote() {
  var randomNumber = Math.floor( Math.random() * quotes.length );
  return quotes[randomNumber];
}


/***
 * `printQuote` function pushes this quote to the web browser.  Uses the random number to pull a quote. 
 * clearInterval function should STOP/RESET the automatic timer.
 * calling randomRGB function within printQuote-function (background color effect)
 * attaching the getElementID for HTML within this function, as well as setting the timer within the function.
***/

function printQuote() {
  var pullQuote = getRandomQuote();
  var HTML = '';
  HTML += '<p class="quote">' + [pullQuote.quote] + '</p>';
  HTML += '<p class="source">'  + [pullQuote.source];
  if (pullQuote.citation) {
        HTML +=  '<span class="citation">' + [pullQuote.citation] + '</span>';
  } if (pullQuote.year) {
        HTML += '<span class="year">' + [pullQuote.year] + '</span>' 
        '</p>';
  } 
  document.getElementById('quote-box').innerHTML = HTML;
  randomRGB();
  myStopFunction();
  timer = window.setInterval(printQuote, 5000);
}

/***
 * calling the printQuote function. 
 * created variable for timer, global scope (another timer is written within printQuote function).
 */

var timer = window.setInterval (printQuote, 5000);

printQuote();

/***
 * created function to clear the interval of the timer.  will CALL function inside of 'printQuote function (ABOVE, starting around
 * line 100)'.
 */

function myStopFunction(){
  clearInterval (timer);
}







/***
 * Trying to create a way for the browser to change background colors with each 'printQuote' refresh.
 * as of (project turn-in-time), this function seems to be working on multiple browsers.  function is CALLED inside of the printQuote funtion.
 */

function randomRGB() {
  var red = Math.floor(Math.random() * 256 );
  var green = Math.floor(Math.random() * 256 );
  var blue = Math.floor(Math.random() * 256 );
  var backgroundColors = 'rgb(' + red + ',' + green + ',' + blue + ')';

  document.body.style.background = backgroundColors;
}




  




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE OF CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);