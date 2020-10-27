'use strict';

var userName = prompt('What is your name?')
console.log(userName);
alert('Hi ' + userName + ', welcome!')

var sports = prompt('Do you like sports?')
console.log(sports);

if(sports.toLowerCase() === 'yes'){
    alert('I love sports too!');
} else if(sports.toLowerCase() === 'no'){
    alert('I agree, sports are boring!')
} else {
    alert('please answer yes or no')
}

var junkfood = prompt('Do you like junkfood?')
console.log(junkfood);

if(junkfood.toLowerCase() === 'yes'){
    alert('I love junkfood too!');
} else if(junkfood.toLowerCase() === 'no'){
    alert('I agree, junkfood is gross!')
} else {
    alert('please answer yes or no')
}

var movies = prompt('Do you like watching movies?')
console.log(movies);

if(movies.toLowerCase() === 'yes'){
    alert('I love movies too!');
} else if(movies.toLowerCase() === 'no'){
    alert('I agree, movies are not cool!')
} else {
    alert('please answer yes or no')
}

var boats = prompt('Do you like boats?')
console.log(boats);

if(boats.toLowerCase() === 'yes'){
    alert('I love boats too!');
} else if(boats.toLowerCase() === 'no'){
    alert('I agree, boats are not fun!')
} else {
    alert('please answer yes or no')
}

var candles = prompt('Do you like candles?')
console.log(candles);

if(candles.toLowerCase() === 'yes'){
    alert('I love candles too!');
} else if(candles.toLowerCase() === 'no'){
    alert('I agree, candles are lame!')
} else {
    alert('please answer yes or no')
}



