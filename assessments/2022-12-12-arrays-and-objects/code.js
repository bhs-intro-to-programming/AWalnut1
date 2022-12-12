const makeRow = () => ['', '', '']

const makeBoard = () => [makeRow(), makeRow(), makeRow()]

const makeMove = (mark, row, collum) => {
  return {mark: mark, row: row, collum: collum}
}; // i tried to do it shorthand, didnt work, might just be a skill issue

const placeMark = (board, move) => {
  return board.push(move)
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