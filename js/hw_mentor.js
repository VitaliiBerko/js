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

// const isWordPolinom = word =>
// [...word.toLowerCase()].reverse().join('')===word.toLowerCase()
//  ? `Word ${word} is polinom`
//  : `Word ${word} is NOT polinom`;

// console.log(isWordPolinom('Anna'));


// Потрібно написати функцію, яка приймає 1 параметр key і буде перевіряти
// чи має об'єкт  такий ключ - поверне true, інакше false

// const obj = {
//   name: 'Jhon',
//   car:  'Audi',
//   carColor: 'White'
// }
// // console.log(obj);
// // console.log([]);
// const checkKey = key=>
// //    return  Object.keys(obj)
// //         .includes(key);
//     // return Boolean(obj[key]);
//      key in obj;


// console.log(checkKey('jkhgkjh'));

// Напишіть код, щоб видалити всі елементи в заданому масиві
// Функція `deleteElement()` видаляє всі входження елемента із заданого масиву.
// let arr = [23,56,4,78,5,63,45,210,56];
// arr = deleteElement(arr, 56)
// console.log(arr); //[23, 4, 78, 5, 63, 45, 210]


let arr = [23,56,4,78,5,63,45,210,56];
// arr = deleteElement(arr, 56)
console.log(arr); //[23, 4, 78, 5, 63, 45, 210]

// function deleteElement(arr, removeNumber, addNumber) {
//     arr.forEach((number, index) => {
//         if (number === removeNumber) {
//             arr.splice(index, 1, addNumber);
//         }
                
//     });

//     // return [...arr].
// }

// deleteElement(arr, 56, 7);

// console.log(arr);
// function deleteElement(arr, removeNumber) {
//     return arr.filter(number => number !== removeNumber);
// }

// // deleteElement(arr, 56);

// // console.log(arr);

// console.log(deleteElement(arr, 56))



// task
// Напишіть метод, який розбиває масив на частини визначеного розміру
// const data = [1, 2, 3, 4, 5, 6, 7];
// console.log(chunkArray(data, 2)) // [[1, 2], [3, 4], [5, 6], [7]]
// console.log(chunkArray(data, 3)) // [[1, 2, 3], [4, 5, 6], [7]]
