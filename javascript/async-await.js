/**
 * aysnc await
 * async keyword before a function make function to always return a promise
 * await can be only used inside async function
 * await suspends the execution until promise settles
 */


//Example 1
/*async function f(){
    return "result"
}

f().then((result)=>{
    console.log(result)
})*/

//Example 2
async function f(){
    var promise = Promise.resolve(1)
    const result = await promise
    return result
}

f().then((result)=>{
    console.log(result)
})
