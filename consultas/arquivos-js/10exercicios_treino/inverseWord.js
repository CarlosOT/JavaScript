//10) Construa uma função que inverta uma palavra e retorne esta palavra invertida.

function inverseWord(){
  var inverse = document.getElementById('palavra').value;
  return alert(inverse.split("").reverse().join(""));
}
