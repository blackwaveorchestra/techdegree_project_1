/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

var quotes = [
  {
    quote: 'My alma mater was books, a good library. I could spend the rest of my life reading, just satisfying my curiosity.',
    source: 'Malcolm X.',
    citation: 'The Autobiography of Malcolm X.',
    year: 1964
  },
  {
    quote: 'There was so much to grok, so little to grok from.',
    source: 'Robert Heinlein.',
    citation: 'Stranger in a Strange Land.', 
    year: 1961
  },
  {
    quote: 'To give a person an opinion one must first judge well whether that person is of the disposition to recieve it or not.',
    source: 'Yamamoto Tsunetomo.', 
    citation: 'Hagakure: Book of the Samurai.'
  },
  {
    quote: 'I once thought I had mono for an entire year, it turned out I was just really bored.',
    source: 'Wayne Campbell', 
    citation: 'Waynes World',
    year: 1992
  },
  {
    quote: 'Works of art make rules; rules do not make works of art.',
    source: 'Claude Debussy.'
  }
];




/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  var randomNumber = Math.floor( Math.random() * quotes.length );
  return quotes[randomNumber];
}









/***
 * `printQuote` function
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
        document.getElementById('quote-box').innerHTML = HTML;
  } else {
    return pullQuote;
  }
}









  




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE OF CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);