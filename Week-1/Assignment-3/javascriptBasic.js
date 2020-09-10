/*
Assignment 3: Javascript Basic Instructions
You will learn the basic skill of javascript next week, but it's a good time to try to overcome
some simple problems by your own first. Your job is to complete the following two functions.
1. countAandB: count how many 'a' and 'b' letters in the given input and return the total
number.
2. toNumber: convert English letter to number, let 'a' to be 1, 'b' to be 2 and so on.
In both questions, you will only get 'a', 'b', 'c', 'd' or 'e' in the input array. 
*/

function countAandB(input) {
  // declare a variable "count" and set to 0
  let count = 0

  // using for loop to loop over the given input array
  for (let i = 0; i < input.length; i++) {
    // if input[i] equals to "a" or "b", let add 1 to the current count
    if (input[i] === 'a' || input[i] === 'b') {
      count += 1
    }
  }
  return count
}

function toNumber(input) {
  // declare a variable "output" as an empty array
  let output = []

  // using for loop to loop over the input array
  for (let i = 0; i < input.length; i++) {
    // using switch statement to check each elements of the given input
    switch (input[i]) {
      case 'a':
        output.push(1)
        break
      case 'b':
        output.push(2)
        break
      case 'c':
        output.push(3)
        break
      case 'd':
        output.push(4)
        break
      case 'e':
        output.push(5)
        break
    }
  }
  return output
}

let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c']
console.log(countAandB(input1)) // should print 4 (3 'a' letters and 1 'b' letter)
console.log(toNumber(input1)) // should print [1, 2, 3, 1, 3, 1, 3]

let input2 = ['e', 'd', 'c', 'd', 'e']
console.log(countAandB(input2)) // should print 0
console.log(toNumber(input2)) // should print [5, 4, 3, 4, 5]
