
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
console.log('the user \'s answer is ' + live + ' , ' + score);

var gold = prompt('Is my favorite color Gold? Yes or No').toUpperCase();
if (gold === 'YES' || gold === 'Y') {
  alert('Correct!');
  score += 1;

} else if (gold === 'NO' || gold === 'N') {
  alert('Sorry you got it wrong!');

} else {
  alert('Wrong Input!');
}


console.log('the user \'s answer is ' + gold + ',' + score);

var sing = prompt('Can I sing? Yes or No').toUpperCase();
if (sing === 'NO' || sing === 'N') {
  alert('Correct!');
  score += 1;
} else if (sing === 'Yes' || sing === 'Y') {
  alert('Sorry you got it wrong!');
} else {
  alert('Wrong Input!');
};
console.log('the user \'s answer is ' + sing);

var pizza = prompt('Do I dislike pizza? Yes or No').toUpperCase();
if (pizza === 'YES' || pizza === 'Y') {
  alert('Correct!');
  score += 1;
} else if (pizza === 'NO' || pizza === 'N') {
  alert('Sorry you got it wrong!');
} else {
  alert('Wrong Input!');
};
console.log('the user \'s answer is ' + pizza);

var dancing = prompt('Do I like  to dance? Yes or No').toUpperCase();
if (dancing === 'YES' || dancing === 'Y') {
  alert('Correct!');
  score += 1;
} else if (dancing === 'NO' || dancing === 'N') {
  alert('Sorry you got it wrong!');
} else {
  alert('Wrong Input!');
};

console.log('the user \'s answer is ' + dancing);

var counter = 0;
while (counter < 4) {
  var number = parseInt(prompt('I am thinking of a random number between 1 & 6?.'));
  var topnumber = Math.floor(Math.random() * 6) + 1;
  if (topnumber == number) {
    alert('Good Job!');
    score += 1;
    break;
  } else {
    alert(' try again the number was ' + topnumber);
    counter += 1;
  };
}


console.log('the user \'s answer is ' + number);

var counter1 = 0;
while (counter1 < 6) {
  var places = ['TEXAS', 'PENNSYLVANIA', 'MARYLAND'];
  var state = prompt('Can you guess a state that I have lived in besides Washington?').toUpperCase();
  var answerwasfound = false;
  for (var i = 0; i < places.length; i++) {
    console.log(places.length);
    places[i];
    if (state === places[i]) {
      answerwasfound = true;
      score += 1;
      break;
    }
  }

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
