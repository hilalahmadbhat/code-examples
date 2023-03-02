/**
 * Callback function
 * Callback function  is passed as an argument to another function
 * Invoked inside outside function as and when required
 * Can be used for resource loading(like loading external js file and then after onload use its function/varaibles)
 */

//Example 1
/*function outer(){
    cb()
}
outer(cb)

function cb(){
    alert("invoked from outer function")
}*/

//Example 2
function loadScript(path,cb){
    //script loaded successfully
    cb()
}
var path = "abc.js"
loadScript(path,function (){
    alert("script loaded successfully")
})