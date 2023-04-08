// {
    // var a=5;
    // console.log(b)
    // const c=10;
    // let an const are accessible inside this block only. this is clld block scope//
// }
// var b=9;
// console.log(a);
//it will show error as ReferenceError: b is not defined as let and const are in block scope .
// var a will be accessible as it is in global scope.

// var a=100;
// {
//     var a= 9;
//     let b=5;
//     const c= 2;
    
// }

// console.log(a)
// it will give 9 as output .. a ki value shadow ho jaaegi. thismis called shadowing.
// a=100 assign kia or a=9 shadowing hogya. value shadow krgyi..

// let b=100;
// {
//     var a= 9;
//     let b=5;
//     const c= 2;
//     console.log(b);
// }

// console.log(b)
// it will give output as 5 and 100 as b=5 in scope and b=100 is in script memory scope different from globalscope.

// let a= 100;
// {
//     var a=19;
// }
// it will throw an syntax error that identifier a has already been declared.this is illegal shadowing.... but we can do vice versa
// let a=100;
// function x(){
//     var a=10;
// }
//it will not show an error as var is in function scope,,, it is not interfering with the let a above....same for const

// var a= 100;
// {
//     let a=19;
// }
// it is perfectly valid.we can shadow like this