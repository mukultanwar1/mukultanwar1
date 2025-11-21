// ✅ Array .map() Questions

// Use .map() to produce a new array

// 1️⃣ Given:
//➤ Return an array with each number doubled.

// let nums = [1, 2, 3, 4, 5];
// let doubled = nums.map(function(ele){
//     return ele* 2
// }) 
// console.log(doubled);


// 2️⃣ Given:

// let prices = [100, 200, 300];


// ➤ Return final prices after adding 10% GST.

// let prices = [100, 200, 300];
// let final = prices.map(function(e){
//     return (e / 100 *10) + e 
// })
// console.log(final);

// 3️⃣ Given:

// let words = ["one", "two", "three"];


// ➤ Return an array where each word becomes uppercase.

// let words = ["one", "two", "three"];
// let upper = words.map(function(ele){
//     return ele.toUpperCase()

// })
// console.log(upper);


//4️⃣ Convert each temperature in °C to °F
//Formula: F = C * 1.8 + 32

// let celcius = [10,20,30,40,50]
// let fehrenheit = celcius.map(function(ele){
//     return ele * 1.8 +32;
// })
// console.log(fehrenheit);



// 5️⃣ Given student marks, return "Pass" if mark ≥ 35 else "Fail".

// let marks = [20,30,40,50,60]
// let result = marks.map(function(e){
//     if(e>35){
//     return 'pass'
//     }else{
//     return 'fail'
//     } 
// })
// console.log(result);

// ✅ Array .filter() Questions

// Use .filter() to remove or keep items

// 1️⃣ Given:
// return only even number

// let nums = [10, 25, 40, 3, 81];
// let even = nums.filter(function(ele){
//     return ele % 2==0 ;
// })
// console.log(even);

// 4️⃣ Given marks
// ➤ Keep only marks greater than 50.

// let marks = [40,50,60,70,80,90];
// let result = marks.filter(function(ele){
//     return ele >=50
// })
        
//     console.log(result);
    

// 5️⃣ Given prices
// ➤ Return prices less than or equal to 100.
// let prices = [40,50,100,200,300,400,500];
// let result = prices.filter(function(e){
//     return e <= 100;

// })
// console.log(result);



//1️⃣ What will be the result of this code? Explain why.

// let arr = [1, 2, 3];
// let result = arr.map(num => num + "0");
// console.log(result);
// //out put = " "



//2️⃣ Predict the output:

// let nums = [10, 20, 30];
// let res = nums.map((n, i) => i);
// console.log(res);
// //out put = 


//3️⃣ Fix this mistake:
//Why is this returning undefined values?

// let items = ["a", "b", "c"];
// let x = items.map((item) => {
//  return item.toUpperCase();
// });
// console.log(x);

//4️⃣ Does map() change the original array?

// let a = [2, 4];
// let b = a.map(x => x * 2);
// console.log(a);
// console.log(b);


//5️⃣ What if the callback does not return anything?

// let res = [1, 2, 3].map(num => {});
// console.log(res);

// //🔹 Array .filter() (Understanding selection)




//6️⃣ What will be printed?

// let numbers = [3, 6, 9, 10, 15];
// let result = numbers.filter(n => n % 3);
// console.log(result);

// let arr = ["Apple", "Ball", "Cat"];
// let res = arr.filter((v, i) => i > 5);
// console.log(res);


//8️⃣ What does filter() return when no elements satisfy the condition?

// let res = [5, 7, 9].filter(num => num > 20);
// console.log(res);


//9️⃣ Does filter() modify the original array? Explain with output:

// let x = [1, 2, 3];
// let y = x.filter(n => n > 1);
// console.log(x);
// console.log(y);



//🔟 Identify the mistake:

// let marks = [30, 50, 80];
// let pass = marks.filter(m => m > 40);
// console.log(pass);

//Given an array of numbers, add 5 to each number using .map()
 //Example: [10, 20, 30] → [15, 25, 35]

// let arr = [10, 20, 30]
// let nums = arr.map(function(ele){
//     return ele+5
// })
// console.log(nums);



//Take an array of numbers and make a new array with only even numbers using .filter()
 //Example: [1,2,3,4] → [2,4]
// let arr  = [1,2,3,4];
// let nums = arr.filter(function(ele){
//     return ele % 2 ==0;
// })
// console.log(nums);

//Multiply each number by 10 using .map()
// Example: [2,3,4] → [20,30,40]

// let arr =  [2,3,4];
// let nums = arr.map(function(ele){
//     return ele * 10;
// })
// console.log(nums);

//Keep only the numbers divisible by 3 using .filter()
// Example: [5,6,9,10] → [6,9]

//  let arr = [5,6,9,10];
// let nums = arr.filter(function(ele){
//     return ele % 3 ==0;
// })
// console.log(nums);


//Given an array of numbers, subtract 2 from each value using .map()
// // Example: [8,10,12] → [6,8,10]
// let arr = [8,10,12];
// let nums = arr.map(function(ele){
//     return ele -2;
// })
// console.log(nums);


//Filter out numbers greater than 50
// Example: [10,60,30,80] → [60,80]
// let arr = [10,60,30,80];
// let nums = arr.filter(function(ele){
//     return ele > 50;
// })
// console.log(nums);





//Square each element using .map()
// Example: [2,3,5] → [4,9,25]
// let arr =[2,3,5];
// let nums = arr.map(function(ele){
//     return ele * ele
// })

// console.log(nums);



// Filter the numbers that are odd
//  Example: [10,11,12,13] → [11,13]
// let arr = [10,11,12,13];
// let odd = arr.filter(function(ele){
//     return ele % 2 !==0; 
// })
// console.log(odd);


// Q9️⃣
// Divide each number by 2
//  Example: [4,6,10] → [2,3,5]

// let arr = [4,6,10];
// let nums = arr.map(function(ele){
//     return ele /2;
// })

// console.log(nums);

// Q🔟
// From an array of marks, keep only marks greater than or equal to 35 (passing students)
//  Example: [22,35,50,10,40] → [35,50,40]
// let marks = [22,35,50,10,40];
// let result = marks.filter(function(m){
//     return m >= 35;
// })


// console.log(result);
 
// Concepts: filter(), >=, if
// const marks = [45, 67, 89, 23, 50, 90];

// // ✅ Task: Use filter() to get all marks greater than or equal to 50

// 👉 Expected Output: [67, 89, 50, 90]

// let  marks = [45, 67, 89, 23, 50, 90];
// let result = marks.filter(function(e){
//     return e >= 50;
// })
// console.log(result);

// Given this array

// let arr = [10, 20, 30, 40, 50];

// Do the following using for...in loop

// 1. Print all array indexes
// 2. Print all elements of the array using the index
// 3. Print the square of each element
// 4. Add all elements and print total sum
// 5. Count how many elements are greater than 25
// 6. Print elements that are divisible by 10


 let arr = [10, 20, 30, 40, 50];
for (let i in arr){
 console.log(arr[i]/10 );
 

}

 


