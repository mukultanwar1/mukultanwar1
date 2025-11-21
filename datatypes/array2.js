 //let a= [12,22,23,54];
 //console.log(a[1]);


// array with for in

 //
 //for (let i in a){
   //  console.log(a[i] / 2);
// }

//  iterate

// map 
// It is used to iterate over every element of the array
// It can return a new array
// It can change the values of the array's elements
// It can not change the number of values

let a= [1,2,3,4];

let b = a.map(
    function(ele){
        if(ele % 2){
            return ele + 2;
        }
    }
)
console.log(b);


// filter 
// It is used to iterate over every element of the array
// It can return a new array
// It can not change the values of the array's elements
// It can change the number of values

// At the time of iteration when it comes true, at that time it will return that element not the value that is evaluated

// let a= [0,1,2,3, -2, null];

// let b = a.filter(
//     function(ele){
//         return ele;  
//     }
// )

// console.log(b);



/*
0
null
false
""
undefined
NaN  */




