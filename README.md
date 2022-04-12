# Make a Whack-a-mole game with JavaScript! #

I created this readme as a way for *me* to explain to *myself* the methodology in creating and using `Javascript` functions when creating apps. I am still new to this language and learn easier while *doing* instead of just **reading**.  I hope whoever reads this gains as much knowledge as I have from creating it.

 ----
 
 ### Lets jump right in.

*First assign your "pieces" in the game as global variables.*

Because you defined them in the html you can access the classes and Ids with **_document.querySelector_** or **_document.querySelectorAll_** if there are multiples of them.

ex:

```javascript
const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
const startButton = document.querySelector('#start-button')
```

**_Initialize the result_** at 0. *This is your initial score*:

`let result = 0` 

Define `hitPosition` as a global variable so you can call it later. This is to keep track of where the mole was "hit" (clicked):

`let hitPosition`

Define how much time you want to start the clock at. *This can be anything...* but keep it reasonable:

`let currentTime = 10`

Now all that's left is to initialize the timer Id:

`let timerId = null`

The code all put together will look like this.

```javascript
let result = 0
let hitPosition
let currentTime = 10
let timerId = null
```
----
### Now onto creating our functions. ###
----

We'll want the square that holds our *mole* to move around randomly right?</br>
So in order to do that we have to create a function for each process.</br>
</br>
First we'll start by creating a random square for our mole to move around on.</br>
</br>

```javascript
function randomSquare() {
	squares.forEach(square => {
		square.classList.remove('mole')
})
```
*I'll try and break it down a bit.*

This can be read in parts as: "Create the `function randomSquare()`. Then "grab" the `squares.` and
`.forEach()` *square*, grab a `(square` and tell it to `=>` grab **that** `square` and *access* the `.classList` to `.remove` the `('mole')`".

It obviously requires a little understand of *JavaScript syntax* but that's the gist of it.

----

Now that we've *removed* the mole we'll want to randomize the square before it can hop to a new one.</br>
</br>
Here we can use the Math.random method on the "squares" variable, and use Math.floor method
on **that** *Math.random* in order to round it down (to the floor 😆).</br>

Create a variable called *randomSquare* and assign it to squares with the Math methods attached:</br>
</br>
`let randomSquare = squares[(Math.floor(Math.random() * 9))];` </br>
</br>
We multiply by 9 because there are 9 squares, but in reality the Math is only counting up to 8... but I won't get into that right now.</br>
</br>
Now grab that *randomSquare* variable and access the classList to add the "mole" back onto it.</br>
</br>
`randomSquare.classList.add('mole');`</br>
</br>
We'll also assign the *hitPosition* to a *randomSquare.id* here as well.</br>
</br>
This part of the code fully put together looks like this:

```javascript
let randomSquare = squares[(Math.floor(Math.random() * 9))];
        randomSquare.classList.add('mole');
        hitPosition = randomSquare.id
}
```
----

So now that we've added the *hitPosition* we'll want to add an *eventListener* to tell the game what to do when the mole is actually *hit* (clicked).
</br>
</br>
The code looks like this:
</br>
```javascript
squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
            }
        })
    })
 ```
</br>

But lets attempt to break it down into readable parts now:
</br>
</br>

First grab the `squares` and `.forEach` *square* `(square` tell it to `=>` grab a `square` and add an *EventListener* `.addEventListener` which take two parameters.
</br>
</br>

The first is the *trigger* `'mousedown'` which is essentially "click".
</br>

The second is the **action** after the *trigger* which we'll assign a function `( )` and tell it to `=>` run an *if* statement.
</br>
</br>

If the `square.id` is equal to the `hitPosition` then we'll declare `result++;` which mean just add whatever the increment is to the result (which is just 1 in this case).
</br>

Then on the next line we'll display the `result` by assigning it to the `score.textContent`, which displays the *score* (we defined that class in the html) as text.
</br>

Then lastly here we'll initialize the `hitPosition` back to null so it can be run again.

----
### Phew 😵 😖 We're almost done!
----

We have to get the mole to move on its own, so we'll create a function for that! </br>
Remember earlier when we told the *mole* to get off of the *randomSquare* and go to a new one? </br>
That would only run once.  So now we need to get it to keep running in intervals! </br>
</br>
Define a `timerId` variable and assign it null. Then use the 
`setInterval` method (which takes two *params*) to make the *randomSquare* (that the mole is chasing) move every 500ms(miliseconds)

```javascript
function moveMole() {
    let timerId = null;
    timerId = setInterval(randomSquare, 500)
}
```
</br>

Presto!

----

### Last but not least!

----

</br>

We need to make the *clock* **countdown** so we're not clicking forever and racking up points for nothing! </br>

</br>
So... lets make a function for that!
</br>
</br>

```javascript
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
```
</br>
Let's break down this last one and put it all together:
</br>
</br>

Create a `function countDown()` which we'll de-incriment the *currentTime* by adding two dashes at the end of it like this `currentTime--;`. Then we'll display the *currentTime* by assigning it to `timeLeft.textContent`.

</br>

Now we want to send a message when the game is over so we can also find out what our final score is!

</br>

We'll create an *if* statement here saying that `if` the `currentTime` is equal to `0` then we want to `clearInterval(countDownTimerId);` and also `clearInterval(timerId);` and also `alert (` and whatever message you want + the `result)` at the end.

## And we have a Whack-A-Mole Game!

The one I'm working on along with the `code` can be found in my repository.  Feel free to suggest edits to this! And thanks for reading!!
