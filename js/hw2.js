// function getExtremeElements(array) {
//   // Change code below this line
  
  
//   return [array[0], array[array.length - 1]];
  
  
  
//   // Change code above this line
// }


// getExtremeElements([1, 2, 3, 4, 5]);
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));

// task 19
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i =0 ; i < fruits.length; i+=1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// task 20

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i += 1)
//   {
//   total+=order[i];
//   }
//   // Change code above this line
//   return total;
// }


// console.log(calculateTotalPrice([12, 85, 37, 4]));



// task 21

// function findLongestWord(string) {
//   // Change code below this line
//   let words = string.split(' ');
//   console.log(words);

//   let longestWord = words[0];

//   for (const word of words) {
//   if (word.length > longestWord.length) {
//     longestWord = word;
//     }
    
// }
//   return longestWord;

//   // Change code above this line}

// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));



// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }

// console.log('smallestNumber: ', smallestNumber);


// const words = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"];

// let longestWord = words[0];

// for (const word of words) {
//   if (word.length > longestWord.length) {
//     longestWord = word;
//   }
// }

// console.log(`The longest word is - `, longestWord);


// task 22

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//    for (let i=min; i<=max; i+=1){
//       numbers.push(i);
//    }
//   // Change code above this line
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));

// task 23

// function filterArray(numbers, value) {
//    // Change code below this line
//   const biggestNumbers = [];
  
// for ( const number of numbers) {
//   if (number <= value) {
//     continue
//   }
//   biggestNumbers.push(number); 
//   }
//   return biggestNumbers;
//   // Change code above this line
// }

// console.table(filterArray([1, 2, 3, 4, 5], 3));



// task 29

// function getEvenNumbers(start, end) {
//    // Change code below this line
//   const newArray = [];

//   for (let i=start; i<=end; i+=1){
//    if( i%2 !==0) {
//       continue
//     } 
    
//     console.log(i);
  
//   newArray.push(i); 
    
// }

// return newArray;
//     // Change code above this line
// }
  

// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));

// task 32
// function includes(array, value) {
//   // Change code below this line
//   for (const number of array) {
//     if (number===value) {
//       return true;
//     }
    
//   }
//   return false;
//   // Change code above this line
// }

// console.log(includes([1, 2, 3, 4, 5], 3));
