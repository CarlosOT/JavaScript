//2) Receba uma palavra e determine se ela é um palindrome.

function Palindrome(palavra){
  var splitString = palavra.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  if (joinArray === palavra){
    return alert("É palidrome");
  }else{
    return alert("Não é palidrome");
  }
}
