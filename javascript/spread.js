/**
 * spread operator
 * We can use this to expand each letter of string and convert  to array
 * Can be used to copy an array into another array
 * Can be used to concatenate multiple arrays
 * Copy one object into another and we can also update some keys in new object
 */

var name = "hilal"
console.log(...name)

const boys  = ["hilal","mehraj"]
const girls  = ["sadiya","nafu"]
const all = [...boys,...girls]
console.log(all)


const person1 = {name: "hilal ahmad bhat",address: "pahloo"}

const person2 = {...person1,name:"different name"}
console.log(person2)