// let output = document.querySelector('.container .col-md-12 .output'); 
// let num1 = document.querySelector('.container .row .col-sm-3 .num1'); 
// let num2= document.querySelector('.container .row .col-sm-3 .num2');
// let num3 = document.querySelector('.container .row .col-sm-3 .num3');
// let num4 = document.querySelector('.container .row .col-sm-3 .num4');
// let num5 = document.querySelector('.container .row .col-sm-3 .num5');
// let num6 = document.querySelector('.container .row .col-sm-3 .num6');
// let num7 = document.querySelector('.container .row .col-sm-3 .num7');
// let num8 = document.querySelector('.container .row .col-sm-3 .num8');
// let num9 = document.querySelector('.container .row .col-sm-3 .num9');
// let num0 = document.querySelector('.container .row .col-sm-6 .num0');
// let res = document.querySelector('.container .row .col-sm-3 .res');
// let c = document.querySelector('.container .row .col-sm-3 .c');
// let ce = document.querySelector('.container .row .col-sm-3 .ce');
// let division = document.querySelector('.container .row .col-sm-3 .division');
// let mult = document.querySelector('.container .row .col-sm-3 .mult');
// let minus = document.querySelector('.container .row .col-sm-3 .minus');
// let sum = document.querySelector('.container .row .col-sm-3 .sum');
// let dot = document.querySelector('.container .row .col-sm-3 .dot');

// dot.onclick = () => {
//   if (output.value == 0){
//     output.value = ""
//     output.value = ( output.value + dot.value );
//     truValue = (truValue + dot.value)
//    }  
//    else{
//     output.value = ( output.value + dot.value );
//     truValue = (truValue + dot.value)
//    }
// }
// num0.onclick = () => {
//   if (output.value == 0){
//     output.value = ""
//     output.value = ( output.value + num0.value );
//     truValue = (truValue + num0.value)
//    }  
//    else{
//     output.value = ( output.value + num0.value );
//     truValue = (truValue + num0.value)
//    }
// }
// num1.onclick = () => {
//   Number(num1.value)
//   if (output.value == 0){
//     output.value = ""
//     output.value = ( output.value + num1.value );
//     truValue = (truValue + num1.value)
//    }  
//    else{
//     output.value = ( output.value + num1.value );
//     truValue = (truValue + num1.value)
//    }
// }
// num2.onclick = () => {
//   if (output.value == 0){
//     output.value = ""
//     output.value = ( output.value + num2.value );
//     truValue = (truValue + num2.value)
//    }  
//    else{
//     output.value = ( output.value + num2.value );
//     truValue = (truValue + num2.value)
//    }
// }
// num3.onclick = () => {
//   if (output.value == 0){
//     output.value = ""
//     output.value = ( output.value + num3.value );
//     truValue = (truValue + num3.value)
//    }  
//    else{
//     output.value = ( output.value + num3.value );
//     truValue = (truValue + num3.value)
//    }
// }
// num4.onclick = () => {
//   if (output.value == 0){
//     output.value = ""
//     output.value = ( output.value + num4.value );
//     truValue = (truValue + num4.value)
//    }  
//    else{
//     output.value = ( output.value + num4.value );
//     truValue = (truValue + num4.value)
//    }
// }
// num5.onclick = () => {
//   if (output.value == 0){
//     output.value = ""
//     output.value = ( output.value + num5.value );
//     truValue = (truValue + num5.value)
//    }  
//    else{
//     output.value = ( output.value + num5.value );
//     truValue = (truValue + num5.value)
//    }
// }
// num6.onclick = () => {
//   if (output.value == 0){
//     output.value = ""
//     output.value = ( output.value + num6.value );
//     truValue = (truValue + num6.value)
//    }  
//    else{
//     output.value = ( output.value + num6.value );
//     truValue = (truValue + num6.value)
//    }
// }
// num7.onclick = () => {
//   if (output.value == 0){
//     output.value = ""
//     output.value = ( output.value + num7.value );
//     truValue = (truValue + num7.value)
//    }  
//    else{
//     output.value =""
//     output.value = ( output.value + num7.value );
//     truValue = (truValue + num7.value)
//    }
// }
// num8.onclick = () => {
//   if (output.value == 0){
//     output.value = ""
//     output.value = ( output.value + num8.value );
//     truValue = (truValue + num8.value)
//    }  
//    else{
//     output.value = ( output.value + num8.value );
//     truValue = (truValue + num8.value)
//    }
// }
// num9.onclick = () => {
//   if (output.value == 0){
//     output.value = ""
//     output.value = ( output.value + num9.value );
//     truValue = (truValue + num9.value)
//    }  
//    else{
//     output.value = ( output.value + num9.value );
//     truValue = (truValue + num9.value)
//    }
  
// }
// mult.onclick = () => {
//   output.value = 0;
//   truValue = (truValue + mult.value );
// }
// minus.onclick = () => {
//   output.value = 0;
//   truValue = (truValue + minus.value );
// }
// division.onclick = () => {
//   output.value = 0;
//   truValue = (truValue + division.value );
// }
// sum.onclick = () => {
//   output.value = 0;
// (truValue) = (truValue + sum.value);
// }

// ce.onclick = () => {
//   output.value=(output.value.substring(0, output.value.length-1));
//   truValue=(truValue.substring(0, truValue.length-1));

// }

// c.onclick = () => {
//   output.value=0;
//   truValue = 0;
// }
// res.onclick = () => {
//   output.value =  eval(truValue);

// }
// let truValue = 0;


var calc = $('.container');
var calcDisplay = calc.find('.output');
var calcKeys = calc.find('.key');
var calcButton = calc.find('.num');
var operator = calc.find('.operators');
var calcC = calc.find('.c');
var calcRes = calc.find('.res');
var calcSpace = calc.find('.ce');
let display = calcDisplay.value
let operatorsArr = [];
let a = 0;
let b = calcDisplay.value

calcKeys.each(function () {
  var current = $(this).attr('value');
  $(this).text(current);
});
calcButton.on('click', function () {
calcDisplay.val( calcDisplay.val() + $(this).attr('value') );
});
calcC.on('click', function () {
  calcDisplay.val('');
  a = 0;
  b = 0; 
  operatorsArr = []
});
calcRes.on('click', function () {
  // if (operatorsArr[0] == "+"){
  //   b = (calcDisplay.val()*1 + a*1)
  // }
  // else if  (operatorsArr[0] == "-"){
  //   b = ((calcDisplay.val()*1) - (a*1))
  //   b*=-1
  // }
  // else if (operatorsArr[0] == "*"){
  //   b = (calcDisplay.val()*(a*1))
  // }
  // else {
  //   b = (a/calcDisplay.val())
  // }
  // console.log(calcDisplay.val(), operatorsArr[0], a , b)
  // calcDisplay.val(b)
  // operatorsArr.pop()
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
    a = calcDisplay.val();
    calcDisplay.val('')
    operatorsArr.push($(this).attr('value'))
});
