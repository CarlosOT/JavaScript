//4) Construa uma função que recebe dois arranjos e devolve a União destes arranjos.

function unionArrays(){
  var a1 = document.getElementById('array1').value;
  var myArray = new Array(a1);
  var a2 = document.getElementById('array2').value;
  var myArray2 = new Array(a2);
  myArray = myArray.concat(myArray2);
  return alert(myArray);
}
