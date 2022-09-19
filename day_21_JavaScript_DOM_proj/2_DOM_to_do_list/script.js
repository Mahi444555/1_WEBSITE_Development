
// const button=document.querySelector(".button")
 
// button.addEventListener("click",()=>{
//   //take input from using  box
//   const text=document.getElementsByClassName("text")[0].value;
//   // console.log(text);
//   // create a new list instance 
//   const li=document.createElement("li");
//   //Add text to the list
//   li.innerText=text;          //or li.innerHtml=text;
//   let listelement=document.querySelector(".list")
//   listelement.appendChild(li);//appending all list item in ol available in index.html
// //  clear input box
// document.getElementsByClassName("text")[0].value="";    //this is used to clear the value once we added in inputbox
// })




const button= document.querySelector(".button")
button.addEventListener("click",function(){

  let input=document.getElementsByClassName("text")[0].value;

  //creat one list item element
  const li= document.createElement("li");
  li.innerHTML=input;
  //not just insert into ul-list
  const ul = document.querySelector(".list");
  ul.appendChild(li);
  //
  document.getElementsByClassName("text")[0].value="";
})

