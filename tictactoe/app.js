
var start = document.getElementById('start');
var playing = false;
var currentPlayer = "X";
var playX = "<h2>" + "X" + "</h2>";
var playO = "<h2>" + "O" + "</h2>";
var isOver;
var playedBoard =
[[null,null, null],
 [null, null, null],
 [null, null, null]];

window.onload = function(){
  start.addEventListener('click', function(){
    start.className = "invisible";
  var container = document.getElementById('container');
  var board = document.createElement('div');
  board.setAttribute('id','board');
    if (isOver){
      location.reload();
    }
    if (!playing){
      var board = document.createElement('div');
      board.setAttribute('id','board');
      container.appendChild(board);
      playing = true;
      isOver = false;
      for(var j = 0; j < 3;  j++){
        var row = document.createElement('div');
        row.setAttribute('class', 'row');
        for (var i = 0; i < 3; i++){
          var div = document.createElement('div');
          div.innerHTML ='&nbsp;'
          div.setAttribute('class','cell');
          div.setAttribute('played','false');
          div.setAttribute('positiony', j);
          div.setAttribute('positionx', i);
          div.addEventListener('click', play);
          row.appendChild(div);
        } board.appendChild(row);
      }
    }
  });

  function play (){
    if (!isOver){
      var played = this.getAttribute('played');
      if (played === "false"){
        this.setAttribute('played', 'true');
        if (currentPlayer === "X"){
          this.setAttribute('class', 'cardx');
          this.setAttribute('play', 'X')
          this.innerHTML = playX;
          currentPlayer = "O";
          var posy = parseInt(this.getAttribute('positiony'));
          var posx = parseInt(this.getAttribute('positionx'));
          playedBoard[posy][posx] = playX;
          checkWinner();
        } else if (currentPlayer === "O"){
          this.setAttribute('class', 'cardo');
          this.setAttribute('play', 'O')
          this.innerHTML = playO;
          currentPlayer = "X";
          var posy = parseInt(this.getAttribute('positiony'));
          var posx = parseInt(this.getAttribute('positionx'));
          playedBoard[posy][posx] = playO;
          checkWinner();
        }  else {
          alert ("something has gone wrong");
        }
      }
      else {
        swal("Oops...You already played here!");
    }}
  }
}

function checkWinner(){
  console.log(playedBoard);
  if
   ( playedBoard[0][0]  === playedBoard[0][1] &&
     playedBoard[0][0]  === playedBoard[0][2] &&
     playedBoard[0][0]  !== null
   ) {
       itIsOver(playedBoard[0][0].substring(4,5));
     } else if
  (  playedBoard[1][0] === playedBoard[1][1] &&
     playedBoard[1][0] === playedBoard[1][2] &&
     playedBoard[1][0] !== null
  ) {
      itIsOver(playedBoard[1][0].substring(4,5));
    } else if
  ( playedBoard[2][0] === playedBoard[2][1] &&
    playedBoard[2][0] === playedBoard[2][2] &&
    playedBoard[2][0] !==null
  ) {
      itIsOver( playedBoard[2][0].substring(4,5));
    } else if
  ( playedBoard[0][0] === playedBoard[1][1] &&
    playedBoard[0][0] === playedBoard[2][2] &&   playedBoard[0][0] !== null
  ) {
      itIsOver( playedBoard[0][0].substring(4,5));
    } else if
  (  playedBoard[2][0] === playedBoard[1][1] &&
     playedBoard[2][0] === playedBoard[0][2] &&
     playedBoard[2][0] !== null
  ){
    itIsOver( playedBoard[2][0].substring(4,5));
  } else if
 (  playedBoard[0][0] === playedBoard[1][0] &&
   playedBoard[0][0] === playedBoard[2][0] &&
   playedBoard[0][0] !== null
) {
  itIsOver( playedBoard[0][0].substring(4,5));
} else if
(  playedBoard[0][1] === playedBoard[1][1] &&
   playedBoard[0][1] === playedBoard[2][1] &&
   playedBoard[0][1] !== null
) {
  itIsOver( playedBoard[0][1].substring(4,5));
} else if
(
  playedBoard[0][2] === playedBoard[1][2] &&
  playedBoard[0][2] === playedBoard[2][2] &&
  playedBoard[0][2] !== null
) {
    itIsOver( playedBoard[0][2].substring(4,5));
  } else {//keep playing
  }


  //check full board
  if(!isOver){
    for (var m =0; m < playedBoard.length ; m++){
      for (var n = 0; n <playedBoard[m].length; n++){
        if(playedBoard[m][n]===null){
          return isOver;
        }
      }
    }
     itIsOver('It is a tie!');
  }
}

function itIsOver (winner){
  if (winner === 'It is a tie!'){
    swal("It's a tie!");
    start.innerHTML = "Play again?";
    start.className ="";
    isOver = true;
  } else{
  swal('Winner is ' +  winner);
  start.innerHTML = "Play again?";
  start.className ="";
  isOver = true;
  }
}
