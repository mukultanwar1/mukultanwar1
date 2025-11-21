
// // ✅ Task: Use filter() to get all marks greater than or equal to 50

// 👉 Expected Output: [67, 89, 50, 90]

// let  marks = [45, 67, 89, 23, 50, 90];
// let result = marks.filter(function(e){
//     return e >= 50;
// })
// console.log(result);


// Task 2 — Identify failed students
// Concepts: filter(), <, if
// const students = [
//   { name: "Amit", marks: 35 },
//   { name: "Priya", marks: 70 },
//   { name: "Ravi", marks: 48 },
//   { name: "Neha", marks: 80 }
// ];

// // ✅ Task: Use filter() to find all students with marks less
//  than 50

//  const students = [
//   { name: "Amit", marks: 35 },
//   { name: "Priya", marks: 70 },
//   { name: "Ravi", marks: 48 },
//   { name: "Neha", marks: 80 }
// ];
// let result = students.filter(function(student){
//   return student.marks < 50;

// })
// console.log(result);


//🧩 Task 3 — Check equality of two arrays (length check only)
// //Concepts: ==, ===, if
// const arr1 = [10, 20, 30];
// const arr2 = [10, 20, 30];

// // ✅ Task: Use if condition to check whether arr1 and arr2 are the same array

// 👉 Hint: Use == and === and note the difference in behavior.


// 🧩 Task 4 — Tag high scores
// Concepts: map(), >, if
// const scores = [50, 78, 95, 40, 88];

// // ✅ Task: Use map() to create a new array where each score is replaced by:
// // "High" if > 80, else "Low"

// 👉 Expected Output:
//  ["Low", "Low", "High", "Low", "High"]

// const scores = [50, 78, 95, 40, 88];
// let result = scores.map(function(score){
//   if(score > 80){return "high" 

//   }else  return "low"
// })
// console.log(result);







// 🧩 Task 5 — Compare employee ages
// Concepts: for...in, >, <, if
// const employees = {
//   raj: 28,
//   seema: 32,
//   anil: 26,
//   rita: 35
// };

// ✅ Task: Using for...in loop, print:
// "Young employee" if age < 30
// "Senior employee" if age >= 30

 
// const employees = { raj: 28,seema: 32,anil: 26,rita: 35};
// for (let name in employees){
//     if (employees[name] < 30){  
//         console.log (name + " is a young employee")
//     }
//     else if(employees[name] >= 30){
//         console.log(name + " is a senior employee")
//     }

// }
    

// const employees = { raj: 28,seema: 32,anil: 26,rita: 35};
// for (let name in employees){
//     if(employees[name] < 30){console.log(name + "is a young employee");
//     }
//     else  if(employees[name]>=30){console.log(name + "is a semior employee");
//     }
// }

    
// 🧩 Task 6 — Filter even numbers
// Concepts: filter(), %, ==
// const numbers = [10, 13, 25, 40, 55, 66];

// // ✅ Task: Use filter() to get only even numbers using comparison operator (==)

// 👉 Expected Output: [10, 40, 66]


// const numbers = [10, 13, 25, 40, 55, 66];
// let nums = numbers.filter(function(ele){
//      ele % 2 ==0
// })
// console.log(nums);

// 🧩 Task 7 — Find students with same marks
// Concepts: for...in, ===, if
// const studentsMarks = { amit: 50, raj: 70, priya: 50, rina: 60 };

// // ✅ Task: Print names of students who have marks equal to 50

// 👉 Expected Output:
// amit has 50 marks
// priya has 50 marks

//  const studentsmarks = { amit: 50, raj: 70, priya: 50, rina: 60 };
// for (let name in studentsmarks){
//     if(studentsmarks[name]===50){
//         console.log(name + "has 50 marks");
        
//     }    
// }








// 🧩 Task 8 — Categorize products by price
// Concepts: map(), >, <, if
// const prices = [99, 150, 200, 49, 120];

// ✅ Task: Use map() to return an array of:
// "Cheap" if price < 100
// "Moderate" if price between 100 and 150
// "Expensive" if price > 150

//  const prices = [99, 150, 200, 49, 120];
//  let result = prices.map(function(pri){
//    if(pri < 100){
//       return "cheap"
//    }
//    else if(pri <= 100 && pri >= 150 ){
//     return "moderate"
//    } else return "expensive"
//  })

// console.log(result);








// 🧩 Task 9 — Filter adults
// Concepts: filter(), >=, if
// const ages = [12, 18, 25, 10, 30];

// // ✅ Task: Use filter() to return only ages >= 18

// 👉 Expected Output: [18, 25, 30]


//  const ages = [12, 18, 25, 10, 30];
//  let newArr = ages.filter(function(age){
//       return age >= 18
//  })
//  console.log(newArr);
 
   
//  🧩 Task 10 — Check if two numbers are not equal
// Concepts: !=, !==, if
// const a = "20";
// const b = 20;

// // ✅ Task: Compare a and b using != and !== and log results

// 👉 Expected Output:
// Using != : false
// Using !== : true

 const a = "20";
const b = 20;
if (a!==b ){
    console.log("hello")
}
