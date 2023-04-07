b();             /*output will be  100 */
console.log(x); /*output will be  1 */
a();            /* output will be 10*/ 

// we have called the fnctns and var before executingg the code and they will successfully work. ths is called hoisting.
var x=1;
function a(){
    var x=10;
    console.log(x);
}

function b(){
    var x=100;
    console.log(x);
}
