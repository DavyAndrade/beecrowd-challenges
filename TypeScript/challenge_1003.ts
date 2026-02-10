/*
Leia dois valores inteiros, no caso para variáveis A e B. A seguir, calcule a soma entre elas e atribua à variável SOMA. A seguir escrever o valor desta variável.
Entrada

O arquivo de entrada contém 2 valores inteiros.
Saída

Imprima a mensagem "SOMA" com todas as letras maiúsculas, com um espaço em branco antes e depois da igualdade seguido pelo valor correspondente à soma de A e B. Como todos os problemas, não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá "Presentation Error".

Exemplos de Entrada 	Exemplos de Saída

30                      SOMA = 40
10

-30                     SOMA = -20
10

0                       SOMA = 0
0
*/

import { readFileSync } from "fs"; // importação da bilioteca filesystem

const input: string = readFileSync("/dev/stdin", "utf-8"); // const de input com uso de readfilesync
const lines: string[] = input.split("\n"); // split do input em diferentes posições do array

// função main
function main(): void {
  const num1: number = parseInt(lines[0]); // salvando num1 como a primeira linha lida e convertendo pra number
  const num2: number = parseInt(lines[1]); // salvando num2 como a segunda linha lida e convertendo pra number

  // verificando se num1 e/ou num2 são do tipo number
  if (isNaN(num1) || isNaN(num2)) {
    console.log("Insira valores válidos!");
    return;
  }

  const soma: number = num1 + num2; // const de soma

  console.log("SOMA = " + soma); // exibição da soma
}

main(); // chamada da função main
