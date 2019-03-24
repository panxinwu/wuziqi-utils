export function checkWinnerOneDirection(squares, startX, startY, deltaX, deltaY) {
  const DIM = 10
  let player = squares[startX][startY]
  let xPos = startX
  let Ypos = startY
  let counter = 1
  while (xPos >= 0 && xPos < DIM && Ypos >= 0 && Ypos < DIM) {
    xPos += deltaX
    Ypos += deltaY
    if (squares[xPos][Ypos] !== player || counter === 5) {
      break
    }
    counter += 1
  }
  return counter === 5
}