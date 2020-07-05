let arr = [];
function arrIncluder(min, max){
  for (let i=min; i<= max; i++) {
    arr.push(i);
  }
}
function isPrime(num){
  if (num%3 == 1) {
    return true 
  }
  else {
    return false
  }
} 
arrIncluder(1,20)
let cloneArr = arr.slice();
console.log(arr)                                  // Default array
console.log(cloneArr.filter(isPrime))             // Only prime number array