
var n = +prompt("Введите день", 1);
/*if (n==1){
	alert("Понедельник")
}
else if (n == 2) {
alert("Вторник")
}
else if (n == 3) {
	alert("Среда")
}
else if (n == 4) {
	alert("Четверг")
}
else if (n == 5) {
	alert("Пятница")
}
else if (n == 6) {
	alert("Суббота")
}
else if (n == 7) {
	alert("Воскресенье")
}
else {
	alert("Некоректное число, коректное от 1 до 7")
}*/
switch (n) {
	case 1 :
	  alert("Понедельник");
	  break;
	case 2 :
	  alert("Вторник")
	  break;
	case 3 :
	  alert("Среда")
	  break;
	case 4 :
	  alert("Четверг")
	  break;
	case 5 :
	  alert("Пятница")
	  break;
	case 6 :
	  alert("Суббота")
	  break;
	case 7 :
	  alert("Воскресенье")
	  break;
	case (n):
	  alert("Incorrect, correct from 1 to 7")

}