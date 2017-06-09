
'use strict';

var score = 0;
var names = prompt('Hello! please enter your name.');
alert(' Welcome to my page ' + names + '! Lets play a game, There are 7 question about me. lets see how many you can get correct. GOOD LUCK ');
var questions = ['Do I live in Seattle? Yes or No.', 'Is my favorite color Gold? Yes or No', 'Can I sing? Yes or No', 'Do I dislike pizza? Yes or No', 'Do I like to dance? Yes or No.', 'I am thinking of a random number between 1 & 6?.'];
var answers = [['YES', 'Y'], ['YES', 'Y'], ['NO', 'N'], ['YES', 'Y'], ['YES', 'Y']];


function questions1to5 (questionNumber) {
  var answer = prompt(questions[questionNumber]).toUpperCase();
  if (answer === answers[questionNumber][0] || answer === answers[questionNumber][1]) {
    alert('Correct!');
    score++;
  } else {
    alert('Sorry you got it wrong!');
  }
};


function question6 () {
  var counter = 0;
  var topNumber = Math.floor(Math.random() * 6) + 1;
  console.log(topNumber);
  while (counter < 4) {
    var number = parseInt(prompt('I am thinking of a random number between 1 & 6?.'));
    if (topNumber === number) {
      alert('Good Job!');
      score++;
      break;
    } else if (number < topNumber) {
      alert('Too low. Try again.');
    } else {
      alert('Too high. Try again.');
    }
    counter += 1;
  }
};

function question7() {
  var counter1 = 0;
  var places = ['TEXAS', 'PENNSYLVANIA', 'MARYLAND'];
  var answerwasfound = false;
  while (counter1 < 6) {
    var state = prompt('Can you guess a state that I have lived in besides Washington?').toUpperCase();
    for (var j = 0; j < places.length; j++) {
      console.log(places.length);
      if (state === places[j]) {
        answerwasfound = true;
        score++;
        break;
      }
    }
