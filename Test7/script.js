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
console.log(arr)
console.log(arr.length)
let cloneArr = arr.slice();
console.log(cloneArr.filter(isPrime))