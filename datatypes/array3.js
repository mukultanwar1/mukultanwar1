   
// // 6️⃣ Given:
// // let nums = [1, 2, 3, 4]
// // Make a new array of square of numbers
// // → [1, 4, 9, 16]
// let nums = [1, 2, 3, 4]
// for ( let i in nums){
//     console.log(nums[i]*nums[i]);
    
// }

// 9️⃣ Given:
// let str = ["A", "BB", "CCC"]
// Create a new array of lengths
// → [1, 2, 3]

// let str = ["A", "BB", "CCC"]

// for ( let i in str){
//     console.log(str[i].length);
    

// }

// Use .map() to produce a new array

// 1️⃣ Given:

// let nums = [1, 2, 3, 4, 5];


// ➤ Return an array with each number doubled.


// let nums = [1, 2, 3, 4, 5];
// let doubled=nums.map(function(nums){
//     return nums*2
// })
// console.log(doubled);



// 2️⃣ Given:

// let prices = [100, 200, 300];


// ➤ Return final prices after adding 10% GST.

//  let prices = [100, 200, 300];
//  let final =prices.map(function(prices){
//     return prices/100*10
//  })

//  console.log(final);
 

// 3️⃣ Given:

// let words = ["one", "two", "three"];


// ➤ Return an array where each word becomes uppercase.

//4️⃣ Convert each temperature in °C to °F
//Formula: F = C * 1.8 + 32

// let celcius = [10,20,30,40,50];
// let fehrenheit = celcius.map(function(celcius){
//     return celcius*1.8+32
// })
// console.log(fehrenheit);

// Use .filter() to remove or keep items

// 1️⃣ Given:

// let nums = [10, 25, 40, 3, 81];

// ➤ Return only even numbers.

//  let nums = [10, 25, 40, 3, 81];
// let even =nums.filter(function(nums){
//     return nums%2==0
// })


// console.log(even);



// 2️⃣ Given:

// let ages = [12, 18, 22, 16, 30];


// ➤ Extract ages 18 or above.
//  let ages = [12, 18, 22, 16, 30];
//  let Extract= ages.filter(function(ages){
//     return ages>=18;
//  })
// console.log(Extract);

//3️⃣ Given words array
//➤ Filter out only words whose length is greater than 3.

// let words = ['one','two','three','four']
// let result  = words.filter(function(word){
//     return word.length>3;
// })

// console.log(result);

    

// let numbers = [3, 6, 9, 10, 15];
// let result = numbers.filter(n => n % 3);
// console.log(result);

// let arr = ["Apple", "Ball", "Cat"];
// let res = arr.map((v, i) => i > 5);
// console.log(res);

let marks = [30, 50, 80];
let pass = marks.filter(m => console.log(m > 40));
console.log(pass);

