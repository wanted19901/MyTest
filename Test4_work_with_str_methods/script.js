 let myStr = prompt("Введите строку","JavaScript_is_awesome")
// function toCamelCase(str){
// str = str.toLowerCase();
// let newArr = [];
// let arr = str.split("_");
// for (el of arr){
//  if (el === arr[0]){ 
// 	newArr.push(el)
// 	continue
// 	} 
// 	else newStr = el[0].toUpperCase() + el.slice(1);
// 	newArr.push(newStr);
// 	}
// 	result = newArr.join("");
// }

toCamelCase(myStr)

function upFirts(item, arr){
	item = item.charAt(0).toUpperCase() + item.slice(1);
	arr.push(item);
}

function toCamelCase(str){
	let newArr = [];
	let arr = str
	.toLowerCase()
	.split("_"); 
arr.forEach(function(item, i ) {
	(i==0)?	newArr.push(item) : upFirts(item, newArr);
	result = newArr.join("");
  });
  console.log(result)
}
