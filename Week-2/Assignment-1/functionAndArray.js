/**
 * max: a function for finding the max value of an array of numbers
 * @param {array} numbers - An array of numbers.
 */

function max(numbers) {
  // Initialize a variable name maxNum.
  let maxNum = 0

  // Using for loop, comparing each numbers[i] to the maxNum variable. If numbers[i] is greater than the current maxNum, assign numbers[i] to maxNum.
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxNum) {
      maxNum = numbers[i]
    }
  }
  return maxNum
}

/**
 * findPosition: a function for finding the first position of the target number inside an array of numbers.The position should be counted starting from 0, return -1 if the target can not be found.
 * @param {array} numbers - An array of numbers.
 * @param {number} target - The given target number.
 */

function findPosition(numbers, target) {
  // Initialize a variable name indexNum.
  let indexNum

  // Using for loop to loop over the numbers array.
  for (let i = 0; i < numbers.length; i++) {
    // 1. if numbers[i] equals to the target number, assign i to indexNum, then break out of the for loop.
    // 2. if there is no match, simply assign -1 to indexNum.
    if (numbers[i] === target) {
      indexNum = i
      break
    } else {
      indexNum = -1
    }
  }
  return indexNum
}

console.log(max([1, 2, 4, 5])) // should print 5
console.log(max([5, 2, 7, 1, 6])) // should print 7
console.log(findPosition([5, 2, 7, 1, 6], 5)) // should print 0
console.log(findPosition([5, 2, 7, 1, 6], 7)) // should print 2
console.log(findPosition([5, 2, 7, 7, 7, 1, 6], 7)) // should print 2 (the first position)
console.log(findPosition([5, 2, 7, 1, 6], 8)) // should print -1
