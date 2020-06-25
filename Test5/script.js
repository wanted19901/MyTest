let numInput = document.querySelector('.login');
let chek = document.querySelector('.chek');
numInput.value = "А234КХ23"
let str = numInput.value
console.log(str)
let patern = /[АВЕКМНОРСТУХ]\d{3}[АВЕКМНОРСТУХ]{2}\d{2,3}/;
chek.onclick = () => {

    

}
console.log(patern.test(str))
var match =/[АВЕКМНОРСТУХ]\d{3}[АВЕКМНОРСТУХ]{2}\d{2,3}/.exec(str);
console.log(match);