//Create your "pieces" in the game as global variables
//Because you defined them in the html you can access them
//with document.querySelector or All if there are multiple
const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
const startButton = document.querySelector('#start-button')
//Initialize the result at 0
let result = 0
let hitPosition
let currentTime = 10
let timerId = null

/*
--We want the square to move around so we create a function--
--function --> randomSquare() {
--First we grab the square, and "for each" square we-- 
    squares.forEach(square => {
--want to remove the mole every time it goes onto a square
use "classList" to access the class of mole--
        square.classList.remove('mole')
    })
--inside the same function we want the mole to move to
a random square, so we need to create that--
        --use Math.random on the "squares" const and use Math.floor
on that "Math.random" in order to round it down (to the floor XD)--
        let randomSquare = squares[(Math.floor(Math.random() * 9))];
    --now that we've made the square move and also removed the 'mole'
from that square, now we want to add the 'mole' to a different square--
        randomSquare.classList.add('mole');
-- Tell the game where the last mole was hit by assigning it an id
        hitPosition = randomSquare.id
}

--Add an eventListener to tell the game what to do when the mole is "hit" (clicked)
    squares.forEach(square => {
        square.addEventListener('mousedown', () => {
            if (square.id == hitPosition) {
                result++;
                score.textContent = result;
                hitPosition = null;
            }
        })
    })

--We want to get the mole to move on its own, so we'll create a function for that --
--define a timer Id (initialize it with null) and then use the 
"setInterval" method to make the randomSquare move every 500ms(default is ms)--
function moveMole() {
    let timerId = null;
    timerId = setInterval(randomSquare, 500)
}

--The flow of the function is: Remove the mole. Pick a random Square. Add the Mole to
that random square. Repeat.  If the mole was clicked we want to add to the score until
the timer counts down to 0.
--this is calling the function to show on the browser--
randomSquare()
*/



    
function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole');
    })
    let randomSquare = squares[(Math.floor(Math.random() * 9))];
    randomSquare.classList.add('mole');
    hitPosition = randomSquare.id 
}
squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    })
})
function moveMole() {
    let timerId = null;
    timerId = setInterval(randomSquare, 1000);
}

moveMole();

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if (currentTime == 0) {
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert('GAME OVER! Your score is ' + result);
    }
}

let countDownTimerId = setInterval(countDown, 1000)
