// function chgclr(){
//     document.body.style.backgroundColor="red";
// }
// function name(){
//     document.getElementById("mj").innerHTML="mahesh";
// }
// function color(){
//     document.body.style.backgroundColor="white";
// }



// const arr = [10,20,30,80,100];

// const b= arr.reduce(maximum,0);

// function maximum(curr, max1)
// {
//     if(curr > max1)
//     {
//         max1=curr
//     }
//     console.log(max1);
// }


// const maximum = Math.max(10,20,50,90,100);
// console.log(maximum);

//to find the maximum from an array 
const arr = [10,20,60,100,90];

// const b= arr.reduce(maxi, 0);   //here we passing and calling  maxi() i.e. functin which perform opn 

// function maxi(total, i){
//     if(total > i)
//     {
//         i =total;
//     }
//     return i;
// }
// console.log(b);


// Math libarary 

const b = Math.max.apply(null, arr);
console.log(b);

console.log("to generate random number");
const rand = Math.random();
console.log(rand);

console.log("to generate random number");
const mini = Math.min(100,200,4,1,5);
console.log(mini);


//.reduce(fun_name,no)  ... .filter(n=> (n>2)) .... .find(). 

const arr1 = [10,20,50,11,100];
const b1 = arr1.reduce(maxi,0);  //here passing big as function and 0 as initial value

function maxi(max, i){
    if(max > i)
    {
        i=max;
    }
    return i;
}
console.log(b1);


const b3 = arr1.filter(n=> (n>20));
console.log(b3);            //it will return or gives an array or all values where get satisfied

const bb = arr1.find(n=> (n>20));
console.log(bb);        //will return or gives only one single value wher it's get satisfied



const b5 = arr1.join("*");
console.log(b5);



const b4= Math.max(10,20,100,1,5);
console.log(b4);            //using Math-libarary to in that all property


//convert array into binary and also into string using .toString();
const b6 = arr1.toString(2);
console.log(b6);








