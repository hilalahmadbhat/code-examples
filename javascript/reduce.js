/**
 * reduce
 * Iterates over each element of given array
 * Produces accumulated result based on the callback function
 * For each iteration a value is returned from callback function and passed as argument to next iteration which can be used as required
 */

const numbers = [1,2,3,4,5]

const sum = numbers.reduce((prevsum,item,index)=>prevsum=prevsum+item)
console.log(sum)