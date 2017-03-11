function calcBottlesPurchase(dollars){
  return Math.floor( dollars / 2 );
}

function calcEmptyBottleReturn(empties){
  return Math.floor( empties / 2 );
}

function calcBottleCapReturn(caps){
  return Math.floor( caps / 4 );
}

function returnOnInvestment(dollars){
  var bottles = calcBottlesPurchase(dollars);
  var emptyReturn = calcEmptyBottleReturn(bottles);
  var capReturn = calcBottleCapReturn(bottles);
  console.log('With $' + dollars + ' you can buy ' + bottles + ' bottles.');
  console.log(bottles + ' empty bottles will get you ' + emptyReturn + ' free bottles.');
  console.log(bottles + ' bottle caps will get you ' + capReturn + ' free bottles.');
}

var dollars = process.argv[2];
returnOnInvestment( dollars );