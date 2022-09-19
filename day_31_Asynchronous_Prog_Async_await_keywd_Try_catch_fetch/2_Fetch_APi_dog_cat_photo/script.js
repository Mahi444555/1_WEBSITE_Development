//using aysnc await try catch and fetch we fetching the api of cat and dog
//selecting target buttons/ elements
let but1=document.getElementById("cat")
let but2=document.getElementById("dog")
let cat=document.getElementById("cat_result")    //we inserting all data in output_name div of html-page
let dog=document.getElementById("dog_result")


//for cat button1
but1.addEventListener("click",async function(){ //here using async with normal fucntion whr aync always returns promises

    cat.innerHTML="Loading_imges....";

const catt="https://aws.random.cat/meow"
//here using try and catch block
    try {
        let res=await fetch(catt)    //fetching data
        let data= await res.json();  //here await for to handle the promise return by aysnc and converting data into .json()
        console.log(data);
        //create the templet literals
            cat.innerHTML= `
                <img src="${data.file}" alt="Images" height="300px" width="400px">
            `

    } catch (error) {
        console.log(error);
    }
})


//for dog button2

but2.addEventListener("click",async ()=>{

    const dogg="https://random.dog/woof.json" //assinged link to dogg variable
    //here using try and catch block
    try {
        
        let res =await fetch(dogg)
        let data= await res.json(); //converting that link api into json data
        console.log(data);
        //create templete literals and insert data into dog_result division 
        //check if the data contains .mp4 file display video els imges
        if(data.url.includes("mp4")){
            //dispaly video result
            dog.innerHTML=  `
                <video width="400" height="300" controls>
                <source src= "${data.url}" type="video/mp4">
                </video>`;
        } 
        else{
            //display images
            dog.innerHTML=`  
            <img src="${data.url}" alt="Images" height=300px" width="400px">
            `  }
        
    } catch (error) {
     console.log(error);   
    }
})