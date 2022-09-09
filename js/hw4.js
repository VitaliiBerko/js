
// task 2
// // Доповни функцію makeMessage таким чином, щоб вона очікувала другим параметром (параметр callback)
// колбек - функцію і повертала її виклик.
// Функція deliverPizza або makePizza
// буде передаватися як колбек і очікувати аргументом ім'я готової піци, що доставляється.

// //     Оголошена функція deliverPizza
//     Оголошена функція makePizza
//     Оголошена функція makeMessage
//     Функція makeMessage приймає два параметри, названі відповідно до завдання, pizzaName і callback
//     Виклик makeMessage("Royal Grand", makePizza) повертає рядок "Pizza Royal Grand is being prepared, please wait..."
//     Виклик makeMessage("Ultracheese", deliverPizza) повертає рядок "Delivering Ultracheese pizza."

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
  
//   return callback(pizzaName);
  
// }

// console.log(makeMessage("Royal Grand", makePizza));

// task 4
// Необхідно написати логіку обробки замовлення піци. Виконай рефакторинг методу order таким чином, щоб він приймав другим і третім параметром два колбеки onSuccess і onError.

//     Якщо у властивості pizzas відсутня піца з назвою з параметра pizzaName, метод order повинен повертати результат виклику колбека onError, передаючи йому аргументом рядок "There is no pizza with a name <имя пиццы> in the assortment."
//     Якщо у властивості pizzas присутня піца з назвою з параметра pizzaName, метод order повинен повертати результат виклику колбека onSuccess, передаючи йому аргументом назву замовленої піци.

// Після оголошення об'єкта pizzaPalace ми додали колбеки і виклики методів. Будь ласка, нічого там не міняй.

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, makePizza, onOrderError) {
//     const {pizzas, order} = this;
//       for (let pizza of pizzas) {
//         //   console.log(pizza);
//       if (pizzaName === pizza) {
//       return  makePizza(pizzaName);
//       }
      
//     }
//     return onOrderError(`There is no pizza with a name ${pizzaName} in the assortment.`)
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));


// task 13
// Функція changeEven(numbers, value) приймає масив чисел numbers і оновлює кожен елемент, значення якого - це парне число, додаючи до нього значення параметра value.

// Виконай рефакторинг функції таким чином, щоб вона стала чистою - не змінювала масив чисел numbers, а створювала, наповнювала і повертала новий масив з оновленими значеннями.

//     Оголошена функція changeEven(numbers, value)
//     Функція changeEven не змінює значення параметра numbers
//     Виклик changeEven([1, 2, 3, 4, 5], 10) повертає новий масив [1, 12, 3, 14, 5]
//     Виклик changeEven([2, 8, 3, 7, 4, 6], 10) повертає новий масив [12, 18, 3, 7, 14, 16]
//     Виклик changeEven([17, 24, 68, 31, 42], 100) повертає новий масив [17, 124, 168, 31, 142]
//     Виклик changeEven([44, 13, 81, 92, 36, 54], 100) повертає новий масив [144, 13, 81, 192, 136, 154]
//     Виклик функції з випадковими, але валідними аргументами, повертає правильне значення


function changeEven(numbers, value) {
  // Change code below this line
  const newArray =[];
  
  numbers.forEach(number => {
    if (number % 2 === 0) {
      newArray.push(number + value);
    } else if (number % 2 !== 0) {
      newArray.push(number);
    }
  })

  return console.log(newArray);
  
  // for (let i = 0; i < numbers.length; i += 1) {
  //   if (numbers[i] % 2 === 0) {
  //     numbers[i] = numbers[i] + value;
  //   }
  // }
  // Change code above this line
}

changeEven([1, 2, 3, 4, 5], 10);
changeEven([2, 8, 3, 7, 4, 6], 10)
changeEven([17, 24, 68, 31, 42], 100);
changeEven([44, 13, 81, 92, 36, 54], 100);