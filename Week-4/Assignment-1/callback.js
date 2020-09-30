// Assignment 1: Callback Function - Complete the function below to show a delayed result in console.

/*
 * delayedResult: a function below to show a delayed result in console.
 * @param {number} n1 - A number.
 * @param {number} n2 - A number.
 * @param {number} delayTime - A number.
 * @param {function} callback - A function passed in the delayedResult function as a callback.
 */

function delayedResult(n1, n2, delayTime, callback) {
  // your code here

  // Starts with initialize a variable named result.
  let result
  // Check if both n1 and n2 are numbers. If true, sum up n1 and n2. If false, remind the user of a message.
  if (typeof n1 === 'number' && typeof n2 === 'number') {
    result = n1 + n2
  } else {
    result = 'Either n1 or n2 is not a number.'
  }

  // To invoke the callback function, either use an anonymous function, an arrow function, or the bind.() method. In this case, use an arrow function to call the callback.
  setTimeout(() => {
    callback(result)
  }, delayTime)
}

delayedResult(4, 5, 3000, function (result) {
  console.log(result)
})
// 9 (4+5) will be shown in the console after 3 seconds

delayedResult(-5, 10, 2000, function (result) {
  console.log(result)
}) // 5 (-5+10) will be shown in the console after 2 seconds

delayedResult('-5', 10, 2000, function (result) {
  console.log(result)
}) // Either n1 or n2 is not a number.
