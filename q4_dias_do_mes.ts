/* Escreva um programa que apresente o mês por extenso, a 
partir de um número digitado pelo usuário(entre 1 e 12) e a
quantidade de dias do mês. */

// Início da questão
console.log('Digite aqui por extenso um número qualquer que indique o mês: ');

// Raciocínio Lógico
var contador: string = ('um' || 'dois' || 'tres' || 'quatro' || 'cinco' || 'seis' || 'sete' || 'oito' ||'nove' || 'dez' || 'onze' || 'doze' || '1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9'|| '10' || '11' || '12');

// Estruturas de Seleção
let quant_mes: number = 8;
console.log(quant_mes);

// Raciocínio da questão em análise com Estruturas de Seleção
if (quant_mes <= 1 && quant_mes <= 12) {
    console.log('O usuário indica corretamente o mês do ano.');
}else if (quant_mes != 1 && quant_mes != 12) {
    console.log('O usuário indicará erradamente o mês do ano.');
}else {
    console.log('Valor inválido.');
}

// Fim da questão
console.log('Com isso, de acordo com a questão, o usuário estará satisfeito.')



