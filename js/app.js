'use strict';

var correctAnswer = 0;
var userName = 'Nick';

function questionOne(){
    var userName = prompt('What is your name?')

    //console.log(userName);
    alert('Hi ' + userName + ', welcome! Here are a few questions to give you insight about my interests!')
}

function questionTwo(){
    var sports = prompt('Do I like sports?')

    //console.log(sports);
    if(sports.toLowerCase() === 'yes' || sports.toLowerCase() === 'y' ){
        alert('You got it! I love sports, especailly from LA!');
        correctAnswer++;
    } else if(sports.toLowerCase() === 'no'|| sports.toLowerCase() === 'n'){
        alert('Nice try, but I am sure you will get the next one!')
    } else {
        alert('please answer yes or no');
    }
}

function questionThree(){
    var junkFood = prompt('Do I like junk food?')

    //console.log(junkFood);
    if(junkFood.toLowerCase() === 'yes' || junkFood.toLowerCase() === 'y' ){
        alert('I love junk food especially Ice Cream!');
        correctAnswer++;
    } else if(junkFood.toLowerCase() === 'no' || junkFood.toLowerCase() === 'n'){
        alert('Who doesnt like junk food!?')
    } else {
        alert('please answer yes or no')
    }
}

function questionFour(){
    var movies = prompt('Do I like watching movies?')

    //console.log(movies);
    if(movies.toLowerCase() === 'yes' || movies.toLowerCase() === 'y'){
        alert('I love movies!');
        correctAnswer++;
    } else if(movies.toLowerCase() === 'no' || movies.toLowerCase() === 'n'){
        alert('Nice try, I am sure you will get the next one.')
    } else {
        alert('please answer yes or no')
    }
}

function questionFive(){
    var boats = prompt('Do I like boats?')
    
    //console.log(boats);
    if(boats.toLowerCase() === 'yes' || boats.toLowerCase() === 'y'){
        alert('Boats are a ton of fun - especially to cruise around in the summer and fish from!');
        correctAnswer++;
    } else if(boats.toLowerCase() === 'no' || boats.toLowerCase() === 'n'){
        alert('you got it wrong :( try again')
    } else {
        alert('please answer yes or no')
    }
}

function questionSix(){
    var candles = prompt('Do I like candles?')

    //console.log(candles);
    if(candles.toLowerCase() === 'yes' || candles.toLowerCase() === 'y'){
        alert('Who doesnt love the smell of a good candle!?');
        correctAnswer++;
    } else if(candles.toLowerCase() === 'no' || candles.toLowerCase() === 'n'){
        alert('Maybe next time you will guess right!')
    } else {
        alert('please answer yes or no');
    }
}

function questionSeven(){
    var favNumber = parseInt(prompt('Can you guess my favorite number out of 10?'));
    //console.log(favNumber);
    for(var i=0;i<3;i++){
        if(isNaN (favNumber)){
            alert('That is not a valid entry');
            favNumber = parseInt(prompt('Pick another number between 1-10'));
        }else{
            if(favNumber === '8'){
                alert('You got it! Watching Kobe in his 8 jersey was my favorite thing growing up!');
                i = 3
                correctAnswer++;
            } else if(favNumber < '8'){
                alert('Try guessing higher!');
                favNumber = parseInt(prompt('Pick another number between 1-10'));
            } else if(favNumber > '8'){
                alert('Try guessing lower!');
                favNumber = parseInt(prompt('Pick another number between 1-10'));
            } else{
                alert('Sorry try again');
                favNumber = parseInt(prompt('Pick another number between 1-10'));
            }
            if(i == 2 && favNumber === '8'){
                alert('You got it! Watching Kobe in his 8 jersey was my favorite thing growing up!');
            } else if (i == 2 && favNumber !== 8){
                alert('Sorry, you ran out of guesses! It was 8 :(')
            }
        }
    } 
}

function questionEight(){
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
            correctAnswer++;
            i=6;
        } else if(guessTeam !== favSports && i != 6){
            var guessTeam = prompt('You guessed wrong, try again!').toLowerCase();
        } else if (i=6){
            prompt('Sorry, you ran out of guesses! My favorite teams are the seahawks, lakers, bears, rams, supersonics, and dodgers!');
        }
    }
}

function farewell(){
alert(userName + ' thanks for playing! You got ' + correctAnswer + ' out of 7 questons right! Hope you enjoy getting to know more about me!')
}


questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
questionSix();
questionSeven();
questionEight();
farewell();
