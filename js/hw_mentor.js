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
// // Напишіть метод, який розбиває масив на частини визначеного розміру
// const data = [1, 2, 3, 4, 5, 6, 7];
// function chunkArray(data, chunk) {
//     const newArr = [];
//     // const arr= [];
//     [...data].forEach((number, index, arr) => {
//         [newArr.push(arr.splice(0, chunk)), ...arr]
//         // newArr.concat([arr]);   
//         // console.log(arr);   
//         return  data.length%chunk ===0
//         ? newArr.concat([arr])
//         : newArr.concat([data.slice(-(data.length%chunk))]);  
//         //  data.length%chunk ===0
//         // ? newArr.push(arr.splice(0, chunk))
//         // : newArr.concat([data.slice(-(data.length%chunk))])    
           
    //     if (data.length%chunk ===0) {

    //   return  newArr.push(arr.splice(0, chunk));
    //     }  
    
    // return  newArr.concat([data.slice(-(data.length%chunk))]);
    // // .concat(arr); 
    // }
    
    
//     })
//     // console.log(data.slice(-(data.length%chunk)));
//     // return data.length%chunk ===0
//     //     ? newArr
//     //     : newArr.concat([data.slice(-(data.length%chunk))]);
//     return newArr;
// };

// // chunkArray(data, 2);

// console.log(chunkArray(data, 2)); // [[1, 2], [3, 4], [5, 6], [7]]
// // console.log(data);
// console.log(chunkArray(data, 3)); // [[1, 2, 3], [4, 5, 6], [7]]


// // // !!!!!task!!!!!
// // // // Напишіть метод, який розбиває масив на частини визначеного розміру
// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 6, 17, 18];
// function chunkArray(data, chunk) {
//     const newArr = [];
//     const newData = [...data];
//     newData.forEach((number, index, arr) => {
//         newArr.push(arr.splice(0, chunk));                
//     });

//     return [...newArr, ...[newData]];
// };


// console.log(chunkArray(data, 2)); // [[1, 2], [3, 4], [5, 6], [7]]

// console.log(chunkArray(data, 3)); // [[1, 2, 3], [4, 5, 6], [7]]

// // // task!
// // // // Напишіть метод, який розбиває масив на частини визначеного розміру
// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 6, 17, 18, 19];
// function chunkArray(data, chunk) {
//     const newArr = [];
//     const newData = [...data];
//     newData.forEach((number, index, arr) => {
//         newArr.push(arr.splice(0, chunk));                
//     });

//     return [...newArr];
// };


// console.log(chunkArray(data, 2)); // [[1, 2], [3, 4], [5, 6], [7]]

// console.log(chunkArray(data, 3)); // [[1, 2, 3], [4, 5, 6], [7]]




// // // task
// // // Напишіть метод, який розбиває масив на частини визначеного розміру
// const data = [1, 2, 3, 4, 5, 6, 7];
// function chunkArray(data, chunk) {
//     const newArr = [];
//     data.forEach((number, index, arr) => {
//         newArr.push(arr.splice(0, chunk));        
//     });

//     return newArr.concat([data]);
// };


// // chunkArray(data, 2);

// console.log(chunkArray(data, 2)); // [[1, 2], [3, 4], [5, 6], [7]]
// // // console.log(data);
// // // console.log(chunkArray(data, 3)); // [[1, 2, 3], [4, 5, 6], [7]]


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



// // За допомогою методу forEach потрібно заповнити масив uploadedFiles
// // baseUrl потрібно передати, як this
// // Потім зробити це завдання за допомогою методу map

// const imagesName = ['car.jpeg', 'grass.jpeg', 'avatar.png', 'user.jpeg', 'sea.jpeg', 'water.jpeg', 'bird.jpeg'];
// const baseUrl = 'domain-name.com';
// const path = '/upload/';
// let uploadedFiles = [];
  
// // imagesName.forEach(function (img) {
// //   uploadedFiles.push(`${this}${path}${img}`)  
// // }, baseUrl)
// // console.log(uploadedFiles)

// // uploadedFiles = imagesName.map(img => `${baseUrl}${path}${img}`)
// //  console.log(uploadedFiles)

// uploadedFiles = imagesName.reduce((acc, img) => {
//   return [...acc, `${baseUrl}${path}${img}`]
// }, [])

// console.log(uploadedFiles)


// const resultUploadedFiles = [
//   'domain-name.com/upload/car.jpeg',
//   'domain-name.com/upload/grass.jpeg',
//   'domain-name.com/upload/avatar.png',
//   'domain-name.com/upload/user.jpeg',
//   'domain-name.com/upload/sea.jpeg',
//   'domain-name.com/upload/water.jpeg',
//   'domain-name.com/upload/bird.jpeg'
// ];


// / Напишіть функцію addItemToBasket, яка буде за допомогою методу find перевіряти, чи є вже такий продукт в кошику
// // Якщо він є, то потроібно оновити його в коризні
// // Якщо немає, то потрібно додати новий продукт до кошику покупок

// Після цього порахувати суму всіх покупок і вивести total;

// let total = 0;

// const tShirt = {
//   id: 33,
//   title: 'T-shirt',
//   price: 99,
//   count: 1,
// }

// const jeans = {
//   id: 29,
//   title: 'Jeans',
//   price: 199,
//   count: 1,
// }

// let basketItems = [
//   {
//     id: 28,
//     title: 'iPhone 14',
//     price: 1599,
//     count: 3,
//   },
//   {
//     id: 29,
//     title: 'Jeans',
//     price: 199,
//     count: 2,
//   }
// ];

// function addItemToBasket(newProduct) {
//     const currentProduct = basketItems.find(product => product.id === newProduct.id);
//     if (currentProduct) {
//        return basketItems.map(product => {
//            if (product.id === currentProduct.id) {
//                return {
//                    ...product,
//                    count: product.count + 1,
//                }
//            }
//            else return product;
//         })
//     }
//     else {
//         return [...basketItems, newProduct]
//     }

// }

// basketItems = addItemToBasket(tShirt);
// basketItems = addItemToBasket(jeans);
// console.table(basketItems);

// const sum = basketItems
//     .map(({ price, count }) => price * count)
//     .reduce((total, product) =>
//     total += product
// , 0)

// console.log(`Сума товару  ${sum}`);


// Потрібно отримати URL адресу із адресного рядка бразуера.
// Далі необхідно параметри запиту записати в об'єкт  (query) - ключ, значення (axios)

// const url = 'https://www.npmjs.com/?query=axios&version=0.3&module=render&size=32&date=12212183311'

// const link = new URL(url)
// console.log(link)

// const search = link.search
// console.log(search)

// const arraySearch = search.slice(1).split('&')
// console.log(arraySearch)

// const paramsObj = arraySearch.reduce((obj, string) => {
//     console.log(obj)
//     console.log(string)
//     const [key, value] = string.split('=')
//     obj[key] = value;
//     return obj
// }, {})
// console.log(paramsObj)

// Напишіть метод, який очищає масив від усіх непотрібних елементів, таких як false, undefined, порожні рядки, нуль, null

// const data = [0, 1, false, 2, undefined, '', 3, null];
// function compact(data) {
//   return  data.filter(Boolean             
//         )
// }

// console.log(compact(data)) // [1, 2, 3]


// Ви маєте масив об'єктів user, і в кожному з них є user.name. Напишіть код, який перетворює їх на масив імен за порядком зростання, за віком.
// Наприклад:

// let jhon = { name: "Jhon", age: 26 };
// let bruce = { name: "Bruce", age: 24 };
// let maria = { name: "Maria", age: 28 };

// let users = [ jhon, bruce, maria ];

// // let names = /* ... ваш код */

// // alert(names); // Bruce, Jhon, Maria

// let names = users.sort((prev, next) => {
   
//     // console.log(prev);
//     // console.log(next);

//     return next.age - prev.age;
// })
//     .map(item => item.name);

// console.log(users);
// console.log(names);

