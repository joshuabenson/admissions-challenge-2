
// Using NaN instead of null is a clever hack. See checkForWinner for details.
var spaces = [
  NaN, NaN, NaN,
  NaN, NaN, NaN,
  NaN, NaN, NaN
];

var player1 = 'veggies';
var player2 = 'junkfood';
var currentPlayer = null;
var GO = NaN;
var setNextTurn = function () {
  if (currentPlayer === player1) {
    currentPlayer = player2;
  }
  else {
    currentPlayer = player1;
  }
  $('#turn-label').text("It's " + currentPlayer + "'s turn...");
};

var checkForWinner = function () {
  // Because (NaN === NaN) is always false, we can safely assume
  // that if three spaces in a row are the same, all three spaces are
  // marked by a player, and not all empty.

  if ( spaces[0] === spaces[1] && spaces[1] === spaces[2]
    || spaces[3] === spaces[4] && spaces[4] === spaces[5]
    || spaces[6] === spaces[7] && spaces[7] === spaces[8]
    || spaces[0] === spaces[3] && spaces[3] === spaces[6]
    || spaces[1] === spaces[4] && spaces[4] === spaces[7]
    || spaces[2] === spaces[5] && spaces[5] === spaces[8]
    || spaces[0] === spaces[4] && spaces[4] === spaces[8]
    || spaces[2] === spaces[4] && spaces[4] === spaces[6]
    // TODO: Check for rest of game winning cases
  )
  {
    console.log('Somebody won!');
    
    onGameWin(currentPlayer);
    return true
  }
};

$(document).on('click', '#board .space', function (e) {
  var validMove = NaN

  var spaceNum = $(e.currentTarget).index();
  
    console.log('You clicked on space #' + spaceNum);

  // Marks the space with the current player's name

    if (spaces[spaceNum] || GO===true) { console.log('Nope...'); }

     else { spaces[spaceNum] = currentPlayer;

      validMove = true;

    }


  // Adds a class to elem so css can take care of the visuals

  if (validMove === true) {

                  $('#board .space:eq(' + spaceNum + ')').addClass(currentPlayer);

                  if (checkForWinner()) {
                    GO = true
                  }
                    else {

                 

                  setNextTurn();};}
});

function onGameWin (winner) {

  console.log(winner + ' won the game!');

  $('#turn-label').text("WINNER: " + winner);
 
  
  $(document).ready(function(){
 
var ex = 0;
do {


   
    if (winner==='veggies') {
      $('#board .space.veggies').animate({  opacity:'0.6'},"slow");
  } else{
    $('#board .space.junkfood').animate({  opacity:'0.6'},"slow");
  }
$('#board .space.veggies').animate({  opacity:'1.0'},"slow");
  $('#board .space.junkfood').animate({  opacity:'1.0'},"slow");
    ex +=1;    } while (ex<1000);
  });

 
 };

// Start the game
setNextTurn();
