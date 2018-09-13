document.addEventListener('DOMContentLoaded', () => {

  const Game = new Object();

  Game.square = document.getElementsByTagName('td');
  Game.player = document.getElementsByTagName('h2');
  Game.reset = document.getElementById('reset');

  Game.playerTurn = true;

  Game.winConditions = [
    [0,3,6],[1,4,7],[2,5,8],[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6]
  ]

  Game.arrX = [];
  Game.arrO = [];

  Game.reset.addEventListener('click', (e) => {
    location.reload();
  })

  for (let i=0; i<Game.square.length; i++) {
    Game.square[i].addEventListener('click', (e) => {
      switch (Game.playerTurn) {
        case true:
          Game.square[i].setAttribute('class', 'X');
          Game.square[i].innerHTML = 'X';
          Game.arrX.push(Number(Game.square[i].attributes[0].value));
          console.log(Game.arrX);
          Game.player[0].innerHTML = 'It is O\'s turn';
          Game.playerTurn = false;
          break;
        case false:
          Game.square[i].setAttribute('class', 'O');
          Game.square[i].innerHTML ='O';
          Game.arrO.push(Number(Game.square[i].attributes[0].value));
          console.log(Game.arrO);
          Game.player[0].innerHTML = 'It is X\'s turn';
          Game.playerTurn = true;
          break;
      }
    })
  }
});
