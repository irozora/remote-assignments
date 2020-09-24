/**
 * twoSum: Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * @param {array} nums - An array of numbers.
 * @param {number} target - The given target number.
 */

function twoSum(nums, target) {
  // Initialize 2 variables: rest and newArr.
  let remain
  let newArr = []

  // Using for loop to loop over the nums array
  for (let i = 0; i < nums.length; i++) {
    // Using the given target to subtract nums[i], then assign the value to the remain variable.
    remain = target - nums[i]

    // Loop over the nums length with j being assigned the value i + 1.
    for (let j = i + 1; j < nums.length; j++) {
      // If nums[j] is strictly equal to remain, push nums[i] and nums[j] to newArr.
      if (nums[j] === remain) {
        newArr.push(i, j)
        return newArr
      }
    }
  }
  // if no matches is found, simply return this line.
  return 'No matches found'
}

console.log(twoSum([2, 7, 11, 15], 9)) // [0, 1]
console.log(twoSum([1, 2, 2, 3, 7, 11, 15], 4)) // [0, 3]
console.log(twoSum([2, 2, 3, 7, 11, 15], 4)) // [0, 1]
console.log(twoSum([4, 9, 11, 15], 9)) // No matches found
console.log(twoSum([15, 11, 2, 7], 9)) // [2, 3]
