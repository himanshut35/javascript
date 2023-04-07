
console.log(a);
let a= 10;
var b=2;
// ReferenceError: Cannot access 'a' before initialization ye error aaega due to temporal dead zone. 
// a ko memory m undefined to mil jaaega butr wo memory script m hgi which is different from globalspace and is not accessible.
// Temporal Dead zone is the phase between the hoisted and the initialization of a value. ex: ab jese isme a ko undefined tommemory allot ho jaaegi bt wo jb tk initialise nihga tb tk not accessible rhega ...is time phase ko temporal dead zone khte h.
// sirf let k sath tha h.... var k saaath ni.....lrt is more strict thn var....
// in above code window(a) will give undefined while window(b) will give 2.
// temporal code m reference error aata h

let a=10;
let a=100;
// itwill show syntax eerror but hm var lekr kr skte the. 

let a;
a=10;
console.log(a);
// it will work but const is more strict in this case. 

const b;
b=9;
// it wil show syntax error while let doesnt throw error in this case

const b=900;
b=800;
a=8;
console.log(a);
// TypeError: Assignment to constant variable.

// initialse and declare at the top to avoid temporal dead zone and to avoid unexpected error.