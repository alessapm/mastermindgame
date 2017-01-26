'use strict';

$(document).ready(function(){

  var colorList = ['red', 'orange', 'yellow','green','blue', 'purple', 'white', 'pink', 'gray', 'maroon', 'navy'];
  var $master = [];

  for (var clor = 0; clor < 4; clor++){
    $master.push(colorList[Math.floor(Math.random()*colorList.length)]);
  }
  console.log('master is now: ' + $master);

  $('#easy').on('click', function(){
    colorList = ['red', 'orange', 'yellow','green','blue', 'purple', 'white'];
    $master = [];
    for (var newclor = 0; newclor < 4; newclor++){
      $master.push(colorList[Math.floor(Math.random()*colorList.length)]);
    }
    console.log('I pressed easy, master is: ' + $master);
    $('#easyOverlay').addClass('easy-overlay');
      $('#easyOverlay').text('You have activated easy mode, the computer will now only pick from red, orange, yellow, green, blue, purple and white. Good luck!')
  })



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

    //assign the correct colors to correct divs
    for (var j = 0; j < $userGuess.length; j++){
      $($allRows[0][j]).css({
        // 'background' : 'none',
        'background-color': $userGuess[j]
      })
    };
    // reset input.vals to blank
      $('input').val("");

      //Long version of this using EACH would be:
      // $.each($("input"), function(index, input) {
      //   $(input).val("");
      // });

      //Check for individual color matches. If color match, nothing
      //if not color match, fade background-color back to black

    //check for complete win //may need to put a timeOut function
    //on this so the colors show up before the alert.
    //also obviously change the alert to an overlay or something.
    var circlesCorrect = 0;


    for (var i=0; i < $userGuess.length; i++){


      if ($userGuess[i] === $master[i]){
        circlesCorrect++;
        $($allRows[0][i]).addClass('correctSpot');
        //ADD A FIXED INPUT TO THE CORRECT INPUT
       // $('input')[i].val()= $master[i]
        }

      // } else {
          //Code for using the setTimeout (here used to fade back to black)
        // var fadedelay = function(index, row){
        //   // console.log('i : ', index);
        //   // console.log('element: ', $($allRows[0][index]))
        //   console.log('All Rows: ', $allRows);
        //   $(row[index]).css({
        //     'background-color': 'black'
        //   });
        // };

        // setTimeout(fadedelay.bind(null, i, $allRows[0]), 1000);

        // fadedelay(i);
      // }

      };

      //WIN STATE:
      if (circlesCorrect >= 4){
        $('h2').fadeOut(1000);
        var timeToOverlay= window.setTimeout(function(){
          $('#overlay').addClass('win-overlay');
        $('#overlay').text('You Win!!!')
      }, 1900)
      };


    //two things have to be reset: the userGuess array and
    //the rows[0]. $allRows.shift() establishes new row[0]

    $userGuess = [];
    $allRows.shift();
      // then if rows.length === 0, YOU LOSE
      if($allRows.length === 0){
        if (circlesCorrect >=4){
          $('h2').fadeOut(1000);
          var timeToOverlay= window.setTimeout(function(){
            $('#overlay').addClass('win-overlay');
            $('#overlay').text('You Win!!!')
          }, 1900)
        } else{
          var timeToOverlay= window.setTimeout(function(){
            $('#overlay').addClass('lose-overlay');
            $('#overlay').text('You Lose!')
          }, 500)
        }
      }


  }); //This bracket ends the click event

//Now begins the ENTER keypress version:
  $('#input4').on('keypress', function(event){
    if(event.keyCode === 13){
      $userGuess.push($userI1.val(), $userI2.val(), $userI3.val(), $userI4.val());

    //assign the correct colors to correct divs
    for (var j = 0; j < $userGuess.length; j++){
      $($allRows[0][j]).css({
        // 'background' : 'none',
        'background-color': $userGuess[j]
      })
    };
    // reset input.vals to blank
      // $('input').each(function(value){
      //   value.val() = ""
      // })


      $("input").val("");

      //Long version of this using EACH would be:
      // $.each($("input"), function(index, input) {
      //   $(input).val("");
      // });

      //Check for individual color matches. If color match, nothing
      //if not color match, fade background-color back to black

    //check for complete win //may need to put a timeOut function
    //on this so the colors show up before the alert.
    //also obviously change the alert to an overlay or something.
    var circlesCorrect = 0;


    for (var i=0; i < $userGuess.length; i++){


      if ($userGuess[i] === $master[i]){
        circlesCorrect++;
        $($allRows[0][i]).addClass('correctSpot');
        }

      // } else {
          //Code for using the setTimeout (here used to fade back to black)
        // var fadedelay = function(index, row){
        //   // console.log('i : ', index);
        //   // console.log('element: ', $($allRows[0][index]))
        //   console.log('All Rows: ', $allRows);
        //   $(row[index]).css({
        //     'background-color': 'black'
        //   });
        // };

        // setTimeout(fadedelay.bind(null, i, $allRows[0]), 1000);

        // fadedelay(i);
      // }

      };

      //WIN STATE:
      if (circlesCorrect >= 4){
        $('h2').fadeOut(2000);
        var timeToOverlay= window.setTimeout(function(){
          $('#overlay').addClass('win-overlay');
        $('#overlay').text('You Win!!!')
      }, 1900)
      };


    //two things have to be reset: the userGuess array and
    //the rows[0]. $allRows.shift() establishes new row[0]

    $userGuess = [];
    $allRows.shift();
      // then if rows.length === 0, YOU LOSE
      if($allRows.length === 0){
        if (circlesCorrect >=4){
          $('h2').fadeOut(2000);
          var timeToOverlay= window.setTimeout(function(){
            $('#overlay').addClass('win-overlay');
            $('#overlay').text('You Win!!!')
          }, 1900)
        } else{
          var timeToOverlay= window.setTimeout(function(){
            $('#overlay').addClass('lose-overlay');
            $('#overlay').text('You Lose!')
          }, 500)
        }
      }
    }; //this closes the if event==13
  }); //this closes the on keypress function


    $('#overlay').on('click', function(){
    $('#overlay').removeClass();
    $('#overlay').text('');
    });

});
