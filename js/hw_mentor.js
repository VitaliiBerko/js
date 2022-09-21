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


// let arr = [23,56,4,78,5,63,45,210,56];
// // arr = deleteElement(arr, 56)
// console.log(arr); //[23, 4, 78, 5, 63, 45, 210]

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
const data = [1, 2, 3, 4, 5, 6, 7];
function chunkArray(data, chunk) {
    const newArr = [];
    data.forEach((number, index, arr) => {
        newArr.push(arr.splice(0, chunk));        
    });

    return newArr.concat([data]);
};


// chunkArray(data, 2);

console.log(chunkArray(data, 2)); // [[1, 2], [3, 4], [5, 6], [7]]
// console.log(data);
// console.log(chunkArray(data, 3)); // [[1, 2, 3], [4, 5, 6], [7]]





// 19/09/2022
// function greet() {
//     console.log(1);
// }

// greet();


// const sara = {
//     nickName: "Sara",
//     age: 25,
//     showInfo() {
//         console.log(this.nickName, this.age)
//     }
// };

// const alex = {
//     nickName: "Alex",
//     age: 40,
   
// }

// sara.showInfo.call(alex, 2);
// sara.showInfo.apply(alex, [1, 2]);




// function greet(showInfo) {
//     console.log(`${showInfo}`)
// }
// greet();


// const sara = {
//     nickName: "Sara",
//     age: 25,
    
//     showNickName() {
//         console.log(this.nickName);
//     }
    
// };

// const alex = {
//     nickName: "Alex",
//     age: 40,
   
// };



// function showInfo(greet) {
//     return `${this.nickName} ${this.age} років. ${greet}`
// };

// function makeMassage (clb) {
//     console.log(`Обробляємо заявку від ${clb()}`)
// }

// // makeMassage(showInfo.bind(alex));

// sara.showNickName.call(alex);
// console.log(showInfo.call(sara, "Вітаю"));
// makeMassage(showInfo.bind(sara, 'Congratilation'));



// const customer = {
//     firstName: "Jacob",
//     lastName: "Mercer",
//     getFullName() {
//       return `${this.firstName} ${this.lastName}`;
//     },
//   };
  
//   function makeMessage(callback) {
//     // callback() - це виклик методу getFullName без об'єкта
//     console.log(`Обробляємо заявку від ${callback()}.`);
//   }
  
//   makeMessage(customer.getFullName.bind(customer)); 

// class User {
//     constructor({name, email}) {
//         this.name = name;
//         this.email =email;
//     }
// };

// const bob = new User({name:'Bob', email:'bob@mail.com'});

// console.log(bob);

// proto

// const objA = {
//     a: 1,
// };
// const objB = Object.create(objA);

// objB.b = 2;

// const objC = Object.create(objB);

// objC.c = 3;


// console.log(objA);
// console.log(objB);
// console.log(objC);


// console.log(objC.a);

// const objB ={
//     b: 2,
// };

// const objC = {
//     c:3,
// };


// const User = function({name, email} ={}) {
//     this.email = email;
//     this.name = name;
// };

// User.prototype.changeName = function(newName) {
//     this.name = newName;
// }

// const bob = new User({name: 'Bob', email: 'bob@mail.com'});

// console.log(bob);

// bob.changeName('Alex');

// console.log(bob);

// console.log(Math);



