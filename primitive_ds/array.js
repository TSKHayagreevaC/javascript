// 20 tricky and popular situations that you can encounter when working with arrays in JavaScript:

//Using == instead of ===
let arr1 = ["1", "2", "3"];
let arr2 = ["1", "2", "3"];
console.log("1"==1);
console.log("==", arr1 == arr2); // false
console.log("===", arr1 === arr2); // false



//Unexpected Results due to Floating Point Precision
let arr3 = [0.1 + 0.2, 0.3];
console.log(arr3[0] == arr3[1]); // false



//Mutable Array
let arr4 = [1, 2, 3];
let arr5 = arr4;
arr5.push(4);
console.log(arr4); // [1, 2, 3, 4]



//Array length does not match item count
let sparseArr = [1, , , 4];
console.log(sparseArr.length); // 4



//Using 'this' in array methods
let obj6 = {filter: 'recent'};
let arr6 = ['recent', 'old', 'new'];
let filteredResults = arr6.filter(function(el){
  return el === this.filter;
}, obj6);
console.log(filteredResults); // ["recent"]



//Issue with false-y values
let arr7 = [0, '', null, undefined, NaN, false];
console.log(arr7.filter(Boolean)); // []



//The sort() function and numbers
let arr8 = [10, 11, 1, 2];
console.log(arr8.sort()); // [1, 10, 11, 2]



//The behaviour of 'indexOf' with NaN
let arr9 = [NaN];
console.log(arr9.indexOf(NaN)); // -1



//Using the spread operator for function calls
let numbersArr = [1, 2, 3];
console.log(Math.max(...numbersArr)); // 3



//Empty vs undefined vs "delete"
let arr10 = [1, 2, 3];
arr10[0] = undefined;
console.log(arr10); // [undefined, 2, 3]


//delete arr10[0];
console.log(arr10); // [ <1 empty item>, 2, 3 ]
arr10.splice(0,1);
console.log(arr10); // [ 2, 3 ]



//Array Destructuring
let x,y,z;
let threeNums = [1, 2, 3];
[x, y, z] = threeNums;
console.log(x,y,z); // 1 2 3



//The spread operator and concatenation
let arr12 = [1, 2, 3];
let arr13 = [...arr12, 4, 5, 6];
console.log(arr13); // [1, 2, 3, 4, 5, 6]



//for ... in vs for ... of
let arr14 = [1, 2, 3];
for(let i in arr14)
  console.log(i); // 0 1 2
for(let i of arr14)
  console.log(i); // 1 2 3



//Issue with array holes and map()
let arr15 = [1, , 3];
arr15.map((item)=>console.log(item));
// 1 undefined 3



//Empty array and reduce
let arr16 = [1, 2, 3, 4];
console.log(arr16.reduce((a,b)=>a+b)); // TypeError: Reduce of empty array with no initial value



//The slice() function and end index
let arr17 = [1, 2, 3];
console.log(arr17.slice(1, 1)); // []



//Using toString() function
let arr18 = [1, [2, 3]];
console.log(arr18.toString()); // 1, 2, 3



//Negative index in slice
let arr19 = [1, 2, 3, 4, 5];
console.log(arr19.slice(-2)); // [4, 5]



//The splice() function and many elements
let arr20 = [1, 2, 3];
console.log(arr20.splice(1, 1, "a", "b", "c")); // [2]
console.log(arr20); // [1, "a", "b", "c", 3]



//Unintended mutation with the shift() method
let arr21 = [1, 2, 3];
let first = arr21.shift();
console.log(first); // 1
console.log(arr21); // [2, 3]