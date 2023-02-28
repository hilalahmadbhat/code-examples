/**
 * array destructuring and object destructuring
 */

const numbers = [1,2,3,4,5]

const [a,b,c,...rest] = numbers
console.log(a,b,c,rest)


var person = {name: "hilal ahmad bhat",job: "developer",address: "jk"}

var {name,job,address} = person
console.log(name)