'use strict';

var botBattle = (function(botBattle) {

  // Main DOM element
  const mainDiv = $('#main');
  const subMain = $('#subMain');
  const otherMain = $('#otherMain');

  //Variables for player creation
  var nameOne;
  var nameTwo;
  var typeOne;
  var typeTwo;
  var modelOne;
  var modelTwo;



  // Select first bot model
  var modelSelectOne = function(event) {
    typeOne = event.target.getAttribute('id');
    console.log("Type One: ", typeOne);
    subMain.off('click', modelSelectOne);
    if(typeOne === 'Spinner') {
      subMain.html(`<h2>Pick a model of Spinner robot</h2>
      <div class='select col-lg-12' id='Whyachi'>Whyachi</div>
      <div class='select col-lg-12' id='Blendo'>Blendo</div>`);
    } else if(typeOne === 'Hammer') {
        subMain.html(`<h2>Pick a model of Hammer robot</h2>
        <div class='select col-lg-12' id='Hammertime'>Hammertime</div>
        <div class='select col-lg-12' id='Grendel'>Grendel</div>`);
    } else if(typeOne === 'Flipper') {
        subMain.html(`<h2>Pick a model of Flipper robot</h2>
        <div class='select col-lg-12' id='Toro'>Toro</div>
        <div class='select col-lg-12' id='Bronco'>Bronco</div>`);
      }
    subMain.click(startTwo);
  };

  //  Select Second Bot Model
    var modelSelectTwo = function(event) {
    typeTwo = event.target.getAttribute('id');
    console.log("Type One: ", typeTwo);
    otherMain.off('click', modelSelectTwo);
    if(typeTwo === 'Spinner') {
      otherMain.html(`<h2>Pick a model of Spinner robot</h2>
      <div class='select col-lg-12' id='Whyachi'>Whyachi</div>
      <div class='select col-lg-12' id='Blendo'>Blendo</div>`);
    } else if(typeTwo === 'Hammer') {
        otherMain.html(`<h2>Pick a model of Hammer robot</h2>
        <div class='select col-lg-12' id='Hammertime'>Hammertime</div>
        <div class='select col-lg-12' id='Grendel'>Grendel</div>`);
    } else if(typeTwo === 'Flipper') {
        otherMain.html(`<h2>Pick a model of Flipper robot</h2>
        <div class='select col-lg-12' id='Toro'>Toro</div>
        <div class='select col-lg-12' id='Bronco'>Bronco</div>`);
      }
    otherMain.click(beginFight);
  };

  // Select first Bot Type
  var typeSelectOne = function(event) {
    if(event.which === 13) {
      nameOne = event.target.value;
      console.log("Name One: ", nameOne);
      mainDiv.off('click', typeSelectOne);
      subMain.html(`<h2>Pick a type for the first robot</h2>
        <div class='select col-lg-12' id='Spinner'>Spinner</div>
        <div class='select col-lg-12' id='Hammer'>Hammer</div>
        <div class='select col-lg-12' id='Flipper'>Flipper</div>`);
      subMain.click(modelSelectOne);
    }
  };

  // Select second Bot Type
  var typeSelectTwo = function(event) {
    if(event.which === 13) {
      nameTwo = event.target.value;
      console.log("Name Two: ", nameTwo);
      mainDiv.off('click', typeSelectTwo);
      otherMain.html(`<h2>Pick a type for the second robot</h2>
        <div class='select col-lg-12' id='Spinner'>Spinner</div>
        <div class='select col-lg-12' id='Hammer'>Hammer</div>
        <div class='select col-lg-12' id='Flipper'>Flipper</div>`);
      otherMain.click(modelSelectTwo);
    }
  };

  //Second Robot Set Up Start
  var startTwo = function() {
    $('#secondBot').focus();
    $('#secondBot').keyup(typeSelectTwo);
  }

  //Start new game
  botBattle.newGame = function() {
    $('#start').hide();
    mainDiv.html('<div class="col-md-2"></div><input type="text" class="col-md-3" id="firstBot" placeholder="Enter name for Robot #1" autofocus><div class="col-md-2"></div><input type="text" class="col-md-3" id="secondBot" placeholder="Enter name for Robot #2"><div class="col-md-2"></div>');
    $('#firstBot').keyup(typeSelectOne);
    $('battleCard').hide();
    $('finalCard').hide();
  };

  // Event Listener for 'Start Game' button
  $('#start').click(botBattle.newGame);

  return botBattle;
})(botBattle || {});
