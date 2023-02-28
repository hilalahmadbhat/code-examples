/**
 * FindIndex
 * Returns the index of first element from array that satisfies the given callback function
 * Returns -1 if no element satisfies the function
 */

const numbers = [1,2,3,4,5]

const result = numbers.findIndex((item)=>item==3)
console.log(result)