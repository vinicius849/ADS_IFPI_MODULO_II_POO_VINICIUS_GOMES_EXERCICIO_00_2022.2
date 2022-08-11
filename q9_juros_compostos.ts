/* Escreva uma função que dados 2 valores reais v e t. Onde v é um valor em
R$ e t é a taxa de juros em %. Retorne um Array de 12 posições meses representando
a taxa aplicada como juros compostos ao valor v mês a mês. */

// Exempo:. v = R$1000.00 e t = 1%. Retornar: R$1010.00 - R$1020,10 - R$1030,30 - ... - R$1126.82

console.log('Aplicar Juros Compostos para 2 valores reais.')
// Adaptando a questão com os dados valores
let v: number = 1000.00; // Valor real
let t: number = 0.1; // Valor real

// Cálculo de Juros Compostos
let juros_compostos = (v * ((v + t) ** 12));
console.log(juros_compostos);

const meses = new Array(juros_compostos);
for (var i = 1; i <= 12; i++) {
    console.log('Mostrar-se os juros compostos aplicados em um ano, sem retornar um Array de 12 posições.');
}
console.log(meses);

for(var i = 1; i <= 12; i--) {
    console.log('Mostrar-se os juros aplicados em um ano também, só que desta vez, retornando um Array de 12 posições.');
}

// Fim da questão
console.log('A taxa de aplicação está concluída.');