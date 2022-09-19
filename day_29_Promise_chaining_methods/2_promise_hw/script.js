// let roomclean=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("Room is cleaned")
//     }, 4000);
// })

// let removeGarbage=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Garbage is removed")
//     },3000);
// })

// let gattheprize = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("Got the prise")
//     }, 1000);
// })

// //lets use chaining mechanism on the promise

// roomclean.then(function(result){
//     console.log(result);
//     return removeGarbage
// }).then(function(result){
//     console.log(result);
//     return gattheprize

// }).then(function(result){
//     console.log(result);
// })


//Promise with 3 rounds to clearify interview project,Technical,hr

let doproject=new Promise((resolve,reject)=>{           //1
    let projectdone= true;
    if(projectdone==true){
        resolve("project is done");
    }
    else{
        reject("project is not done ");
    }
})

let Technicalround=new Promise((resolve,reject)=>{      //2
    let projectdone=false;
    if(projectdone==true){
        resolve("you get cleared technical round");
    }
    else{
        reject("not cleared technical round");
    }
})

let hr=new Promise((resolve,reject)=>{          //3

    resolve("you passed and get the job");
})


// doproject.then((result)=>{
//     console.log(result);
//     return Technicalround
// }).then((result)=>{
//     console.log(result);
//     return hr
// }).then((result)=>{
//     console.log(result);
//  }).catch((err)=>{
//     console.log(err);
// }).finally((result)=>{
//     console.log("it will always get executed");
// })

//promise.allSettled()
// let promiseall= Promise.allSettled([doproject,Technicalround,hr])
// // console.log(promiseall);
// promiseall.then((result)=>{
//     console.log("All promises are resolved hence it get executed");
//     console.log(result);
// }).catch((err)=>{
//     console.log("some promises are rejected hence it get executed");
//     console.log(err);
// })


//promise.race()
//Promise.all method 
let promiseall=Promise.race([doproject,Technicalround,hr])
// console.log(promiseall)
promiseall.then(function(result){
    console.log("All promises are resolved");
    console.log(result);
}).catch((err)=>{
console.log("Some promises are rejected");
console.log(err)
})
