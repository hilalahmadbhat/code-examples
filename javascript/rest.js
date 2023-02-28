/**
 * rest operator
 * It allows functions to accept indefinite number of arguments
 * Argument passed are converted to an array
 */

sum(1,2,3);

function sum(...args){
    console.log(args)
}