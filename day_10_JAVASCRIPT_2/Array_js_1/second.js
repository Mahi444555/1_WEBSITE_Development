//array in javascript always declare mostly with const datatype 
//in javascript array can stored different types of data 

const arr= [10,20,30,40,50];    //type 1st of decalation of an array in js
console.log(arr);

const arr1= new Array(10,20,'mahesh',40,50);    //type 2nd of declaration of array in js
console.log(arr1);

const arr2={
    fname:'mahesh',
    lname:'jadhav'
}
console.log(arr2);
console.log(arr2.fname);
console.log(arr2.lname);



//to convert array into string
console.log("converting array into string");
const arrr= ['mahesh',10,20,30,50];
// console.log(arrr.toString());       //converting into string 

// console.log(arrr.join("*"));    //to replace comma , and placed with *

// arrr.push(7)
// console.log(arrr);          //to add element at last of array index

// console.log(arrr.pop());        //to print last item from array used pop i.e. (remove last)

// arrr.pop();      //used to remove last element from an array
// console.log(arrr);

// delete arrr[1];      //used to delete any index item from array but it won't change length of an array after removed
// console.log(arrr); 
 
// arrr.shift()
// console.log(arrr);   //used to removed first item from array

//  arrr.unshift(100);
//  console.log(arrr); //used to add item to the first

