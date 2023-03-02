/**
 * Promise object
 * Its a javascript object
 * It promises the result that will be retruned in future
 * That result will be passed to consuming code automatically
 * Javascript promise represent the eventual completion or failure of an asyncronous task
 * Promise object acts as a link between producing code and consuming code
 */

var promise1 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("promise is fulfilled")
    },2000)
    
});


promise1.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log(error)
})

var promise2 = new Promise(function(resolve,reject){
    reject("error encountered")
    
});


promise2.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log(error)
})