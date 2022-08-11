/* Escreva um programa que leia uma sequência de números inteiros
terminada por -1 e imprima na tela a soma e a média aritmética e o 
desvio padrão destes números. Obs.: o valor -1 é somente um terminador 
e não deve ser considerado nos cálculos. */

// Começo da questão
let numeros_int: number = (-10 || -9 || -8 || -7 || -6 || -5 || -4 || -3 || -2 || -1);
console.log('Eis uma sequência de números que varia de -10 a -1: ', numeros_int);

// Raciocínio da questão, isto é, a soma dos números inteiros
let soma_valores: number = (-10 -9 -8 -7 -6 -5 -4 -3 -2 -1);
console.log(soma_valores);

// Raciocínio da questão, isto é, a média aritmética dos números inteiros
let media_valores: number = (soma_valores / 10)
console.log('Logo, minha média aritmética valerá: ', media_valores)

// Cálculo do desvio padrão - fórmula Estatística
let desvio_padrao = (numeros_int + media_valores) / 2
console.log('Logo, levando em conta o terminador de pontos e o quadrado da distância entre estes dois pontos, temos: ', desvio_padrao)
