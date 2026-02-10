/* 
A fórmula para calcular a área de uma circunferência é: area = π . raio2. Considerando para este problema que π = 3.14159:

- Efetue o cálculo da área, elevando o valor de raio ao quadrado e multiplicando por π.
Entrada

A entrada contém um valor de ponto flutuante (dupla precisão), no caso, a variável raio.
Saída

Apresentar a mensagem "A=" seguido pelo valor da variável area, conforme exemplo abaixo, com 4 casas após o ponto decimal. Utilize variáveis de dupla precisão (double). Como todos os problemas, não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá "Presentation Error".
Exemplos de Entrada 	Exemplos de Saída

2.00                    A=12.5664
100.64                  A=31819.3103
150.00                  A=70685.7750
*/

import { readFileSync } from "fs"; // importação da bilioteca filesystem

const input: string = readFileSync("/dev/stdin", "utf-8"); // constante de input
const pi: number = 3.14159; // constante do pi

// function main
function main(): void {
  const raio = parseFloat(input.trim()); // const do raio convertida para float (retirando os espaços em branco)

  // Verificando se a const raio é 'number'
  if (isNaN(raio)) {
    console.log("Insira um valor válido!");
    return;
  }

  const area = pi * Math.pow(raio, 2); // const da area com uso de Math

  console.log("A=" + area.toFixed(4)); // exibindo a área com limite de 4 números após a vírgula
}

main(); // chamada da main
