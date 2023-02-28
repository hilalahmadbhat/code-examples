/**
 * Find
 * Returns the first element from array that satisfies the given callback function
 * Returns undefined if no element satisfies the function
 */

const numbers = [1,2,3,4,5]

const result = numbers.find((item)=>item==6)
console.log(result)