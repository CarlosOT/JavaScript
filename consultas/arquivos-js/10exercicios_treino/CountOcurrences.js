//8) Construa uma função que verifica quantos A's  (caixa alta e baixa) existem em uma palavra.

function countOcurrences(string){
  var counter1 = (string.match(/A/g) || []).length;
  var counter2 = (string.match(/a/g) || []).length;
  stringView = `Essa cadeia de caracteres tem ${counter1} letras "A" e ${counter2} letras "a".`
  return alert(stringView);
}

