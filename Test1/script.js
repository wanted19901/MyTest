let btn_upper1=document.querySelector('.container .row .col-6 .upper1');
let btn_subtraction1=document.querySelector('.container .row .col-6 .subtraction1');
let btn_upper2=document.querySelector('.container .row .col-6 .upper2');
let btn_subtraction2=document.querySelector('.container .row .col-6 .subtraction2');
let input1_value=document.querySelector('.container .row .col-6 .input1');
let input2_value=document.querySelector('.container .row .col-6 .input2');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}
value1 = parseInt(input1_value.value,10)
value2 = parseInt(input2_value.value,10)

btn_upper1.onclick = () => { 
    value1 += getRandomInt(0,11); 
    input1_value.value=value1;
}

btn_subtraction1.onclick = () =>{
 value1 -=  getRandomInt(0,11);
 (value1 < 1) ? input1_value.value = value1 = 1 : input1_value.value=value1 ;
 
}

btn_upper2.onclick = () => { 
  value2 += getRandomInt(-1,-11); 
  (value2 < -1) ? input2_value.value = value2 = 0 : input2_value.value=value2 ;
  
}

btn_subtraction2.onclick = () =>{
 value2 -=  getRandomInt(-1,-11);
 (value2 < -1) ? input2_value.value = value2 = 0 : input2_value.value=value2 ;
 
}


$(function(){
 console.log("Window is load")
});
$(document).ready(function(){
  console.log('Document ready!');
});



