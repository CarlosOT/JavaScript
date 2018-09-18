//9) Construa uma função que recebe uma palavra e devolve quantas vogais existe nesta palavra.

function countVowels(palavra){
  var vowels = ["a","A","e","E","i","I","o","O","u","U"];
  var counter = 0;
  for(i = 0; i < palavra.length; i++){
    var char = palavra[i];
    if (vowels.includes(char)){
      counter += 1;
    }
  }
  if (counter > 1){
    return alert(`Essa palavra tem ${counter} vogais`);
  }else if (counter == 1){
    return alert(`Essa palavra tem uma vogal apenas`);
  }else{
    return alert(`Essa palavra não tem vogal`);
  }
}
