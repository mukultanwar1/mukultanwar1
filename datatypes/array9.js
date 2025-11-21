// Input:
//  let age = 20;
// Condition (you must write in code):
//  Check if the person is an adult (age ≥ 18).
// Expected Output:
//  "Adult"
// let age = 20 
// if ( age >= 18 ){
//     console.log("adult");
    
// }else {
//     console.log("minor");
    
// }

//  let marks = 32;
// Condition (you must write in code):
//  If marks ≥ 35 → print "Pass"
//  Else → print "Fail"
// Expected Output:
//  "Fail"

// let marks = 32
// if (marks >= 35){
//     console.log("pass");
       
// }else{
//     console.log("fail");
    
// }


//  let stock = 0;
// Condition:
//  If stock > 0 → "Available"
//  Else → "Out of stock"
// Expected Output:
//  "Out of stock"

// let stock = 0
// if ( stock > 0 ){
//     console.log("available");
    
// }else{
//     console.log("out of stock");
    
// }


//  let temp = 41;
// Condition:
// If temp < 20 → "Cold"
// Else if temp between 20 and 35 → "Normal"
// Else → "Hot"
// Expected Output:
//  "Hot"
// let temp =  41
// if ( temp < 20 ){
//     console.log("cold");
    
// }else if ( temp >20 && temp < 35){
//     console.log("normal");
    
// }else {
//     console.log("hot");
    
// }


// let score = 77;
// Condition:
// ≥ 90 → "A"
// ≥ 75 → "B"
// ≥ 50 → "C"
// Else → "D"
// Expected Output:
//  "B"

// let score = 77
// if ( score > 90 ){
//     console.log("grade a");
    
// }else if (score > 75 && score < 90 ){
//     console.log("grade b");
    
// }else if (score > 50 && score < 75){
//     console.log("grade c");
    
// }else {
//     console.log("grade d");
    
// }


// Input:
// let loginAttempts = 0;
// let passwordInput = "12345";
// let correctPassword = "99999";

// Condition:
// If the password is wrong, increase loginAttempts by 1
// If correct, print "Login successful"
// Expected Output (for the given input):
//  loginAttempts becomes 1
//  Printed message → "Wrong password"
// (The solution must include updating the external variable.)

// let loginAttempts = 0;
// let passwordInput = "12345;
// let correctPassword = "99999";

// if ( passwordInput.length >5){
//     console.log("login successful");
    
// }else if (passwordInput.length < 5){
//         console.log(" loginAttempts by 1");
        
// }else {
//     console.log("wrong password");
    
// }


// let userType = "admin";
// let accessLevel = 5;

// Condition:
//  First check userType → if "admin"
//  Then check accessLevel → if ≥ 5
// Only then print "Full Access"
//  Otherwise print "Restricted Access"
// Expected Output:
//  "Full Access"


// let userType = "admin"
// let accesslevel = 5
// if (userType === "admin " || accesslevel >=5 ){
//     console.log("full access");
    
// }else  {
//     console.log("restricted access");
    
// }

// let username = "";
// let password = "abc123";

// Condition:
// If username is empty → "Username required"
// Else if password length < 6 → "Password too short"
// Else → "Form submitted"
// Expected Output:
//  "Username required"
 
// let username = ""
// let password = " abc123 "
// if ( username === "" || password > 6 ){
//     console.log("username required");
    
// }else {
//     console.log("form summited");
    
// }

// let isOnline = true;
// let battery = 8;

// Condition:
//  If user is online and battery < 10 → "Low battery warning"
// Else → "All good"
// Expected Output:
//  "Low battery warning"

// let isOnline = true
// let battery = 8 
// if ( isOnline === true && battery < 10 ){
//     console.log(" low battery waring ");
    
// }else{
//     console.log("all good")
    
// }


// let orderCount = 12;
// let discount = 0;

// Condition:
// If orderCount ≥ 10 → set discount = 20
// Else if orderCount ≥ 5 → set discount = 10
// Else → set discount = 0
//  Then print "Discount applied: X%"
// Expected Output:
//  discount → 20
//  Printed → "Discount applied: 20%"

let orderCount = 12
let discount = 0
if ( orderCount > 10 ){
    console.log( "discount applied : 20 %");
    
}else if ( orderCount >5){
    console.log("discount applied :  10 %");
    
}else {
    console.log("Discount applied: X%"
);
    
}


