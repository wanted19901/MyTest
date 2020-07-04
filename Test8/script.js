var obj = {
  salary: 30,
  age : 20,
  name : "John",
  date : 15
}
let sum = 0;
for (let key in obj) { 
  if ((typeof obj[key]) == "number"){
    obj[key]*=2;
    sum += obj[key] ;    
  }
}
console.log(sum) //Sum of numeric properties