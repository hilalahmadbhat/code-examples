/**
 * Filter
 * Produces new array that consists of elements from the original array
 * only those elements will be included in the produced array that pass the test in the callback function
 */

const numbers = [1,2,3,4,5,6,7,8,9,10]
const oddnumbers = numbers.filter((item)=>item%2!=0)
console.log(oddnumbers)
const evennumbers =  numbers.filter((item)=>item%2==0)
console.log(evennumbers)
console.log(numbers)