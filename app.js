const gameState = {
  players: ["x", "o"],
  board: [
  null, null, null, null, null, null, null, null, null
  ],
};

function displayNameX(){
  let nameX = document.getElementById('playerX');
  document.getElementById('player1').innerHTML = nameX.value
}
function displayNameO(){
  let nameO = document.getElementById('playerO');
  document.getElementById('player2').innerHTML = nameO.value
}

let players = ["x", "o"]
let currentPlayerIndex = -1;
let currentPlayer = players[((currentPlayerIndex + 1) % 2)];
let turn = document.getElementById('turn')

const board = document.getElementById("board");
board.addEventListener("click", (event) => {
  click(event);
});

alert('Player X Goes First!!!')

function click(event) {

  if (event.target.innerHTML == '') {
    
    if (currentPlayer === "x"){
    turn.innerHTML = 'O'
    event.target.innerHTML = 'X';
    gameState.board[event.target.id] = 'X'
    currentPlayerIndex = currentPlayerIndex + 1;
    currentPlayer = players[((currentPlayerIndex + 1) % 2)]
    
  }
  else {
    turn.innerHTML = 'X'
    event.target.innerHTML = 'O';
    gameState.board[event.target.id] = 'O'
    currentPlayerIndex = currentPlayerIndex + 1;
    currentPlayer = players[((currentPlayerIndex + 1) % 2)]
    
  } 
  endGame()
  }
}



const winning = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
]

function endGame(){
 
  for (let i = 0; i <= winning.length; i++){
    let tmpA = gameState.board[winning[i][0]];
    let tmpB = gameState.board[winning[i][1]];
    let tmpC = gameState.board[winning[i][2]];
    if(typeof tmpA === 'string'){
      if(tmpA === tmpB && tmpB === tmpC){
        alert('Game Over! Click Restart and The Loser Gets to Go First!')
      } 
    }
  }
}

function resetGame(){
  for (let i=0; i <= 8; i++){
  gameState.board[i] = null
  document.getElementById(i).innerHTML = '';
  }
}