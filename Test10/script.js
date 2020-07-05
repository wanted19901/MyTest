var calc = $('.container');
var calcDisplay = calc.find('.output');
var calcKeys = calc.find('.key');
var calcButton = calc.find('.num');
var operator = calc.find('.operators');
var calcC = calc.find('.c');
var calcRes = calc.find('.res');
var calcSpace = calc.find('.ce');
let operatorsArr = [];
let a = 0;
let b = calcDisplay.value

calcKeys.each(function () {
  var current = $(this).attr('value');
  $(this).text(current);
});

calcButton.on('click', function () {
  if (calcDisplay.value = b){
    console.log(b, calcDisplay.value)
    calcDisplay.value = 5
    calcDisplay.val('') 
  }
  calcDisplay.val(calcDisplay.val() + $(this).attr('value'));
});

calcC.on('click', function () {
  calcDisplay.val('');
  a = 0;
  b = 0; 
  operatorsArr = []
});


calcRes.on('click', function () {
  switch (operatorsArr[0]) { 
  case "+" : b = (calcDisplay.val()*1 + a*1);
  break;
  case "-" : b = ((calcDisplay.val()*1) - (a*1));
    b*=-1;
  break;
  case "*" : b = (calcDisplay.val()*(a*1));
  break;
  case "/" : b = (a/calcDisplay.val());
}
console.log(a , operatorsArr[0], calcDisplay.val(), b)
calcDisplay.val(b)
operatorsArr.pop()
});

calcSpace.on('click', function () { 
  calcDisplay.val( calcDisplay.val().substring(0, calcDisplay.val().length-1) );
});

operator.on('click', function () {
  if (operatorsArr.length != 0 ){
    switch (operatorsArr[0]) { 
      case "+" : b = (calcDisplay.val()*1 + a*1);
      break;
      case "-" : b = ((calcDisplay.val()*1) - (a*1));
      b*=-1;
      break;
      case "*" : b = (calcDisplay.val()*(a*1));
      break;
      case "/" : b = (a/calcDisplay.val());
      calcDisplay.val(b)
    }
    calcDisplay.val(b)
    operatorsArr.pop()
  }

  a = calcDisplay.val();
  calcDisplay.val('')
  operatorsArr.push($(this).attr('value'))
  console.log(a,b)
  if ( b == 0 || '') {
    calcDisplay.val('')
  }
  else {  
    calcDisplay.val(b)
  }

});
