let numInput = document.querySelector('.login');
let chek = document.querySelector('.chek');
numInput.value = "А234КХ23"
let str = numInput.value
let patern = /^[АВЕКМНОРСТУХ]\d{3}[АВЕКМНОРСТУХ]{2}\d{2,3}$/;
chek.onclick = () => {
   console.log(patern.test(numInput.value))
    
}
