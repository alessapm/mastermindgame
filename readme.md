# Welcome to Code Breaker by Alessa 

![alt-text](images/codebreaker.png)

Code Breaker is the simple sequence-guessing game with the user's goal being to correctly guess the order of a 4-color sequence. This sequence is generated by the program and will be new every time. 
Choose between Easy and Regular levels. The game begins when you enter your first guess. You have ten guesses to break to the code. Guess the full correct sequence to win! 

## Approach

I set out to design a game with a simple layout that takes a user's guesses from four inputs and matches them to the gameboard. The user submits guesses by clicking the 'Submit' button or pressing enter in the fourth input feild. The user's guesses are compared to a randomly generated Master Code. If the user guesses the right color in the right position, the user is notified via a think blue border. Once a position is guessed correctly, the corresponding input feild is locked to avoid unnecessary typing for the user. 

The program allows for two levels of play: easy and regular. The regular level is the default and its Master Code can consist of a combination of 11 color options. The easy mode can be activated by clicking on an Easy button, which then limits the combination of colors to only 7 colors. Pressing the Easy button also activates a display explaining the new limited color options. 

When a user wins, there is a blue overlay stating 'You Win!!!'. When a user loses, there is first an overlay displaying the correct Master Code, and then there is a red overlay stating "You Lose". 

Winning or Losing will also display a Play Again button that reloads the page. 


## User Stories
    * As a user I should be able to select a level for the game. 
    * As a user I should be able to read the directions. 
    * As a user I should be able to enter my guesses.
    * As a user I should be able to submit guesses by clicking Submit.
    * As a user I should be able to submit guesses by clicking Enter on input4.
    * As a user I should be able to see if I got any guesses right.
    * As a user I should be able to see my previous guesses. 
    * As a user I should be able to know when I've guessed the correct sequence, and have won the game. 
    * As a user I should be able to see the correct sequence and know when I've lost the game. 


## Technologies Used

*HTML
*CSS
*jQuery

## Wire frame:
![alt-text](images/codebreaker-wireframe.png)

## Instructions 

Guess the sequence of colors by entering your guesses into the input feilds and pressing 'Submit'. If you put the right color in the right position, you will see a light blue border on that circle.
Get all four colors and positions right and you win. Get it wrong and guess again. You get 10 chances to break the code. There can be multiple instances of the same color. 

## Obstacles

Getting the input fields to clear after each guess, getting each subsequent guess' colors to appear on the line above the previous guess, and getting the Master code reveal overlay to be aesthetically pleasing. 

## Unsolved Problems

Does not look great on a phone- the gameboard is scrunched.  

## Goals

Add a feature that tells the user if they got the right color but in the wrong position. Fix the Master code overlay to the dimensions of the H2. 


