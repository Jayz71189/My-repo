/*
Define a function called avgVal that accepts an array of numbers as a parameter.
The function should return the average of all values in the array. If the array
is empty, it should return null.
*/

let results = 0;
let i=0;
function avgVal(a) {
  for (let i=a.length-1; i >= 0; i--)  {
    let value = a[i];
    results = (results + value) / a.length;
  }
  i--;
  return results;
}



// console.log(avgVal([5, 10]));         // 7.5
// console.log(avgVal([3, 7, 2, 1, 2])); // 3
// console.log(avgVal([]));              // null

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = avgVal;