/**
 * Promise Chaining
 */


//Example 1

/*var promise1 = new Promise(function(resolve,reject){
    resolve(1)
});

promise1.then((data)=>{
    console.log(data)
    return data*2
}).then((data)=>{
    console.log(data)
    return data*2
}).then((data)=>{
    console.log(data)
    return data*2
}).then((data)=>{
    console.log(data)
    return data*2
}).then((data)=>{
    console.log(data)
    return data*2
})*/

//Example 2
/*Promise.all([
    new Promise( (resolve,reject) => { resolve(1) }),
    new Promise( (resolve,reject) => { resolve(2) }),
    new Promise( (resolve,reject) => { resolve(3) }),
    new Promise( (resolve,reject) => { resolve(4) }),
    new Promise( (resolve,reject) => { resolve(5) })
]).then((result)=>{
    console.log(result)
})*/

//Example 3
let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
  ];
  
  // map every url to the promise of the fetch
  let requests = urls.map(url => fetch(url));
  
  // Promise.all waits until all jobs are resolved
  Promise.all(requests)
    .then(responses => responses.forEach(
      response => console.log(response)
    ));







