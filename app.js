'use strict';



var names = prompt('Hello! please enter your name.');
alert(' Welcome to my page ' + names + '! Lets play a game, There are 7 question about me. lets see how many you can get correct. GOOD LUCK ');
var score = 0;
var live = prompt('Do I live in seattle? Yes or No').toUpperCase();
if (live === 'YES' || live === 'Y') {
  alert('Correct!');
  score += 1;
} else if (live === 'NO' || live === 'N') {
  alert('Sorry you got it wrong!');
} else {
  alert('Wrong Input!');
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
