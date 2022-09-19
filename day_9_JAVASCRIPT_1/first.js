console.log('hi all');
var a=10;
var b=20;
console.log(a+b);

//var datatype supports all datatypes
var a="mahesh";
console.log(a);

// object creation 
var marks={
        a:10,
        b:20
}
console.log(marks);


var a = true;
var b= false;
console.log(a);

//difference between null and undefined
var a=null;
console.log(a);     //it will give null

var v;
console.log(v);

//Arithmatic Operators

var a=10;
var b=20;
console.log(a+b);       //30
console.log(a-b);       //-10
console.log(a*b);       //200
console.log(a/b);       //0.5
console.log(a%b);       //10

//interview question
console.log("interview question1:-");

var a=10;
var b=2;
var c="7";     //it's string it won't get add with other numbers
console.log(a+b+c);

console.log("interview question12-");

var a=10;
var b=2;
var c='7';      //its again character won't get add with anyother
console.log(b+b+c);    // 2+2+'7'= 4+'7'  = 47

console.log("interview question3:-");

// const x=10;             //here, in const datatype we can't re-declar or re initialize value
// console.log(x);                 //gives 10 
//         x=11;                          //error i.e.ncaught TypeError: Assignment to constant variable.


console.log("interview question4:-");
console.log("it's called hoisting ")
console.log(x);
var x=100;      
console.log(x);         //output will be both 100 100

console.log("interview question5:-");

// var a=10;
// {
//         var a=-10;      //it will assign to the a i.e. last updated value of a=-10
// }
// let b=a;        //b=-10;
// {
//         let b=-20;              //in let datatype we can't re-declare same name variable 
//                                 //only we can re-initialize it 
// }
// console.log(b);         //Identifier 'b' has already been declared


console.log("interview question6:-");

// var d=10;
// let d=20;
// console.log(d);  //'d' has already been declared