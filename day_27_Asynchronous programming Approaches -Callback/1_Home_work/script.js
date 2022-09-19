//you go resturent 

// function table1(){
//     console.log("ordered Pizza");
// }

// function table2(){
//     console.log("ordered tea");
// }

// function table3(){
//     console.log("order meal for 20 people");
// }
// setTimeout(table1,2000);
// setTimeout(table2,1000);
// setTimeout(table3,5000);

//callback function

// const arr = [1,2,3,4,5,9,7,8,9];

// // let new_arr = arr.map(item=> {      //wher .map() function used to return new array we passing map as argument to new_arr fun
// //     return item*2;  
// // })
// // console.log(new_arr);

// //to find only even number using callback with .filter()

// const evenNumber=(num)=>{
//     return num% 2===0;   //if number remainder is 0 then it's even number
// }

// let filterEven= arr.filter(evenNumber);     //passing function name i.e. evenNumber as argument 
// console.log(filterEven);

//create  function sum,mul,div,sub in arrow_function format with call back

// const sum=(num1,num2)=>{
//     return num1+num2;
// }

// const mul=(num1,num2)=>{
//     return num1*num2;
// }

// const div=(num1,num2)=>{
//     return num1/num2;
// }

// const sub=(num1,num2)=>{
//     return num1-num2;
// }

// //now just call above all function by passing them as an argument in another function
// let calculate=(num1,num2,callback)=>{
//     return callback(num1,num2);
// }

// console.log(calculate(10,20,sum));      //here we passing sum function as argument to calculate function ie. callback
// console.log(calculate(10,20,mul));  
// console.log(calculate(10,20,div));
// console.log(calculate(10,20,sub));

//or

// const result =()=>{
//     console.log("hello");
// console.log(sum(10,20));
// console.log(mul(10,20));
// console.log(div(10,20));
// console.log(sub(10,20));

// }
// result();



//example for callback using forEach() funciton
// let arr_fruits=["Apple","Mango","banana","orange","Graps"]

// arr_fruits.forEach(function(items,i){
//     console.log(i+1, items);
// })


// let msg=()=>{
//     alert("hello");
// }

// let callmsg=(callbck)=>{
//     callbck();
// }

// callmsg(msg);//passing callmsg function argument as another function i.e. msg()

//best example for the callback() hell

// preparing pizza
// 1.raise a pizza dough
// 2.rolldough
// 3.pourSauce
// 4.add topings
// 5.bake pizza
// 6.deliver pizza  here we creating this function and then just calling them through the single funciton

// const time=1000;    //1000ms=1sec
// function raiseDough(callback){
//     console.log("Waiting for Dough...");
    
//     setTimeout(()=>{
//         console.log("Dough is ready...");
//         callback();
//     },5*time);

// }
// //2
// function rolldough(callback){
//     console.log("Waiting for Dough...");

//     setTimeout(()=>{
//         console.log("Dough is rolled...");
//         callback();
//     },3*time);
// }

// //3
// function PourSauce(callback){
//     console.log("Pouring the Sauce...");

//     setTimeout(()=>{
//         console.log("Pour the sauced...");
//         callback();
//     },1*time);
// }

// //4
// function addToppings(callback){
//     console.log("Adding the Toppings...");

//     setTimeout(()=>{
//         console.log("Toppings added...");
//         callback();
//     },2*time);
// }

// //5
// function bakePizza(callback){
//     console.log("Baking the Pizza...");

//     setTimeout(()=>{
//         console.log("Pizza is Baked...");
//         callback();
//     },10*time);
// }

// //6
// function deleiveringPizza(callback){
//     console.log("Deleivering pizza...");

//     setTimeout(()=>{
//         console.log("Pizza is deveivered...");
//         callback();
//     },7*time);
// }
//now call all above funtion in nesting form i.e. callback hell

// raiseDough(()=>{
//     rolldough(()=>{
//         PourSauce(()=>{
//             addToppings(()=>{
//                 bakePizza(()=>{
//                     deleiveringPizza(()=>{
//                         console.log("happy meal");
//                     })
//                 })
//             })
//         })
//     })
// })


//homework:Callback to implement below task: 
//1.Print the countdown from 5 to 1 and display Hello World message once the countdown reaches to 0 
//2. You can not use any loop you can not use if else condition Use callback hell mechanism to deploy
// the timer Use arrow function to create the same Print your output on Browser screen


let time=1000;  //1000ms=1sec

function five(callback){
    console.log(5);
    document.write(5);
    setTimeout(()=>{
        callback();
    },5*time);
}

//2
function four(callback){
    console.log(4);
    document.write(4);
    setTimeout(()=>{
        callback();
    },4*time);
}
//3
function three(callback){
    console.log(3);
    document.write(3);
    setTimeout(()=>{
        callback();
    },3*time);
}

//4
function two(callback){
    console.log(2);
    document.write(2);
    setTimeout(()=>{
        callback();
    },2*time);
}
//5
function one(callback){
    console.log(1);
    document.write(1);
    setTimeout(()=>{
        callback();
    },5*time);
}


//call above all function
one(()=>{
    two(()=>{
        three(()=>{
            four(()=>{
                five(()=>{
                    console.log("hello world");
                    document.write("hello world");
                })
            })
        })
    })
})
















