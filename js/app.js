'use strict';

var correctAnswer = 0;
var userName = 'Nick';

var userName = prompt('What is your name?')
console.log(userName);
alert('Hi ' + userName + ', welcome! Here are a few questions to give you insight about my interests!')

var sports = prompt('Do I like sports?')
console.log(sports);

if(sports.toLowerCase() === 'yes'){
    alert('You got it! I love sports, especailly from LA!');
} else if(sports.toLowerCase() === 'no'){
    alert('Nice try, but I am sure you will get the next one!')
} else {
    alert('please answer yes or no');
}

var junkfood = prompt('Do I like junkfood?')
console.log(junkfood);

if(junkfood.toLowerCase() === 'yes'){
    alert('I love junkfood especially Ice Cream!');
} else if(junkfood.toLowerCase() === 'no'){
    alert('Who doesnt like junkfood!?')
} else {
    alert('please answer yes or no')
}

var movies = prompt('Do I like watching movies?')
console.log(movies);

if(movies.toLowerCase() === 'yes'){
    alert('I love movies!');
} else if(movies.toLowerCase() === 'no'){
    alert('Nice try, I am sure you will get the next one.')
} else {
    alert('please answer yes or no')
}

var boats = prompt('Do I like boats?')
console.log(boats);

if(boats.toLowerCase() === 'yes'){
    alert('Boats are a ton of fun - especially to cruise around in the summer and fish from!');
} else if(boats.toLowerCase() === 'no'){
    alert('you got it wrong :( try again')
} else {
    alert('please answer yes or no')
}

var candles = prompt('Do I like candles?')
console.log(candles);

if(candles.toLowerCase() === 'yes'){
    alert('Who doesnt love the smell of a good candle!?');
} else if(candles.toLowerCase() === 'no'){
    alert('Maybe next time you will guess right!')
} else {
    alert('please answer yes or no');
}

var favNumber = prompt('Can you guess my favorite number out of 10?')
console.log(favNumber);
for(var i=0;i<3;i++){
    if(favNumber === '8'){
        alert('You got it! Watching Kobe in his 8 jersey was my favorite thing growing up!');
    } else if(favNumber < '8'){
        alert('Try guessing higher!');
        favNumber = prompt('Pick another number bewteen 1-10');
    } else if(favNumber > '8'){
        alert('Try guessing lower!');
        favNumber = prompt('Pick another number bewteen 1-10');
    } else{
        alert('Sorry try again');
        favNumber = prompt('Pick another number bewteen 1-10');
    }
    if(i == 2 && favNumber === '8'){
        alert('You got it! Watching Kobe in his 8 jersey was my favorite thing growing up!');
    } else if (i == 2 && favNumber !== 8){
        alert('Sorry, you ran out of guesses! It was 8 :(')
    }
} 

var favSports = ['seahawks', 'lakers', 'bears', 'rams', 'supersonics', 'dodgers'];
// console.log(favSports;
var guessTeam = prompt('What are some of my favorite sports teams!?').toLowerCase();
for(var i=0;i<6;i++){
    for(var n=0;n<favSports.length; n++){
        if(guessTeam == favSports[n]){
            alert('You got one! That is one of my favorite sports teams!');
            guessTeam = false
            i=6;
        }
    } if(guessTeam == false){
        correctAnswer++
        i=6;
    } else if(guessTeam !== favSports && i != 6){
        var guessTeam = prompt('You guessed wrong, try again!').toLowerCase();
    } else if (i=6){
        prompt('Sorry, you ran out of guesses! My favorite teams are the seahawks, lakers, bears, rams, supersonics, and dodgers!');
    }
}

alert(userName + 'you crushed my guessing game! You got ' + correctAnswer + 'out of 7 questons right! Hope you enjoy getting to know more about me!')