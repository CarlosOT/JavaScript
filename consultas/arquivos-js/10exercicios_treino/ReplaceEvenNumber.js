//7) Construa uma função que substitua todos os números pares de um arranjo pelo valor 1.**
function ReplaceEvenNumber(array){
  for(i = 0; i < array.length; i++){
    alert(array);
    var checkNumber = array[i];
    alert(checkNumber);
    if(checkNumber % 2 == 0){
      alert('É par')
      array[i] = 1;
      alert(array);
    }else{
      alert('é impar')
    }
    }
    return alert(array);
}

