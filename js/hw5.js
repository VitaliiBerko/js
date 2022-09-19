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

class StringBuilder {
    constructor(value) {
      this.value = value;    
    }
  getValue() {
  return  this.value;
  }
    padEnd(str) {
     this.value=this.value + str;
    }
    padStart(str) {
        this.value=  str+this.value;
    }
  
    padBoth(str) {
        this.value= str+this.value+str;
    }
  }
  
  
  // Change code above this line
  const builder = new StringBuilder(".");
  console.log(builder.getValue()); // "."

  builder.padStart("^");
  console.log(builder.getValue()); // "^."
  builder.padEnd("^");
  console.log(builder.getValue()); // "^.^"
  builder.padBoth("=");
  console.log(builder.getValue()); // "=^.^="
  