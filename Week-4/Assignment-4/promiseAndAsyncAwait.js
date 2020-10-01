//Assignment 4: Promise & Async / Await  (Advanced Optional)
/*
 * delayedResultPromise: a function below to show a delayed result in console, using promise.
 * @param {number} n1 - A number.
 * @param {number} n2 - A number.
 * @param {number} delayTime - A number.
 */

function delayedResultPromise(n1, n2, delayTime) {
  // your code here ...

  // Since we're calling the promise via the new keyword, this will return a promise object. We pass in a function taking two arguments: resolve and reject.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof n1 === 'number' && typeof n2 === 'number') {
        // Once the promise is resolved, the promise status will be resolved, and the promise value will be n1 + n2
        resolve(n1 + n2)
      } else {
        // If the promise is rejected, the promise status will be rejected, and the promise value will be the following message.
        reject('Either n1 or n2 is not a number.')
      }
    }, delayTime)
  })
}

delayedResultPromise(4, 5, 3000).then(console.log) // 9 (4+5) will be shown in the console after 3 seconds
delayedResultPromise('4', '5', 3000).then(console.log) // Uncaught (in promise) Either n1 or n2 is not a number.
delayedResultPromise(4, '5', 3000).then(console.log) // Uncaught (in promise) Either n1 or n2 is not a number.
delayedResultPromise(8, 100, 6000).then(console.log) // 108 (100+8) will be shown in the console after 6 seconds
delayedResultPromise(4, '5', 3000)
  .then(console.log)
  .catch((error) => console.error(error)) // Since we're using catch block for the rejected promise, the message "Either n1 or n2 is not a number." will be logged into the console.

/*
 * main: a function below to show a delayed result in console, using async/await.
 */
async function main() {
  // your code here, you should call delayedResultPromise here and get the result using async/await.

  /* 
  To make async/await works, add the await keyword inside the async function. Assign the result to a variable named delayResult.
  may change the arguments of delayedResultPromise to the desired numbers.
  */
  try {
    const delayResult = await delayedResultPromise(4, 5, 3000)
    // Either the returned promise is resolved or rejected, print out the delayResult.
    console.log(delayResult)
  } catch (error) {
    console.error(error)
  }
}

main() // result will be shown in the console after <delayTime> second
// in the case above, 9 (4+5) will be shown in the console after 3 seconds
