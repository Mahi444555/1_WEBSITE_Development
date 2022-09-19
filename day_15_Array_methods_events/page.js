//Array methods and events
console.log("slice is used to print perticular range start index- end index -1")
const arr = [10,20,30,44,55,66,100];
console.log(arr);
const b= arr.slice(1,4);    //it will print from index 1 to 4-1 index   20,30,44,
console.log(b);

console.log("splice method used to replace item at perticular index");


const aar = [10,20,30,40,50,60];
console.log(aar);
const bb= arr.splice(2,0,"mj");
console.log(bb);



console.log("uses of Rest operator and spared operator...");
console.log("whrer 1. Rest operator symbol arr(...name) whre it will used in function argument i..e upper side and spared opeator arr(...name) used when function calling ")


//Rest operator...

function a(...input){  //Rest operator we used ...name upper side
    console.log(input);
}
a(10,20,30,40,50);


//spared function... always written when we calling function pass as parameters
console.log("how to merge or join two array ");
console.log("Join two array elements using spared() method");
const Arr= [1,2,3,4];
const Brr= [5,6,7];

const c = [...Arr, ...Brr];
console.log(c);


console.log("join two array using .concat method");

const first = [10,20,30,40];
const sec = [50,60];

const joine = first.concat(sec);

console.log(joine);



console.log("home workss");

const cc = A1.join("*");
console.log(cc);



console.log("Array.from(new Set(array_name) used to remove duplicate items");
const bbb = Array.from(new Set(A1));    //these is used to remove duplicate numbers from array
console.log(bbb);


