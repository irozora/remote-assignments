/**
 * count: a function for returning an object which shows the count of each characters.
 * @param {array} input - An array of numbers.
 */

function count(input) {
  // Initialize 2 variables: obj and currentChar.
  let obj = {}
  let currentChar

  // Using for loop to loop over the input array
  for (let i = 0; i < input.length; i++) {
    // Assign input[i] to currentChar. If obj[currentChar] hasn't been defined, the value of the property will be set to undefined as default.
    currentChar = input[i]

    // If obj[currentChar] is equal to undefined, set its value to 1. Else, increments the value.
    if (obj[currentChar] === undefined) {
      obj[currentChar] = 1
    } else {
      obj[currentChar]++
    }
  }

  return obj
}

let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'x']
console.log(count(input1)) // should print {'a':3, 'b':1, 'c':2, 'x':1}

/**
 * groupByKey: a function for return an object which shows the summed up value of each keys.
 * @param {array} numbers - An array of objects. Each object includes 2 properties, 1 for key and the other for value.
 */

function groupByKey(input) {
  // Initialize 3 variables: obj, newKey and newValue.
  let obj = {}
  let newKey
  let newValue

  // Using for loop to loop over the input array
  for (let i = 0; i < input.length; i++) {
    // Assign input[i]['key'] to newKey. If obj[newKey] hasn't been defined, the value of the property will be set to undefined as default.
    newKey = input[i]['key']

    // If obj[newKey] is equal to undefined, assign input[i]['value'] to newValue.
    // If not, add input[i]['value'] to obj[newKey] and assign to newValue.
    if (obj[newKey] === undefined) {
      newValue = input[i]['value']
    } else {
      newValue = obj[newKey] + input[i]['value']
    }
    obj[newKey] = newValue
  }

  return obj
}

let input2 = [
  { key: 'a', value: 3 },
  { key: 'b', value: 1 },
  { key: 'c', value: 2 },
  { key: 'a', value: 3 },
  { key: 'c', value: 5 },
]
console.log(groupByKey(input2)) // should print {'a':6, 'b':1, 'c':7}
