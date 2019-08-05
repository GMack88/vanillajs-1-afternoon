console.log('Hey You!');


const board = [];

function play(clickedId) {
    const playerSpan = document.getElementById('player');
    const clickedElement = document.getElementById(clickedId);
  
    if (playerSpan.innerText === 'X') {
      playerSpan.innerText = 'O';
      clickedElement.innerText = 'X';
    } else {
      playerSpan.innerText = 'X';
      clickedElement.innerText = 'O';
      board[clickedId] = '0';
    }
  

  const topLeft = board[0];
  const topCenter = board[1];
  const topRight = board[2];
  const centerLeft = board[3];
  const center = board[4];
  const centerRight = board[5];
  const bottomLeft = board[6];
  const bottomCenter = board[7];
  const bottomRight = board[8];

  if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
      alert (`${centerLeft} is the winner`);
      return;
  }
  if (centerLeft !== undefined & centerLeft === center && centerLeft === centerRight) {
      alert(`${centerLeft} is the winner`);
      return
  }
  if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
      alert(`${bottomLeft} is the winner`);
      return
  }
  if (topLeft !== undefined && topLeft === centerLeft && topLeft === bottomLeft) {
    alert(`${topLeft} is the winner`);
    return
  }
  if (topCenter !== undefined && topCenter === center && topCenter === bottomCenter) {
    alert(`${topCenter} is the winner`);
    return;
  }
  if (topRight !== undefined && topRight === centerRight && topRight === bottomRight) {
    alert(`${topRight} is the winner`);
    return;
  }
  if (topLeft !== undefined && topLeft === center && topLeft ===bottomRight) {
    alert(`${topLeft} is the winner`)
}
    if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
    alert(`${bottomLeft} is the winner`);
    return;
  }

  let boardFull = true;
  for (var i; i < board.length; i++) {
      if (board[i] === undefined) {
          boardFull = false;
      }
      if (boardFull === true) {
          alert("Cat's Game")
      }
  }
}

function reset() {
    board = [];
    element.innerHTML = '<mark>' + reset + '</mark>';
}