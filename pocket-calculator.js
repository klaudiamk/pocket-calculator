let p = document.getElementById("display");
let str = ""
p.innerHTML = 0;

function zero() {
  let p = document.getElementById("display");
  str += "0";
  p.innerHTML = str;
}
function one() {
let p = document.getElementById("display");
str += "1";
p.innerHTML = str;
}
function two() {
  let p = document.getElementById("display");
  str += "2";
  p.innerHTML = str;
}
function three() {
  let p = document.getElementById("display");
  str += "3";
  p.innerHTML = str;
}
function four() {
  let p = document.getElementById("display");
  str += "4";
  p.innerHTML = str;
}
function five() {
  let p = document.getElementById("display");
  str += "5";
  p.innerHTML = str;
}
function six() {
  let p = document.getElementById("display");
  str += "6";
  p.innerHTML = str;
}
function seven() {
  let p = document.getElementById("display");
  str += "7";
  p.innerHTML = str;
}
function eight() {
  let p = document.getElementById("display");
  str += "8";
  p.innerHTML = str;
}
function nine() {
  let p = document.getElementById("display");
  str += "9";
  p.innerHTML = str;
}
function decimal() {
  let p = document.getElementById("display");
  str += ".";
  p.innerHTML = str;
}
function equals() {
  let p = document.getElementById("display");
  p.innerHTML = str;
}
function division() {
  let p = document.getElementById("display");
  str += "/";
  p.innerHTML = str;
}
function multiplication() {
  let p = document.getElementById("display");
  str += "*";
  p.innerHTML = str;
}
function subtraction() {
  let p = document.getElementById("display");
  str += "-";
  p.innerHTML = str;
}
function addition() {
  let p = document.getElementById("display");
  str += "+";
  p.innerHTML = str;
}
function percent() {
  let p = document.getElementById("display");
  str += "%";
  p.innerHTML = str;
}
function plusMinus() {
  let p = document.getElementById("display");
  str += "-";
  p.innerHTML = str;
}
function clear() {
  let p = document.getElementById("display");
  str += "";
  p.innerHTML = str;
}
switch(operator)
{
	//add
	case 0:
	out.value = num1+num2;
  	break;
  	//subtract
	case 1: out.value = num1-num2;
	break;
	//multiply
	case 2: out.value = num1*num2;
	break;
	//divide
	case 3: out.value = (num1/num2).toFixed(1);//only one digit after decimal place
	break;
	default:
  	break;
}
