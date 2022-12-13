const makeRow = () => ['', '', '']

const makeBoard = () => [makeRow(), makeRow(), makeRow()]

const makeMove = (mark, row, collum) => ({mark: mark, row: row, collum: collum})
 // i tried to do it shorthand, didnt work, might just be a skill issue

const placeMark = (board, move) => {
  return board.push(move(mark[mark], row[row], collum[collum]))
};

const allTheSame = () => {
  return
};

const extractColumn = () => {
  return
};

const recordMove = () => {
  return
};

const rowForMove = () => {
  return
};

const placeMoves = () => {
  return
};