/////////////////////////////////////////////////////
// console.log("normal function");
// function namee(){
//     console.log("mahesh jadhav");
// }
// namee();    //calling


// //////////////////////////////////////////////////////////
// console.log("arrow function");

// const arrown = (a,b) =>{
//     console.log(a+b);
// }
// arrown(10,40);  //calling arrow function

// ///////////////////////////////////////////////////////
// console.log("returning value");

// function normal(a,b){
//     return a*b;
// }
// console.log(normal(10,10));

/////////////////////////////////////////////////////////


console.log("callback function ");

//----------------
function add(){         //1st function
    console.log(10+20);
}

function hello(text){      //argumented function   2nd function 

    // console.log(a);
    text();
}

hello(add);     //calling 2nd function i.e. hello named and passing 1st function name 
                //as argument



/////////////////////////////////////////////////


console.log("What is hoisting:  we can call a function before the body of function or declaration of it");

fun1();     //calling a function before it's body 
var a=100;
console.log(a);
function fun1(){
    console.log("its'a hoisting of function....");
}

///////////////////////////////////////////////////////////////////////

console.log("what is closuers in javaScript: func within func where child fucntion access all properties of parent fucntion");

function first()
{
    var x=100;

        function childe(){       //its child or nested function it will access parent's property
            console.log(x); 
        }
    childe();    //calling child function
}
first();    //calling parent function




///////////////////////////////////////////////////////////////