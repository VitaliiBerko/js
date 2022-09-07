
// for (let i = 0; i <= 100; i += 2) {
//     console.log(i);
// }
// console.log('lkjhkl;jhl;kjh');

// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 10;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);

//     console.log(`Salary ${i} - ${salary}`);
//     totalSalary += salary;
// }

// console.log('Total salary', totalSalary);

const min = 10;
const max = 17;
let total = 0;

for (let i = min; i <= max; i += 1) {
    
    if (i % 2 !== 0) {        
        continue;      
    }

    console.log(i);
    total += i; 
   
}
console.log(`Total`, total);