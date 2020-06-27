let output = document.querySelector('.container .col-md-12 .output'); 
let num1 = document.querySelector('.container .row .col-md-3 .num1'); 
let num2= document.querySelector('.container .row .col-md-3 .num2');
let num3 = document.querySelector('.container .row .col-md-3 .num3');
let num4 = document.querySelector('.container .row .col-md-3 .num4');
let num5 = document.querySelector('.container .row .col-md-3 .num5');
let num6 = document.querySelector('.container .row .col-md-3 .num6');
let num7 = document.querySelector('.container .row .col-md-3 .num7');
let num8 = document.querySelector('.container .row .col-md-3 .num8');
let num9 = document.querySelector('.container .row .col-md-3 .num9');
let num0 = document.querySelector('.container .row .col-md-6 .num0');
let res = document.querySelector('.container .row .col-md-3 .res');
let c = document.querySelector('.container .row .col-md-3 .c');
let ce = document.querySelector('.container .row .col-md-3 .ce');
let division = document.querySelector('.container .row .col-md-3 .division');
let mult = document.querySelector('.container .row .col-md-3 .mult');
let minus = document.querySelector('.container .row .col-md-3 .minus');
let sum = document.querySelector('.container .row .col-md-3 .sum');
let dot = document.querySelector('.container .row .col-md-3 .dot');

dot.onclick = () => {
  output.value = ( output.value + dot.value );
}
num0.onclick = () => {
  output.value = ( output.value + num0.value );
}
num1.onclick = () => {
  output.value = ( output.value + num1.value );
}
num2.onclick = () => {
  output.value = ( output.value + num2.value );
}
num3.onclick = () => {
  output.value = ( output.value + num3.value );
}
num4.onclick = () => {
  output.value = ( output.value + num4.value );
}
num5.onclick = () => {
  output.value = ( output.value + num5.value );
}
num6.onclick = () => {
  output.value = ( output.value + num6.value );
}
num7.onclick = () => {
  output.value = ( output.value + num7.value );
}
num8.onclick = () => {
  output.value = ( output.value + num8.value );
}
num9.onclick = () => {
  output.value = ( output.value + num9.value );
}
mult.onclick = () => {
  output.value = ( output.value + mult.value );
}
minus.onclick = () => {
  output.value = ( output.value + minus.value );
}
division.onclick = () => {
  output.value = ( output.value + division.value );
}
sum.onclick = () => {
  output.value = ( output.value + sum.value );
}

ce.onclick = () => {
  output.value=(output.value.substring(0, output.value.length-1));
}

c.onclick = () => {
  output.value=""
}
res.onclick = () => {
  output.value = eval(output.value);
}
