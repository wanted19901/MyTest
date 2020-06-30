let arr = [];
function arrIncluder(min, max){
  for (let i=min; i<= max ;i++) {
    arr.push(min);
    min++;
   }
}
function isPrime(num){
if (num%3==1 ) {
  return true 
   }
 else {
  return false;
   }
} 
arrIncluder(4,16)
let cloneArr = arr.slice();
console.log(cloneArr.filter(isPrime))