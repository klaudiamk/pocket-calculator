// let p = document.getElementById("display");
let str = "";
let val = 0;
let str2 = "";
let c = 1;
let decimalClicked = 0;
// p.innerHTML = 0;

function one() {
  let p = document.getElementById("display");
  str += "1";
  if (str.length > 9) str = str.substring(0,9);
  p.innerHTML = str;
}
function two() {
  let p = document.getElementById("display");
  str += "2";
  if (str.length > 9) str = str.substring(0,9);
  p.innerHTML = str;
}
function three() {
  let p = document.getElementById("display");
  str += "3";
  if (str.length > 9) str = str.substring(0,9);
  p.innerHTML = str;
}
function four() {
  let p = document.getElementById("display");
  str += "4";
  if (str.length > 9) str = str.substring(0,9);
  p.innerHTML = str;
}
function five() {
  let p = document.getElementById("display");
  str += "5";
  if (str.length > 9) str = str.substring(0,9);
  p.innerHTML = str;
}
function six() {
  let p = document.getElementById("display");
  str += "6";
  if (str.length > 9) str = str.substring(0,9);
  p.innerHTML = str;
}
function seven() {
  let p = document.getElementById("display");
  str += "7";
  if (str.length > 9) str = str.substring(0,9);
  p.innerHTML = str;
}
function eight() {
  let p = document.getElementById("display");
  str += "8";
  if (str.length > 9) str = str.substring(0,9);
  p.innerHTML = str;
}
function nine() {
  let p = document.getElementById("display");
  str += "9";
  if (str.length > 9) str = str.substring(0,9);
  p.innerHTML = str;
}
function zero() {
  let p = document.getElementById("display");
  str += "0";
  p.innerHTML = str;
}

//if(decInserted == false) {
//  let commaInput = Number(document.calc.display.value.split(",").join("")).toLocaleString();
//  document.calc.display.value = commaInput;
//}

function addition() {
  let p = document.getElementById("display");
  if (c == 1) {
    str2 = str;
    c++;
    str = "";
  }
  str2 += " + ";
  p.innerHTML = 0;
}
function subtraction() {
  let p = document.getElementById("display");
  if (c == 1) {
    str2 = str;
    c++;
    str = "";
  }
  str2 += " - ";
  p.innerHTML = 0;
}
function multiplication() {
  let p = document.getElementById("display");
  if (c == 1) {
    str2 = str;
    c++;
    str = "";
  }
  str2 += " * ";
  p.innerHTML = 0;
}
function division() {
  let p = document.getElementById("display");
  if (c == 1) {
    str2 = str;
    c++;
    str = "";
  }
  str2 += " / ";
  p.innerHTML = 0;
}
function percentage() {
  let p = document.getElementById("display");
  str = Number(str);
  str = str*(.01);
  p.innerHTML = str;

}
function negation() {
  let p = document.getElementById("display");
  str2 += "-";
  p.innerHTML = str;
  val = 0 - val;
}
function decimal() {
  let p = document.getElementById("display");
  if (decimalClicked == 0) {
    str += ".";
    decimalClicked++;
   }
  //if (str.length > 2) str = str.substring(0,2); //doesn't show number before decimal point; only zero
  p.innerHTML = str;
}
function equals() {
  let p = document.getElementById("display");
  str = str2 + str;
  p.innerHTML = str;

var result = eval(str);
p.innerHTML = result;

if (result > 999999999 || result.length > 10) {
  var exponent = result.toPrecision(5);
  document.getElementById("display");
  p.innerHTML = exponent;
}

if (!isFinite(result)) {
  p.innerHTML = "Error";
}
}

function AC() {
  let p = document.getElementById("display");
  str = "";
  str2 = "";
  c = 1;
  p.innerHTML = "0";
}
