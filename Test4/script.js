let myStr = prompt("Введите строку","JavaScript_is_awesome")

console.log(myStr)

function toCamelCase(str){
	str = str.toLowerCase();
	let newArr = [];
	let arr = str.split("_");
		for (el of arr){
			if (el === arr[0]){ 
			newArr.push(el)
				continue
				} 
			else newStr = el[0].toUpperCase() + el.slice(1);
			newArr.push(newStr);
	}
	result = newArr.join("");
	console.log(result)
}


toCamelCase(myStr)