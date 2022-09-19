var arr= [10,20,30,40.5,50];
console.log(arr);
// console.log(arr.push(7));       //used to push the element at last index in array
// console.log(arr.toString());    //used to convert array to string
// console.log(arr.join("*"));     //used to replaced or join by insted of comma , to any symbols
// arr.pop();
// console.log(arr);   //used to remove or pop the last item from an array

// console.log(arr.shift());    //used to remove element at first index of array
// arr.unshift(100)
// console.log(arr);  //used to add items from first

// delete arr[0]
// console.log(arr);   //it deletes the item but schema or stucture or length of an array will as it is...

////// normal function and arrow function 
function a(){   //normal function declare by function keyword
    console.log("it's normal function using function keyword");
} a();  //calling fucntion

// array function it's dosen't use function keyword it use datatype i.e. const to declare it
const arrown = ()=>{
    console.log("it a arrow function ");
} 
arrown();   //callling

//parameterisex function 
const arr1 = (x,y)=>{
    console.log(x+y);
}
arr1(100,200);



//some important methods in 1. callbacks function 2. hoisting of function 3. closuers
function a(){
    console.log("first function callback");
}
function b(text){
    text();
}
b(a);   //here we passing function as argument in another function called callback


//hoisting of function calling function before it's body 

func1();    //calling directly before it's body memoryphase required
var a= 20;
console.log(a);
function func1(){           //only normal function support hoisting and arrow function dose not support it
    console.log("hositing of function");
}


//clousers : means function within function where child function inherits or access all property of parent function
function a1(){
    var x=100;
    function b1(){      //child function 
        console.log(x);
    }
    b1();   //calling b1
}
a1();   //calling a1

//////////////////////////////////////////////////////// array methods in javascript
console.log("forEach function read each item line by line");
const ar = [10,20,30,40,50];
ar.forEach(print);  //here we passed a function print before it's body to forEach() function

function print(item){   //passing one argument to iterate all elements from array sine by line used to read each item
    console.log(item);  
}

///////////
console.log("include method used to show item is present or not in an array true or false");

const aa = ar.includes(99);
console.log(aa);

//////////////////////find function
console.log("find and filter method to compare less than greater than where filter gives entire array ");
const ab = [10,20,30,40,50];
const bd= ab.find(n=> n>30);        //find only gives one value where it's get true
console.log(bd);        


const filt = ab.filter(n=> n>30);       //.filter method gives array of all value get satisfied condition
console.log(filt);

////////////////////////map function 


const mp = ab.map(n=> n*2);     //thse function read each item and apply diffrent opeation on each item
console.log(mp);


//function date and time 

var d = new Date();
document.write(d.getDate());

var bbb= setInterval(mahi,1000);
function mahi(){
    document.getElementById("yer").innerHTML="happy birthday";
}











