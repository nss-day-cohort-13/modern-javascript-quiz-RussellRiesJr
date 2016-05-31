'use strict';

var botBattle = (function(botBattle) {

  // Main DOM element
  const mainDiv = $('#main');
  const subMain = $('#subMain');

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
    if(typeOne = 'Spinner') {
      subMain.html(`<h2>Pick a model of Spinner robot</h2>
      <div class='select col-lg-12' id='Whyachi'>Whyachi</div>
      <div class='select col-lg-12' id='Blendo'>Blendo</div>`);
    } else if(typeOne = 'Hammer') {
        subMain.html(`<h2>Pick a model of Hammer robot</h2>
        <div class='select col-lg-12' id='Hammertime'>Hammertime</div>
        <div class='select col-lg-12' id='Grendel'>Grendel</div>`);
    } else if(typeOne = 'Flipper') {
        subMain.html(`<h2>Pick a model of Flipper robot</h2>
        <div class='select col-lg-12' id='Toro'>Toro</div>
        <div class='select col-lg-12' id='Bronco'>Bronco</div>`);
      }
    subMain.click($('#secondBot').focus());
  };

  // Select first bot type
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

  // Select second bot type

  //Start new game
  botBattle.newGame = function() {
    mainDiv.html('<div class="col-md-2"></div><input type="text" class="col-md-3" id="firstBot" placeholder="Enter name for Robot #1"><div class="col-md-2"></div><input type="text" class="col-md-3" id="secondBot" placeholder="Enter name for Robot #2"><div class="col-md-2"></div>');
    $('#firstBot').focus();
    $('#firstBot').keyup(typeSelectOne);
    // .then(('#secondBot').focus());
    // $('#secondBot').addEventListener('keyup', typeSelectTwo);
    $('battleCard').hide();
    $('finalCard').hide();
  };

  return botBattle;
})(botBattle || {});
