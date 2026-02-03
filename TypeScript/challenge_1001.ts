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

import * as fs from "fs"; // import do FileSystem

const input: string = fs.readFileSync("/dev/stdin", "utf-8"); // leitura de um arquivo de forma síncrona
const lines: string[] = input.split("\n"); // divisão da string em array

// main function
function main() {
  const a: number = parseInt(lines[0]); // retorna o primeiro elemento do array e converte para number
  const b: number = parseInt(lines[1]); // retorna o segundo elemento do array e converte para number

  // verificando se as entradas são números
  if (isNaN(a) || isNaN(b)) {
    console.log("Valores inválidos!");
    return;
  }

  // inicializando a var "X" com a soma de a + b
  const x: number = a + b;

  // exibição do valor de X
  console.log("X = " + x);
}

// inicializando a main
main();
