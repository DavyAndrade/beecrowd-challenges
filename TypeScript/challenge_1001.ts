/* 
Leia 2 valores inteiros e armazene-os nas variáveis A e B. Efetue a soma de A e B atribuindo o seu resultado na variável X. Imprima X conforme exemplo apresentado abaixo. Não apresente mensagem alguma além daquilo que está sendo especificado e não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá "Presentation Error".
Entrada

A entrada contém 2 valores inteiros.
Saída

Imprima a mensagem "X = " (letra X maiúscula) seguido pelo valor da variável X e pelo final de linha. Cuide para que tenha um espaço antes e depois do sinal de igualdade, conforme o exemplo abaixo.
Exemplos de Entrada 	Exemplos de Saída

10                      X = 19
9

-10                     X = -6
4

15                      X = 8
-7
*/

function main() {
  // Read 'A' value
  let a: number = Number(prompt("Insert the first value:"));

  // Treatment of "A" value
  if (Number.isNaN(a)) {
    console.log("Insert a valid value!");
    return;
  }

  // Read 'B' value
  let b: number = Number(prompt("Insert the second value:"));

  // Treatment of "B" value
  if (Number.isNaN(b)) {
    console.log("Insert a valid value!");
    return;
  }

  // Calling sum function with "X" var
  let x: number = sum(a, b);

  // Printing de "X" value
  console.log("X = " + x);
}

// Sum function
function sum(x: number, y: number) {
  return x + y;
}

// init main function
main();
