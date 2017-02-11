'use strict';

$(document).ready(function(){

  console.log('running with improved.js')

  var colorList = ['red', 'orange', 'yellow','green','blue', 'purple', 'white', 'pink', 'gray', 'maroon', 'navy'];
  var master = [];

  for (var i = 0; i < 4; i++){
    master.push(colorList[Math.floor(Math.random()*colorList.length)]);
  }

  $('#easy').on('click', function(){

    colorList = colorList.splice(0, 7);

    master = [];

    for (var i = 0; i < 4; i++){
      master.push(colorList[Math.floor(Math.random()*colorList.length)]);
    }

    $('#easyOverlay').addClass('easy-overlay');
      $('#easyOverlay').css('visibility', 'visible');
  })

  $('#regular').on('click', function(){
      location.reload();
    });



  var $userI1 = $('#input1');
  var $userI2 = $('#input2');
  var $userI3 = $('#input3');
  var $userI4 = $('#input4');

  var userGuess = [];
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

  var allRows = [$firstC, $secondC, $thirdC, $fourthC, $fifthC, $sixthC, $seventhC, $eighthC, $ninethC, $tenthC]

  //console.log("first row of circles " + $firstC);
  var mastermind = function(){
    //assign the correct colors to correct divs
    for (var j = 0; j < userGuess.length; j++){
      $(allRows[0][j]).css({
        // 'background' : 'none',
        'background-color': userGuess[j]
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

    var circlesCorrect = 0;


    for (var i=0; i < userGuess.length; i++){

     // console.log('input i -' + i + '- value equals ' + $('.input')[i].val())
      if (userGuess[i] === master[i]){
        circlesCorrect++;
        $(allRows[0][i]).addClass('correctSpot');
        //ADD A FIXED INPUT TO THE CORRECT INPUT
        // console.log($('.inputs input').eq(i));
        $('.inputs input').eq(i).val(master[i]);
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
        var timeToOverlay= window.setTimeout(function(){
          $('#overlay').addClass('win-overlay');
        $('#overlay').text('You Win!!!');
      }, 1000)
      };


    //two things have to be reset: the userGuess array and
    //the rows[0]. $allRows.shift() establishes new row[0]

    userGuess = [];
    allRows.shift();
      // then if rows.length === 0, YOU LOSE
      if (allRows.length !== 0) {
        return;
      }

      if (circlesCorrect >= 4) {
        var timeToOverlay = window.setTimeout(function(){
          $('#overlay').addClass('win-overlay');
          $('#overlay').text('You Win!!!');

        }, 1000)

      } else {
          var unlocked= window.setTimeout(function(){
          $('#master-revealed').addClass('revealed');
          $('#master-revealed').html("<h2>Master Code &#128275</h2><div class='box'><div class='m-circle'></div></div><div class='box'><div class='m-circle'></div></div><div class='box'><div class='m-circle'></div></div><div class='box'><div class='m-circle'></div></div><h2>     X</h2>");

            for (var q=0; q < master.length; q++){
              $('#master-revealed .m-circle').eq(q).css('background-color', master[q]);
            }
        }, 200)

        var timeToOverlay= window.setTimeout(function(){
          $('#overlay').addClass('lose-overlay');
          $('#overlay').text('You Lose!')
        }, 2000)
      }
  }

  $('#enter').on('click', function(){
    //console.log('user I1 input variable = ' + $userI1.val() + ' and the literal jQuery is ' + $('#input1').val())
    //push the 4 inputs into an array userGuess
    userGuess.push($userI1.val().toLowerCase(), $userI2.val().toLowerCase(), $userI3.val().toLowerCase(), $userI4.val().toLowerCase());

    mastermind()


  }); //This bracket ends the click event

//Now begins the ENTER keypress version:
//ARUN: Rewrite this to use a function so as not to repeat yourself (keep it DRY)
  $('#input4').on('keypress', function(event){
    if(event.keyCode === 13){
      userGuess.push($userI1.val().toLowerCase(), $userI2.val().toLowerCase(), $userI3.val().toLowerCase(), $userI4.val().toLowerCase());

      mastermind()

    }; //this closes the if event==13
  }); //this closes the on keypress function
    $('#master-revealed').on('click', function(){
    $('#master-revealed').removeClass();
    $('#master-revealed').html('');
    });

    $('#overlay').on('click', function(){
    $('#overlay').removeClass();
    $('#overlay').text('');
    $('#playagain').removeClass('invisible');
    $('#playagain').addClass('play-again');
    });

    $('#playagain').on('click', function(){
      location.reload();
    })

});
