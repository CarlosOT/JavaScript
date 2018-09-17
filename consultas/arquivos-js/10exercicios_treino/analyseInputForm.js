/*
6) Construa um formulário que possua os campos nome, idade, altura e peso.
Se nesta página for cadastrado um nome diferentes de vázio, uma idade acima de 18 anos e um peso abaixo de 90kg,
printe na console a palavra OK, caso contrário printe na console a palavra NOK.
*/

function analyseForm(){
  var nome = document.getElementById('nome').value;
  var idade = document.getElementById('idade').value;
  var altura = document.getElementById('altura').value;
  var peso = document.getElementById('peso').value;
  if(nome.length != 0 && idade > 18 && peso < 90){
    alert("OK");
  }else{
    alert("NOK")
  }
}

