console.log("Oi mundo!");

var nome = "Eliane";
var idade = 15;
var souMorena = false;
var nada;

console.log(nome);
console.log(idade);
console.log(souMorena);
console.log(nada);


/*Coerção*/
var str = "O valor é ";
var num = 15;
console.log(str + num);

/*Mutação*/
var valor = 15;
valor = "oi";
console.log(valor);

/*Alert*/
alert("Não entre em pânico.") /**usar apenas em fazes de teste */

/**Prompt */
var idadeSua = prompt("Digeite sua idade")
alert(idadeSua)

/**Operadores */
var num = 4 * 5 + 3 - (2 + 2) / 2;
alert(num)

var num2 = 2 ** 3;
alert(num2)

var num3 = 3 % 2;
alert(num3)

/**Booleano */

var bool1 = true;
var bool2 = false;

alert(bool1 || bool2)
alert(bool1 && bool2)

num1 = 100;
num2 = 2;


if (num1 > num2) {
    alert(num1 + " > " + num2)
} else {
    if (num1 < num2) {
        alert(num1 + " < " + num2)
    } else {
        alert(num1 + " = " + num2)
    }
}

if (num1 < num2) {
    alert("NOK")
} else if (num1 > num2) {
    alert("OK")
}

var nome = prompt("Digite seu nome")

switch (nome) {

    case nome === "Alexandre":
        alert("Alexandre");
        break;
    case nome === "Eliane":
        alert("Eliane");
        break;
    default:
        alert("NOK");


}

/*Funções*****/

function soma(numP, numS) {

    return numP + numS;

}

num1 = 10;
num2 = 10;

alert(soma(num1, num2));

/*Array*/

var numArr = [1, 2, 3, 4, 5];
var numArr2 = new Array(1, 2, 3, 4, 5);

for (i in numArr) {

    console.log(i);

}

/*Métodos para array***/
console.log("******************************");
var numArr3 = [1, 2, 3, 4, 5];
numArr3.pop();
for (i in numArr3) {

    console.log(i);

}
console.log("******************************");

if (numArr3.indexOf("2") == -1) {
    alert("valor existe");
} else {
    alert("valor não existe");
}

/*laços************************************/
for (i = 0; i < 10; i++) {

    console.log(i);

}

j = 0;
while (j < 10) {

    console.log(j);
    j++;

}

var nome = "Alexandre";

console.log(nome[0]);

for (i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}