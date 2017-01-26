'use strict';

$(document).ready(function(){

  var $master = ['yellow','purple','white','green'];
  var $userI1 = $('#input1');
  var $userI2 = $('#input2');
  var $userI3 = $('#input3');
  var $userI4 = $('#input4');
  var $userGuess = [];
  //console.log($userGuess);

  //access to the circles of an individual row:
  var $firstC = $('.first .box .circle');
  var $secondC = $('.second .box .circle');
  var $thirdC = $('.third .box .circle');
  var $fourthC = $('.fourth .box .circle');
  var $fifthC = $('.fifth .box .circle');
  var $sixthC = $('.sixth .box .circle');
  var $seventhC = $('.seventh .box .circle');
  var $eighthC = $('.eighth .box .circle');
  var $ninethC = $('.nineth .box .circle');
  var $tenthC = $('.tenth .box .circle');

  var $allRows = [$firstC, $secondC, $thirdC, $fourthC, $fifthC, $sixthC, $seventhC, $eighthC, $ninethC, $tenthC]

  //console.log("first row of circles " + $firstC);


  $('#enter').on('click', function(){
    //console.log('user I1 input variable = ' + $userI1.val() + ' and the literal jQuery is ' + $('#input1').val())
    //push the 4 inputs into an array userGuess
    $userGuess.push($userI1.val(), $userI2.val(), $userI3.val(), $userI4.val());
    console.log('user guess array is ' + $userGuess);
    //assign the correct colors to correct divs
    for (var j = 0; j < $userGuess.length; j++){
      $($allRows[0][j]).css({
        // 'background' : 'none',
        'background-color': $userGuess[j]
      })
    };
    // reset input.vals to blank
      // $('input').each(function(value){
      //   $(value).val() = ""
      // })



    //check for complete win
    var circlesCorrect = 0
    for (var i=0; i < $userGuess.length; i++){
      if ($userGuess[i] === $master[i]){
        circlesCorrect++;
      };
      if (circlesCorrect >= 4){
        alert('You Win!');
      }
    }

    //after colors applied and check for win,
      //rows.shift() -- establishing new row[0]
      // then if rows.length === 0, YOU LOSE


  }); //This bracket ends the click event


})
