'use strict';

$(document).ready(function(){

  var master = ['yellow','purple','white','green'];
  var userI1 = $('#input1').val()

  $('#enter').on('click', function(){
    console.log('registering click only');
    $('.circle').css({
      // 'background' : 'none',
      'background-color' : $('#input1').val()
    });

  });


})
