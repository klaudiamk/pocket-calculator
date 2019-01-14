function solve() {
  let x = document.getElementById("display").value
  let y = eval(x);

 document.getElementById("display").value = y

/*error message*/

 if (isNaN(y) ) {
  document.getElementById("display").value = "Error";
 }

/*thousands place commas*/

if (y > 999){

  document.getElementById("display").value = y.toLocaleString();

}

/*scientific notation */

if (y > 999999999){

    document.getElementById("display").value = y.toExponential();

}

}
