///////////////////////////////
// fetch("https://jsonplaceholder.typicode.com/users")     //here we are using fetch funciton to fetch url api's data
// .then(function(response){
//     //console.log(response)   //here we only printing that in url format
//     return response.json(); //this .json() method return that all info in text format actual data

// }).then(function(data){
//     console.log(data);
// }).catch(function(err){
//     console.log(err);
// })
// 

//new project
//selection of button1
let butn1=document.getElementById("button1").addEventListener("click",getText)   //where passing two argument i.e. click and getText is funciton 

////first method to fetch but shortcut syntax

// create function to get the text from local text file i.e.(text.txt)
// function getText(){
//     fetch("test.txt")   //here we directly passing file_name to fetch it's data
//     .then(res=>res.text())
//     .then(data=>{
//         console.log(data)
//     }).catch(err=>{
//         console.log(err)
//     })
// }

//same method but long syntax
function getText(){
 fetch("test.txt")
  .then((response)=>{
        let data= response.text();
        return data;
    }).then((data)=>{
        console.log(data);
        document.getElementById("output").innerHTML=data;
    }).catch((err)=>{
        console.log("error");
    }).finally((res)=>{
        console.log("it will always get executes");
    })

}


 //for button2 all post.json data file whn we click on btn2 print
 let button2= document.getElementById("button2")
 
 button2.addEventListener("click",getjsondata)  //whre click is onclic and, getJson is funciton name  we calling before its body

 //1st method but shortcut syntax
 function getjsondata(){
    //logic to fetch the json data
    fetch("posts.json")
    .then(res=>res.json())
    .then(data=>{
        console.log(data)

    //display the data using forEach loop
    let output="";      //empty varible we using templet literals
    data.forEach(function(post){
        output+=`<ol>
        <li>${post.title}</li>
        <li>${post.body}</li>
       </ol> `
    })
    document.getElementById("output").innerHTML=output;
    }).catch(err=>{
        console.log(err);
        
        //display the error message in DOM
        document.getElementById("output").innerHTML=err;
    })
 }



//now we will use external APi to fetch the data from the server using url

//Add an event listener to button3

document.getElementById("button3").addEventListener("click",getOnlinedata)
function getOnlinedata(){   //created function 
    fetch("https://api.github.com/users")
    .then((response)=>{
        let data= response.json();  //converted that data from stringyfy into txt or readable using .json() 
        return data;
    }).then((data)=>{
        console.log(data);
        //now all data will display/insert in html page  or document page using templet literals
        let output="" ; //created empty variable
        data.forEach((post)=>{
            output+= `
                <ul>
                <li>${post.login}</li>
                <li>${post.id}</li>
                <img src="${post.avatar_url} alt="${post.login}" width="300px" height="300px">
                </ul>
            `
            //here we inserting that all data to html div: output
            document.getElementById("output").innerHTML=output;
        })

    }).catch((err)=>{
        console.log(err)
    })
}


//same code for above differet syntax
// document.getElementById("button3").addEventListener("click",getApiData);

// //function to get the data from an external api 
// function getApiData(){
//   fetch("https://api.github.com/users")
//   .then(res=>res.json())
//   .then(data=>{
//     console.log(data);

//     //display the data to the UI 
//     let output="";
//     data.forEach((user)=>{
//       output+=`
//       <li>${user.login}</li>
//       <img src="${user.avatar_url} alt="${user.login}" width="300px" height="300px">
      
//       `;
//     })
//     //Merging the data to div with id output 
//     document.getElementById("output").innerHTML=output;
//   }).catch(error=>{
//     console.log(error);
//     //Display error message
//     document.getElementById("output").innerHTML=error;
//   })
// }










////////--------------------------- below code is original copy of lavish jain sir github link
 //selection of button1
// document.getElementById("button1").addEventListener("click",getText)


// //function to get the text from local text file
// function getText(){
//   fetch("test.txt")
//   .then(res=>res.text())
//   .then(data=>{
//     console.log(data)

//     //display to the UI
//     document.getElementById("output").innerHTML=data;
//   }).catch(err=>{
//     console.log(err)
//   })
// }

// //Mechanism to get Post.json data in the DOM 
// document.getElementById("button2").addEventListener("click",getjsondata)

// //function to get the json data from a local Json file 
// function getjsondata(){
//   //logic to fetch the json data
//   fetch("posts.json")
//   .then(res=>res.json())
//   .then(data=>{
//     console.log(data)

//     // /display the data using forEach loop 
//     let output="";
//     data.forEach(function(post){
//       output+=`
      
//       <li>${post.title}</li>
//       <li>${post.body}</li>
      
//       `
//     });
//     document.getElementById("output").innerHTML=output;
//   }).catch(err=>{
//     console.log(err);

//     //Display the error message in DOM 
//     document.getElementById("output").innerHTML=err;
//   });
// }


// //We will use external APi to fetch the data from the server using url


// //Add an event listerner to button3
// document.getElementById("button3").addEventListener("click",getApiData);

// //function to get the data from an external api 
// function getApiData(){
//   fetch("https://api.github.com/users")
//   .then(res=>res.json())
//   .then(data=>{
//     console.log(data);

//     //display the data to the UI 
//     let output="";
//     data.forEach((user)=>{
//       output+=`
//       <li>${user.login}</li>
//       <img src="${user.avatar_url} alt="${user.login}" width="300px" height="300px">
      
//       `;
//     })
//     //Merging the data to div with id output 
//     document.getElementById("output").innerHTML=output;
//   }).catch(error=>{
//     console.log(error);
//     //Display error message
//     document.getElementById("output").innerHTML=err;
//   })
// }






