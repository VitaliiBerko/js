// task 6

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.price +=5000;
// apartment.rating+=4.7;
// apartment.owner.name= 'Henry Sibola';
// apartment.tags.push('trusted');

// console.log(apartment);

// task 10

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line

// for (const key in apartment) {
//   keys.push(key);
// }

// for (const value in apartment) {
//   values.push(apartment[value])
// }

// console.log(keys);
// console.log(values);



// task 12

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (const key in object) {
  
//   if (object.hasOwnProperty(key)) {
//     propCount += 1;
   
  
//   }
    
//   }
  
//   // Change code above this line
//   return propCount;
// }

// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));


// // task 13
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// // array
// const keys = Object.keys(apartment);

// for (let key of keys) {
//   values.push(apartment[key]);
// }
// console.log(keys);

// console.log(values);



// task 14
// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   const keys = Object.keys(object);

//   // console.log(keys);
  
//   // propCount=keys.length;

//   for (let key of keys) {
//     propCount += 1;
//   }
  
//   // for (const key in object) {
  
//   //   if (object.hasOwnProperty(key)) {
//   //     propCount += 1;
//   //   }
//   // }

//   return propCount;
//   // Change code above this line
// }

// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// task 19

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const newArray = [];
//   for (let item of products) {

//     for (const key in item) {
//       if (key !== propName) {
//         continue
//       }
//       // console.log(key);
      
//       newArray.push(item[propName])

//     }
        
      
//   }
   
  
  
//   return newArray;
//   // Change code above this line
// }

// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));

// task 20

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
// for (let item of products) {

//   for (const key in item) {
//     if( key !== productName) {
//       continue
//     }
   
//   }
//    return item.price * item.quantity
 
// }

//   // Change code above this line
// }


// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));

// task 25
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// // const highToday = forecast.today.high;
// // const lowToday = forecast.today.low;
// // const todayIcon = forecast.today.icon;

// // const highTomorrow = forecast.tomorrow.high;
// // const lowTomorrow = forecast.tomorrow.low;
// // const tomorrowIcon = forecast.tomorrow.icon;

// const { today: { low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg" },
//   tomorrow: { low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg" } } = forecast;


  // task 30

//   function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
        
//     // const {category, priority, text, completed } = data;

//     //  data = {
//     //   completed: false,
//     //   category: 'General',
//     //    priority: 'Normal'
//     // };

//     return  {
//       category,
//       priority,
//       completed,
//       ... data
//     };

    
//   // Change code above this line
// }

// console.log(makeTask({}));
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));

// task 32

// Change code below this line
// function addOverNum(...args) {
//   let total = 0;

//   for (let i = 0; i < args.length; i+=1)
       
//    {
//     if (args[0] < args[i])
//     {
//       total += args[i];
//     }
//   }

//   return total;
//   // Change code above this line
// }

// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));

// // task 33

// function findMatches([...args], ...restArgs) {
//   const matches = []; // Don't change this line
//   for (let arg of restArgs) {
//     if (args.includes(arg)){
//       matches.push(arg);
//     }
//   }
//   // Change code above this line
//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));

// // task 34
// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },

//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },

//     updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`
//   }
//   // Change code above this line
// };

// task 35

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const {books} = this;
//     for (let book of books) {
//       if(book === oldName) {
//         books.splice(books.indexOf(book), 1, newName);
//       }
//     }
//   return books;

//     // Change code above this line
//   },
// };

// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));


// task 41
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {for (let potion of this.potions) {      
    }
    return this.potions;
  },
  addPotion(newPotion) {
    for (let potion of this.potions) {
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
  },


  removePotion(potionName) {
    
    // for (let potion of this.potions) {

    //   console.log(potion.name);

    //   const potionIndex = this.potions.indexOf(potion.name);

    //   if (potion.name === potionName) {
        
    //     console.log(potionIndex);

    //     this.potions.splice(potionIndex, 1);   
        
    //   }
      
    // }
    // return `Potion ${potionName} is not in inventory!`;

     const {potions} = this;
     for (let potion of potions){
       if (potionName === potion.name) {
        
         potions.splice(potions.indexOf(potion), 1); 
         return potions;
         
      }
      
    }
    
      return `Potion ${potionName} is not in inventory!`;
    
      // return `Potion ${potionName} is not in inventory!`;
    
    // const potionIndex = this.potions.indexOf(potionName);

    // if (potionIndex === -1) {
    //   return `Potion ${potionName} is not in inventory!`;
    // }

    // this.potions.splice(potionIndex, 1);
  },
  
  updatePotionName(oldName, newName) {
    const { potions } = this;
    
    for (let potion of potions) {
      // console.log(potion.name);
      
      if (oldName === potion.name) {        
        
        potion.name = newName;
        
         return potions;
       }       
    }        
     
    return `Potion ${oldName} is not in inventory!`;

    // const potionIndex = this.potions.indexOf(oldName);

    // if (potionIndex === -1) {
    //   return `Potion ${oldName} is not in inventory!`;
    // }

    // this.potions.splice(potionIndex, 1, newName);
  },
  // Change code above this line
};


console.log(atTheOldToad.getPotions());
console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// console.log(atTheOldToad.removePotion("Dragon breath"));
console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));
