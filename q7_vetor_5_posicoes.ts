/* Escreva um programa que leia um vetor de inteiros de 5 posições e 
apresente-o na tela de forma crescente e decrescente. */

// Começo da intepretação da questão
console.log('Escreva um vetor (ou um array de valores) que ocupe 5 posições.')

var frutas = ['Maçã', 'Banana', 'Uva']; // Como se fossem 3 posições(um exemplo).
console.log(frutas.length);
// 3

// Agora se eu fosse acesar um Index do meu Array (Exemplo Prático)
var primeiro = frutas[0];
// Maçã
var segundo = frutas[1];
// Banana
var terceiro = frutas[2];
// Uva

// Raciocínio da questão
const numeros: string[] = ['4', '72', '21', '50', '12', '3'];
console.log(numeros);

// [0, 1, 2, 3, 4] = 5 posições igualmente o que se pede a questão.
var primeiro: string = numeros[4]; // Posição 0
// 4
var segundo: string = numeros[72]; // Posição 1
// 72
var terceiro: string = numeros[21]; // Posição 2
// 21
var quarto: string = numeros[50]; // Posição 3
// 50
var quinto: string = numeros[12]; // Posição 4
// 12
var sexto: string = numeros[3]; // Posição 5
// 3

// Exemplos
var tamanho = new ArrayBuffer(5);
if (tamanho.byteLength === 5) {
    console.log('Sim, ocupam-se 5 espaços.')
}else {
    console.log('Ah não, o tamanho não está certo!')
}

// Vetores e Strings, agora como eu coloco um Array dentro de uma String?
const vetor_a = new Array(tamanho);
for (var i = 0; i < 5; i++) {
    console.log('O programa irá ler 5 posições, ou seja, de 0 a 5.');
}
    console.log(vetor_a);
for (var i = 0; i < 5; i--) {
    console.log('O programa irá ler 5 posições, só que agora de forma decrescente.');
}

// Fim da questão
console.log('Programa realizado com sucesso!');
