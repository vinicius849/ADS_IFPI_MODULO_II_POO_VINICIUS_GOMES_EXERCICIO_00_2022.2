/* Escreva um programa para converter de real para bitcoin e exibir para
o usuário a resposta final. Considere até 8 casas decimais. */

let valor_bitcoin : number = 237.000
let valor_real : number = 155.87

// Raciocício da questão
console.log('Diga a quantidade de reais a serem convertidos para a tal moeda estrangeira bitcoin: ', valor_real)

// Cálculo numérico
let cotacao_bitcoin = valor_bitcoin * valor_real

// Fim da questão
console.log('A cotação bitcoin ou o valor bitcoin valerá em reais: ', cotacao_bitcoin, '%.8f')