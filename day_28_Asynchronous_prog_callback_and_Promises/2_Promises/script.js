//create a promise constructor firstly
//create a promise constructor 


// const promiseobj=new Promise((good,bad)=>{
//   //create a setTimout function 
 
//   setTimeout(() => {
//     const data=["Apple","Mangoes","oranges","Pinapple","grapes"]
//     if(data.includes("Apple")){
//       good("Promise is fulfilled with value")
      
//     }else{
//       bad("Promise is rejected")
//     }
//   }, 3000);


// })

// // console.log(promiseobj)

// //apporoach to print or handle error for promise 
// promiseobj.then((msg)=>{
// console.log(msg);
// }).catch((error)=>{
// console.log(error);
// });






//let user guess the number 
const value=6;
const promiseobj=new Promise((resolve,reject)=>{
//generate random number using math.random()
const random=Math.floor(Math.random()*10)// it will generate a random number number b/w 0 to 9 
console.log(random);
if(value==random){
  resolve("Hurray.You guessed the number correct!")
}else{
  reject("Oops!your guessed number is incorrect")
}
})

console.log(promiseobj)

promiseobj.then((result)=>{
  console.log(result)
}).catch((error)=>{
  console.log(error)
})