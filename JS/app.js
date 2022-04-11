//Create your "pieces" in the game as variables
//Because you defined them in the html you can access them
//with document.querySelector or All if there are multiple
const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
//Initialize the result at 0
let result = 0
/*
--We want the square to move around so we create a function--
--function --> randomSquare() {
--First we grab the square, and "for each" square we-- 
    squares.forEach(square => {
--want to remove the mole every time it goes onto a square
--use "classList" to access the class of mole
        square.classList.remove('mole')
    })
--inside the same function we want the mole to move to
--a random square, so we need to create that
        --use Math.random on the "squares" const and use Math.floor
    --on that "Math.random" in order to round it down (to the floor XD)
        let randomPosition = squares[(Math.floor(Math.random() * 9))];
        console.log(randomPosition);
}
*/

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole');
    })
    let randomPosition = squares[(Math.floor(Math.random() * 9))];
    console.log(randomPosition);
}

randomSquare();