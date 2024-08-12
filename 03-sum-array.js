/* Define a function called sumArray that takes in an array of numbers and
returns the total sum of all the numbers.
*/

let results = 0;
let i=0
function sumArray(a) {
  for (let i=a.length-1; i >= 0; i--)  {
    let value = a[i];
    results += value;
  }
  i--;
  return results;
}
  



// console.log(sumArray([1, 2]));        // => 3
// console.log(sumArray([5, 6, 4]));     // => 15
// console.log(sumArray([7, 3, 9, 11])); // => 30
// console.log(sumArray([]));            // => 0

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = sumArray;