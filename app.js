
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

  if (answerwasfound === true) {
    alert('You are correct, I have lived in Texas, Pennsylvania , Maryland');
    break;
  } else {
    alert('You are wrong');
    counter1++;
  }
}
if (counter1 === 6) {
  alert('Sorry! you are out of guesses for this question. The other states I have lived in are Texas, Pennsylvania , Maryland');
};
if (score === 7) {
  alert('Congratulations!' + names + ' you got' + score + '/ 7 questions correct');

} else {
  alert('Sorry ' + names + ' you got ' + score + '/7 questions correct');

}



console.log('the user \'s answer is ' + state);
