function hasTargetSum(array, target) {
  // Write your algorithm here
 for (let i = 0 , n = array.length ; i < (n / 2) ; i++){
   for(let k = 0 ; k < n; k++) {
     if(k != i && (array[i] + array[k] )=== target) {
        // k = k + n
        // i = i + n
        return true
     }
   }
 }
 return false
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  for the first half of numbers in the array , find another number whose combined total equals the target
  iterate through the entire array to find the second value
  return true if there is a pair of numbers who total equals the target
  terminate the loop
  if we iterate through the entire array without finding a pair, then return false
*/

/*
  Add written explanation of your solution here
  use a nested loop to see if one number in the array added to another number in the array will
  total to the target value
  make sure that we're not adding the same array index to itself
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
