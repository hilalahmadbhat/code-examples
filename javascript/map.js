/*
* Map function
* Produces new array
* Doesn't change existing array
* Iterates over each element of calling array  and  populates new array with elements returned from callback function
*/

var friends = ["zahida","ibrahim","qasim","marufa"]

const newfriends = friends.map((item)=>{
    return item.toUpperCase()
})



console.log(friends)
console.log(newfriends)

const numbers = [1,2,3,4,5]
const double = numbers.map((item)=>item*2)
console.log(double)