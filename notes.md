# Mastermind/ Code breaker game

## overview/components
The game should begin with an empty playing board consisting of a grid of circular divs. There is a Master code of one sequence of four colors. There are four input boxes that correspond to four circles, each in its own column of ten circles. Clicking an 'Enter' button gives the circles the colors corresponding to the user inputs. If any of the four inputs match the Master code in both color and position, this color stays permanently. If not, the color fades back to white. That marks the end of the first try and beginning of the second. 

container
    gameboard
        Master Code representation
        Numbers
        Rows
            Row1
            Row2
            Row3
            Row4
            Row5 etc
        Numbers
        Userarea
            Inputs
            Enter

at the end the Master Code lock should unlock(replace image), then the black Master Code div should fade down and reveal the master's color code. Then an overlay should appear saying You Win!
background image: https://i.ytimg.com/vi/iLejEwXlNbE/maxresdefault.jpg
