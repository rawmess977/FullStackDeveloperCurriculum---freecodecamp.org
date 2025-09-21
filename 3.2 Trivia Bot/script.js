// Build a JavaScript Trivia Bot

// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

//     You should log "Hello! I'm your coding fun fact guide!" to the console as a greeting message to the user.
//     You should create three variables: botName, botLocation, and favoriteLanguage, that store the bot's name, where it's from, and its favorite coding language, respectively.
//     You should log "My name is (botName) and I live on (botLocation)." to the console.
//     You should log "My favorite programming language is (favoriteLanguage)." to the console.
//     You should use let to create a codingFact variable and assign it a string that is a fun fact about your bot's favorite coding language and include the use of the favoriteLanguage variable.
//     You should log the codingFact to the console.
//     You should reassign the codingFact variable to a new fact about the bot's favorite language using the favoriteLanguage variable again.
//     You should log the codingFact to the console again.
//     You should reassign the codingFact variable again to another new fact about the bot's favorite language using the favoriteLanguage variable.
//     You should log the codingFact to the console a third time.
//     You should log "It was fun sharing these facts with you. Goodbye! - (botName) from (botLocation)." to the console as a farewell statement from the bot

console.log("Hello! I'm your coding fun fact guide!");
let botName = "WallE";
let botLocation = "Mars";
let favoriteLanguage = "Rust";

let botIntro = "My name is " + botName + " and I live on " + botLocation + ".";
console.log(botIntro);

let favorite = "My favorite programming language is " + favoriteLanguage + ".";
console.log(favorite);

let codingFact = "I hate rain - " + favoriteLanguage + ".";
console.log(codingFact);

codingFact = "Eat Code Sleep Repeat" + favoriteLanguage;
console.log(codingFact);
codingFact = "Please use DRY - " + favoriteLanguage + ".";
console.log(codingFact);
let fareWell =
  "It was fun sharing these facts with you. Goodbye! - " +
  botName +
  " from " +
  botLocation +
  ".";
console.log(fareWell);

let adjective;
let noun;
let verb;
let place;
let adjective2;
let noun2;

adjective = "curious";
noun = "cat";
verb = "chased";
place = "library";
adjective2 = "dusty";
noun2 = "milk";

let firstStory;

firstStory =
  "Once upon a time, there was a " +
  adjective +
  noun +
  " who loved to eat + " +
  noun2 +
  ". The" +
  noun +
  "lived in a" +
  "library " +
  " and had " +
  adjective2 +
  "nostrils that blew fire when it was " +
  verb +
  ".";
console.log("First story : ", firstStory);
