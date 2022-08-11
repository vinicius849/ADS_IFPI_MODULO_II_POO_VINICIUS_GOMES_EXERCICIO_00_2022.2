/* Escreva um programa que leia um texto pelo teclado e remova todas as suas vogais
acentuadas por não acentuadas. Exiba a string resultante. */

const letra: string = 'a';
console.log('Considerando o teclado alfanumérico da Língua Portuguesa, digite aqui uma palavra: ', letra);


// Raciocínio da questão - Iremos utilizar o método da escolha
if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u' || letra === 'á' || letra === 'é' || letra === 'í' || letra === 'ó' || letra === 'ú' || letra === 'A' || letra === 'E' || letra === 'I' || letra === 'O' || letra === 'U' || letra === 'Á' || letra === 'É' || letra === 'Í' || letra === 'Ó' || letra === 'Ú') {
    console.log('Usando o método do relacional lógico ou ou é vogal!!');
}else {
    console.log('Não é vogal!! Pode ser consoante ou qualquer outro tipo de caractere alfanumérico.');
}

// Fim da questão
console.log('A string resultante ficará válida para a questão. No caso, o tipo texto a');