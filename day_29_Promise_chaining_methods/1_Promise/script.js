//promise 

let promiseobj=new Promise((resolve,reject)=>{      //whre resolve and reject only variables like true and false
    setTimeout(() => {
        
        let data = 10;
       resolve(data)
    },2000);
})

// console.log(promiseobj);

promiseobj.then((result)=>{
    console.log(result);    //10
    return result*2;
}).then((result)=>{
    console.log(result);    //10*2=20
    return result*2;
}).then((result)=>{
    console.log(result);
})
// .catch((err)=>{
//     console.log(err);   //it will only execute when some error will comes i.e. not satisfy the condition
// }).finally((final)=>{
//     console.log("Finally always get executes");
// })