/*
3) Receba uma palavra e determine se os três primeiros caracteres desta palavra são iguais aos três últimos.
(palavra deve terno mínimo 6 caracteres. Se tiver menos retorne "Palavra Inválida".)
*/

function analyseWord(word){
  lengthWord = word.length
  if (lengthWord < 6){
    return 'Palavra Inválida'
  }else{
    first3caracteres = word.slice(0,3);
    last3caracteres = word.slice(lengthWord - 3, lengthWord)
    if (first3caracteres === last3caracteres){
      return 'Os três primeiros caracteres são iguais aos três últimos'
    }else{
      return 'Os três primeiros caracteres não são iguais aos três últimos'
    }
}
}

