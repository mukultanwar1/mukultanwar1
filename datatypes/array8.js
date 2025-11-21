// 1
// Check if a number is greater than 10 and less than 20
// 15
// ✅ Output: Number is between 10 and 20

// 25
//❌ Output: Number is outside the range
// let nums = 15
// if (nums < 10 && nums > 20 ){
//     console.log ("number is between 10 and 20")
// }else{
//     console.log(" number is outside the range")
// }


// let nums = 10;
// if ( nums % 2 == 0 && nums % 5 === 0){
//     console.log(" Condition True");
    
// }else console.log("Condition False");

// let age = 12
// if( age > 18  &&  age < 60 ){
//     console.log('Eligible age range')
        
// }else {
//     console.log("out of range");
    
// }


// let a = -1
// let b = -1
// if ( a > 0 && b > 0 ){
//     console.log('both positive ');
    
// } else if ( a < 0 && b < 0){
//     console.log("both negative");
    
// }else if ( a > 0 && b < 0){
//     console.log(" one or both negative ");
    
// } else if (a < 0 && b > 0){
//     console.log(" one or both negative");
    
// }


// 6
// Check if either of two numbers is negative
// a=-3, b=7
// a=2, b=9


// let a = -3
// let b = -3
// if ( a < 0 && b > 0 || a > 0 && b < 0){
//     console.log("at least one negative ");
    
// }else if ( a > 0 && b > 0 ){
//     console.log("no negative number");
    
// }else if ( a < 0 && b < 0){
//     console.log(" both negative number");
    
// }


//Check if number is not divisible by 3

// let nums = 15
// if (nums % 3 === 0){
//     console.log(" divisible by 3");
    
// } else if ( nums % 3 !== 0){
//     console.log(" not divisible by 3");
    
// }


// 9
// Check if number is between 1–100 or equal to 500
// 60

// // let nums = 151
// // if ( nums > 0 && nums < 100){
// //     console.log("within range");
    
// // }else if ( nums == 500){
// //     console.log(" equal to 500");
    
// // } else if ( nums > 150){
// //     console.log( " in valid ");
    
// // }


// let a = 6
// let b = 7
// if ( a % 2 == 0 && b % 8 == 0){
//     console.log( "both even ");
    
// }else if ( (a % 2 !== 0 && b % 2 !== 0) ||
//  ( a % 2 == 0 && b % 2 !== 0) ||
//      ( a % 2 !==0 && b % 2 !== 0)

     

// ){
//     console.log(" one is odd");
    
// }


// Check if a character is not a vowel
// 'b'
// ✅ Not a vowel


// 'a'
//  It is a vowel

// let  word  = "c"
// if ( word  === "a" || word === "e" || word === "i" ||  word === "u" || word === "o"){
//     console.log("it is a vowel");
    
// }else {
//     console.log( "not a vowel ");
    
// }

// Check if password length > 8 and no spaces
// "strongPass1"
// ✅ Valid password


// "my pass"
//  Contains space

// let password = "strongpass1"
// if (password.length > 8 ){
//     console.log(" valid password");
    
// } else  if ( password.length < 8 ){
//      console.log( " contain space");
// }


// 11
// Check if student passed in all 3 subjects (≥33 each)
// 45, 60, 72
//  Passed all subjects

// 30, 50, 70
//  Failed in one subject

// let math = 30
// let english = 50 
// let science = 70
// if (math > 33 && english > 33 && science > 33 ){
//     console.log( "passed all subject");
    
// } else {console.log( "failed in one subject" );}


// Check if any subject is failed (<33)
// 60, 25, 40
// ✅ Failed in one subject


// 70, 80, 90
// ❌ All passed

// let math = 70;
// let english = 12;
// let science = 80;
// if ( math > 33 && english > 33 && science > 33 ){
//     console.log("passed all subject");
    
// }else { console.log("failed in one subject");
// }


// 13
// Check if number divisible by 2 and not by 3
// 8
// ✅ Valid
// 6
// ❌ Divisible by bo

// let nums = 2
// if ( nums % 2 == 0  && nums % 3 !== 0 ){
//     console.log("vslid");
// }else if ( nums % 3 == 0 && nums % 2 == 0){
//     console.log( "divisible by both");
    
// }


// 15
// Check if character is alphabet and not digit
// 'A'
// ✅ Alphabet

// '5'
// ❌ Digit

// 16
// Check if person is eligible to vote (age ≥18) and has voter ID
// age=20, has_id=True
// ✅ Eligible to vote


// let age = 20
// let id_has = true 
// if ( age >= 18 && id_has === true){
//     console.log("eligible to vote");
    
// }else {
//     console.log("not eligible ");
    
//}

// Check if number is not between 50 and 100
// 30
// ✅ Outside range

// 70
// ❌ Inside range


// let nums = 55
// if ( nums > 50 && nums < 100){
//     console.log(" inside range");
    
// }else {
//     console.log("out side the range");
    
// }


// 18
// Check if temperature is below 0 or above 40
// -5
// ✅ Extreme weather

// 25
// ❌ Normal temperature


// let temperature = -10
// if ( temperature < 0){
//     console.log("extreme weather");
    
// }else if ( temperature > 0 && temperature < 30 ){
//     console.log("normal temperature");
    
// }

// 19
// Check if username is not empty and password length > 8
// ("user", "mypassword")
// ✅ Valid input

// ("", "mypassword")
// ❌ Username empty


// let username = " mukulta"
// let password = "mypassword"
// if ( username.length  > 4 &&  password.length > 8 ){
//     console.log(" vailed input ");
    
// }else if ( username = " "){
//     console.log("username is empty ");
    
// }


// Check if number is divisible by 5 or 7 but not both
// 10
// ✅ Divisible by 5 only


// 14
// ✅ Divisible by 7 only


// // 35
// // ❌ Divisible by both

// let nums = 30

// if((nums%5==0&&nums%7==0)){
//     console.log("divisible by both")
    
// }else if (nums % 7 == 0 ){
//     console.log("divisible by 7 ");
// }else
//     if ( nums % 5 ==0 ){
//         console.log("divisible by 5");
//     }
//21
// Check if year is a leap year
// 2024
// ✅ Leap year
// 2023
// ❌ Not a leap year

// let year = 2026;
// if ((year % 4 === 0 && year % 100 !==0) || (year % 400=== 0)){
//     console.log("leap yaer");
    
// }else {
//     console.log("not a leap year");
    
//}

// 22
// Check if student eligible for scholarship (marks ≥85 and attendance ≥75)
// marks=90, attendance=80
// ✅ Eligible
// marks=80, attendance=90
// ❌ Not eligible

// let marks = 80
// let attendance = 90
// if ( marks >= 85 && attendance >= 75 ){
//     console.log("eligible");
    
// }else { 
//     console.log("not eligible");
    
// }




// Check if number lies outside range -10 to 10
// -20
// ✅ Outside range

// 5
// ❌ Inside range

// let nums = 5
// if ( nums > -10 && nums < 10){
//     console.log(" inside range ");
    
// }else {
//     console.log("out side the range");
    
// }


// 26
// Check if number is multiple of 3 or 5
// 9
// ✅ Multiple of 3

// 10
// ✅ Multiple of 5

// let nums = 7
// if ( nums % 3 !==0  && nums % 5 !== 0){
//     console.log("neither");
    
// }else if ( nums % 3 === 0 ){
//     console.log("multiply by 3");
    
// }else if (nums % 5 === 0){
//     console.log("multiply by 5");
    
//}

// Check if number is not multiple of 2 and not multiple of 3
// 7
// ✅ Condition True

// 6
// ❌ Divisible by both

// let nums = 6
// if (nums % 2 ===0 && nums % 3 === 0){
//     console.log("divisible by both");
    
// }else if ( nums % 2 !==0 && nums % 3 !== 0){
//     console.log("condition true");
    
// }

// Check if both Boolean inputs are either True or both False
// a=True, b=True
// ✅ Condition True

// a=False, b=False
// ✅ Condition True

// let a = true
// let b = false
// if ( a === true && b === true || a=== false && b === false){
//     console.log("condition true");
    
// }else {
//     console.log("condition false");
    
// }


// Check if entered character is not a digit
// 'A'
// ✅ Not a digit

// '9'
// ❌ Digit

// let ch = '9'
// if ( ch > 0 && ch < 100){
//     console.log("digit");
    
// }else {
//     console.log("not a digit ");
    
// }

// Check if username is "admin" and password is "1234"
// ("admin", "1234")
// ✅ Valid login
// ("user", "1234")
// ❌ Invalid login

// let username = "muku"
// let password = "123"
// if ( username.length  < 5  && password.length < 5 ){
//     console.log("invailed password ");
    
// }else {
//     console.log( "valed password");
    
// }


// Check if string contains “@” and “.” (email format)
// "user@gmail.com"
// ✅ Valid email
// "usergmail.com"
// ❌ Invalid email
// let email =  "usergmail.com"
// if ( email.includes("@")&&email.includes(".") ){
//     console.log("vailed email");
    
// }else {
//     console.log("invailed email");
    
// }

// Check if two strings start with same character
// "apple", "ant"
// ✅ Same starting letter

// "car", "bus"
// ❌ Different letters

// let str1 = "apple"
// let str2= "ant"
// if (str1.includes("a")&& str2.includes("a")){
//    console.log("same starding letter");
   
// }else{
//     console.log("different letters");
    
// }


// let arr = [1,2,3,4]
// //output = [1,2.3.4.0,1,2,3]
// let result = arr.map(function(ele,ind){
//     console.log( ...arrele,ind);
    
// })

//  username = "tarun", password = "1234"
//  Output:
//  "Login successful"
//  (Otherwise: "Invalid login")

// let username = "tarun"
// let password = "1234"
// if ( username.length > 3 && password.length > 3){
//     console.log("login successful");
    
// }else{
//     console.log("invailed login");
    
// }


//  age = 14
//  Output:
//  "Access denied – you must be 18+"

// let age = 14
// if ( age <= 18 ){
//     console.log("you must be 18");
    
// }else {
//     console.log("you are vaalid");
    
// }




// amount = 550
//  Output:
//  "10% discount applied"
// //  (If amount < 500: "No discount")
// let amount = 550
// if ( amount >= 500){
//     console.log(amount /100*10 + " (10% discount)")

    
// }else {
//     console.log(
//      "no discount")
// }


// Input:
//  marks = 82
//  Output:
//  "Grade B"
//  (90+ → A, 80–89 → B, 70–79 → C, else → Fail)

// let marks = 82
// if ( marks >= 90){
//     console.log("grade A");
    
// }else if (marks >= 80 && marks <= 89){
//     console.log("grade B");
    
// }else if ( marks >= 70 && marks <= 79){
//     console.log(" grade c");
    
// }else{
//     console.log("fail");
    
// }

// Input:
//  isLoggedIn = true
//  Output:
//  "Dashboard visible"
//  (Otherwise: "Please log in")

// let login = true
// if( login === true){
//     console.log("Dashboard visible");
    
// }else {
//     console.log(" please log in");
    

// }


// Input:
//  username = ""
//  Output:
//  "Guest"

// let username = ""
// if (username.length > 2){
//     console.log(" login successful");
    
// }else{
//     console.log(" guest");
    
// }

// Input:
//  name = "Raj", email = ""
//  Output:
//  "Form invalid"
//  (If both filled: "Form submitted")

// let name = "raj"
// let email = ""
// if (name.length > 2 && email.length > 2 ){
//     console.log(" form submitted");
    
// }else{
//     console.log("form invalid");
    
// }

// isFeatureEnabled = false
//  Output:
//  "Feature OFF"
//  (If true: "Feature ON")

// let  feature = false
// if ( feature === true ){
//     console.log(" feature on");
    
// }else{
//     console.log("feature off");
    
// }


// Input:
//  theme = "dark"
//  Output:
//  "Dark mode activated"
// //  (If light: "Light mode activated")

// let theme = "dark"
// if ( theme === "dark"){
//         console.log(" dark mode activated");
        
// }else{
//     console.log(" light mode activated");
    
// }

// Input:
//  age = 20
//  Output:
//  "Adult"
//  (If below 18 → "Minor")
 
// let age = 17
// if ( age >= 18){
//     console.log("adult");
    
// }else {
//     console.log("minor");
    
// }


// Input:
//  inStock = false, canBackorder = true
//  Output:
//  "Order allowed"
//  (If both false → "Out of stock")

// let inside = false
// let backorder = false
// if ( backorder === true){
//     console.log(" order allowed");
    
// }else {
//     console.log("out of stock");
    
// }


// Input:
//  token = "abc123", sessionActive = true
//  Output:
//  "Authenticated"
//  (Otherwise: "Authentication failed")

// let taken = "abc123"
// let sessionactive = true 
// if (sessionactive === true){
//     console.log("authenticated");
    
// }else {
//     console.log(" authentication failed");
    
// }


// Input:
//  price = -10
//  Output:
//  "Invalid price"
//  (If >=0 → "Valid price")

// let price = -10
// if ( price >= 0){
//     console.log("valid price");
    
// }else {
//     console.log(" invalid price");
    
// }


// Input:
//  name = null
//  Output:
//  "Anonymous User"

// let name = null
// if ( name === " "){
//     console.log("user is found");
    
// }else {
//     console.log("anonynous user");
    
// }


// Input:
//  num = 9
//  Output:
//  "Odd number"
//  (If even → "Even number")

// let nums = 9
// if (nums % 2 == 0){
//     console.log("even number");
    
// }else{
//     console.log("odd number");
    
// // }


// Input:
//  cartTotal = 999
//  Output:
//  "Free shipping unlocked"
//  (If <999 → "Add more items for free shipping")

// let  cartTotal = 999
// if (  cartTotal <= 999){
//     console.log("add more items for free shipping");
    
// }else {
//     console.log("free shipping unlocked");
    
// }

// Input:
//  notifications = 3
//  Output:
//  "Show badge"
//  (If 0 → "No notifications")

// let notifications = 3
// if ( notifications > 0 ){
//     console.log(" show badge");
    
// }else{
//     console.log(" no notification");
    
// // }

// Input:
//  isLoading = true
//  Output:
//  "Button disabled"
//  (If false → "Button active")


// let isLoading = true
// if (isLoading === true ){
//     console.log( " button disable");
    
// }else{
//     console.log("button false");
    
// }

// Input:
//  selectedLanguage = undefined
//  Output:
//  "English"


// let selectedLanguage = undefined
// if ( selectedLanguage === undefined){
//     console.log("english");
    
// }


// Input:
//  role = "admin", active = true
//  Output:
//  "Full access granted"
//  (If active but not admin → "Limited access")
//  (If inactive → "Access denied")

// let role = "admin "
// let active = true
// if ( role.length >= 2  && active === true  ){
//     console.log("full access granted");
    
// }else if ( role === " " && active === true){
//     console.log("limited access");
    
// }else {
//     console.log("access denied");
    
// }
console.log(7);








