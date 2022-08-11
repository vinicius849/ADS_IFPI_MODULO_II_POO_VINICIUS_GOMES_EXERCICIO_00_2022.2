/* Faça uma função que recebe por parâmetro uma medida de tempo expressa 
em milissegundos e retorna esse tempo em dias, horas, minutos e segundos 
no formato: "Dias, hh:mm:ss". */

let milissegundos: number = 0.001; // 10 a menos 3 é a quantidade em milissegundos, isto é, um milésimo de segundo.
console.log('Digite aqui um parâmetro para transformação de medida de tempo para segundos: ', milissegundos);

// Raciocínio da questão ( a conversão de valores)
let segundos: number = (milissegundos / -1000);
let resto_1: number = (milissegundos % segundos);
let minutos: number = (resto_1 * 60);
let resto_2: number = (minutos * 60);
let horas: number = (resto_2 / 60);
let resto_3: number = (horas * 24);
let dias: number = (horas % 24);

// Cálculo final da conversão da Medida Tempo
let valor_final: number = (dias + horas + minutos + segundos + milissegundos);
console.log('Com isso, feita a transformação final de milissegundos para os determinados valores, teremos: ', valor_final);

// HH:MM:SS - Formato da função concedida.