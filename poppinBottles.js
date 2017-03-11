function calcAmount(num, denom){
  var tmp = { amount:0, remainder:0};
  tmp.amount = Math.floor( num / denom);
  tmp.remainder = num % denom;
  return tmp;
}

function returnOnInvestment(dollars){
  var bottles = calcAmount(dollars, 2);
  var emptyReturn = calcAmount(bottles.amount, 2);
  var capReturn = calcAmount(bottles.amount, 4);
  var total = bottles.amount + emptyReturn.amount + capReturn.amount;

  console.log('');
  console.log('With $' + dollars + ' you can get ' + total + ' bottles.');
  console.log(bottles.amount + ' bottles purchased,');
  console.log(emptyReturn.amount + ' free bottles from empties, &');
  console.log(capReturn.amount + ' free bottles from bottle caps.');
  console.log('You will have $' + bottles.remainder + ' , ' + emptyReturn.remainder + ' empty(s), & ' + capReturn.remainder + ' bottle cap(s) remaining.');
}

var dollars = process.argv[2];
returnOnInvestment( dollars );