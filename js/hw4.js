
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

const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
  order(pizzaName, makePizza, onOrderError) {
    const {pizzas, order} = this;
      for (let pizza of pizzas) {
        //   console.log(pizza);
      if (pizzaName === pizza) {
      return  makePizza(pizzaName);
      }
      
    }
    return onOrderError(`There is no pizza with a name ${pizzaName} in the assortment.`)
  },
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));
