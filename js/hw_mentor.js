// const word = 'Anna';
// const normWord = word.toLowerCase();
// Розділити в масив
// const arrayWord =normWord.split('');
// // Реверснути маси
// const reversArray =arrayWord.reverse();
// // обєднати реверсний масив
// const reversWord =reversArray.join('');
// console.log(reversWord);

// Записати в функцію і в одну лінію
const isWordPolinom = word =>
[...word.toLowerCase()].reverse().join('')===word.toLowerCase()
 ? `Word ${word} is polinom`
 : `Word ${word} is NOT polinom`;

console.log(isWordPolinom('Anna'));