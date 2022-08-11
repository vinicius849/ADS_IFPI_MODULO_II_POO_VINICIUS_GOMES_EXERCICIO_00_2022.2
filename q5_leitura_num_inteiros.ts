/* Escreva um programa que imprima os números inteiros entre dois valores lidos. */

// Começo da questão
console.log('Desejo imprimir dois valores quaisquer.');
console.log('Escreva aqui um número inteiro de 1 a 100.');

// Raciocínio da questão com função contador
let num_1: number = 98;
let calculo: number = num_1 / 100;
console.log('Sem atribuir uma string a um number: ', num_1)

// Estrutura de Repetição Enquanto
let contador: number = 1;
while(calculo <= 100) {
    console.log('Irá imprimir números inteiros entre dois valores lidos.');
    contador++;
}

console.log('O resultado da correpondência entre 1 e 100 valerá: ', contador);

