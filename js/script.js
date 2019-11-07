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
    quote1: “My alma mater was books, a good library. I could spend the rest of
    my life reading, just satisfying my curiosity.",
    source1: "Malcolm X.",
    citation1: "The Autobiography of Malcolm X.",
    year1: 1964
  },
  {
    quote2: "There was so much to grok, so little to grok from.",
    source2: "Robert Heinlein.",
    citation3: "Stranger in a Strange Land.", 
    year2: 1961
  },
  {
    quote3: "To give a person an opinion one must first judge well whether that
    person is of the disposition to recieve it or not.",
    source3: "Yamamoto Tsunetomo.", 
    citation: "Hagakure: Book of the Samurai."
  },
  {
    quote4: "I once thought I had mono for an entire year, it turned out I was
    just really bored.",
    source4: "Wayne Campbell", 
    citation4: "Waynes World",
    year4: 1992
  },
  {
    quote5: "Works of art make rules; rules do not make works of art.",
    source5: "Claude Debussy."
  }
];




/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE OF CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);