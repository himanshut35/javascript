//  function a(){
//     console.log(b);
// }
// var b=10;
// a();

// it will give output as 10 because function bad m cll krra h or var b=10 phle hi dedia h and if we change it like//

// function a(){
//     console.log(b);
// }

// a();
// var b=10;

// it will give output as undefined because fnctn phle cll hogya or use b ki kioi value ni mili

// function a() {
//     c();
//     function c() {
//         console.log(b);
//     }

// var b=10;
// a();
// it will give output as 10 because function bad m cll krra h or var b=10 phle hi dedia h and also wo call hojaaega b=10 nested m b//
// if we chnge it like

// a();
// var b=10; // it will give output as undefined because fnctn phle cll hogya or use b ki kioi value ni mili


// function a() {
//     var b = 10;
//     c();
//     function c() {

//     }
// }
// a();
// console.log(b);
// it will give error as ReferenceError: b is not defined because ye b ki value localmscope h or hm ise global space m cll krre h

// scope is a chain of all lexicle environment and the parent references.
// lexicle envirnmntis local memry plus reference to lexicle env of parent(lexicle)
// in above code c is lexically inside a that means c's lexicle parent is A.
// it searches for the variable and it it does not find it locally it goes to find it in the parent and so on. and if it still does not find it returns not defined


function a() {
    c();
    function c() {
        
        console.log(b)
    }
}
a();
var b = 10;
