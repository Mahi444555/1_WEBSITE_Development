//select the target element
let btn= document.getElementById("btn")
let data=document.getElementById("data")


const url="https://breakingbadapi.com/api/quote/random";


//Add event listeners to click on button and display the data using api
btn.addEventListener("click",async function(){  //here we created async funtion with normal func
    data.innerHTML="Loading....";
    //Write out  logic to get the data in try() and catch() block whr try is for DOM-related info and catch is for error related data print

    try {
        //Fetch the data
        let res=await fetch(url)    //here we passing url which storing link address  & using await because above async func return's  promise if we not using await then gives error(TypeError:res.json...) 
                                        //so to handle that promise we have to use here await keyword
        //convert data or link url into json object
        let object=await res.json();
        console.log(object[0].quote); //the data stored in form of array of obj hence write index also [0]
        console.log(object[0].quote_id);
        
        
        //create templete literals
        // let output="";
        // object.forEach((post)=>{
        //     output+=   `
        //             <ol>
        //             <li>${post.quote}</li>
        //             <li>${post.quote_id}</li>
        //             </ol>
        //     `
        //     data.innerHTML=output;
        // })

        //or using another way templet literals if it's not in array format 
        data.innerHTML=`
        <h1>${object[0].author}</h1>
        <p>${object[0].quote}</p>
        <p>${object[0].series}</p>
        `

    } catch (error) {
        console.log(error);
    }
})

//without using try and catch block and aync and await method above code
// fetch(url)
//     .then(res=>res.json())  //convering stringify to text
//     .then((data)=>{
//         console.log(data)
//     }).catch((err)=>{
//         console.log(err)
//     })
