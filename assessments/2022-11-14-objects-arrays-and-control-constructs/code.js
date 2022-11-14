// For a change of pace, I'm providing you with all the function skeletons. This
// should save you some time.

const area = (rect) => {
  return rect.width * rect.height
};

const higherPaid = (e1, e2) => {
  if (e1.salary > e2.salary){
    return e1
  } else {
    return e2
  }
};

const isSamePoint = (p1, p2) => {
  if (p1.x = p2.x) {
    return true
  } else {
    return false
  }
};// cant for the life of me remember how to do proper if statments so were moving on

const totalWithTip = (bill, tipPercentage) => {
  let money = {subtotal: '0', tip: '0', total: '0'}
  let money.subtotal = bill.subtotal
  let money.tip = bill.subtotal * tipPercentage
  let money.total = bill.subtotal * (1+tipPercentage)
  return money
};// i give up

const isWinner = (player) => {
  if (player.score > 100) {
    return true
  }
};

const updateWins = (players) => {
};

const bigWinners = (players) => {
};

const fillTimesTable = (table) => {
};

const sums = (n) => {
};

const rule110 = (cells) => {
};
