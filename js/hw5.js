// class Storage {
//     constructor(items) {
//       this.items = items;    
//     }
//     getItems() {
//       return this.items;
//     }
//     addItem(newItem) {
//       this.items.push(newItem);
//     }
//     removeItem(itemToRemove) {
//       this.items.splice(this.items.indexOf(itemToRemove), 1);
//     }
//   }
  
  
//   // Change code above this line
//   const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
//   console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

//   storage.addItem("Droid");
//   console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
//   storage.removeItem("Prolonger");
//   console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


// task 11

// class StringBuilder {
//     constructor(value) {
//       this.value = value;    
//     }
//   getValue() {
//   return  this.value;
//   }
//     padEnd(str) {
//      this.value=this.value + str;
//     }
//     padStart(str) {
//         this.value=  str+this.value;
//     }
  
//     padBoth(str) {
//         this.value= str+this.value+str;
//     }
//   }
  
  
  // // Change code above this line
  // const builder = new StringBuilder(".");
  // console.log(builder.getValue()); // "."

  // builder.padStart("^");
  // console.log(builder.getValue()); // "^."
  // builder.padEnd("^");
  // console.log(builder.getValue()); // "^.^"
  // builder.padBoth("=");
  // console.log(builder.getValue()); // "=^.^="
// _____________________________________________________________________________________________________________________________________ 
  // tutorial
  // const animal = {
  //   legs: 4,
  // };
  // const dog = Object.create(animal);
  // dog.name = "Манго";
  
  // console.log(dog); // { name: 'Манго', __proto__: animal }
  // console.log(animal.isPrototypeOf(dog)); // true


  class User {
    #salary;
    constructor ({userName, email, salary}={}) {
      this.userName = userName;
      this.email = email;
      this.#salary = salary;
    }
    static PI = 3.14;

    getSalary(){
      return this.#salary;
    }
    chengeSalary(newSalary) {
      return this.#salary = newSalary;
    }

  };

  const bob = new User({userName: 'Bob', email: 'bob@mail.com', salary:1000,});
  console.log(bob);

 class Child extends User {
  constructor({age, ...restProps} ={}) {
    super(restProps);
    this.age = age;
  }

 };

 const alex = new Child({userName: 'Alex', email: 'alex@mail.com', salary: 3000, age: 45})
 console.log(alex);
 alex.chengeSalary(5000);
 console.log(alex);
 console.log(User.PI);
