// to select id use:
// document.getElementById("parag").innerHTML='<h1>Hello mahesh</h1>';

// function Myfun(){
//  var heading = document.getElementById("heading");
//  heading.innerHTML ='<h1> updated name is : im mahesh</h1>';
//  heading.style.fontSize="50px";
//  heading.style.color="blue";
// }

//to select class name:         //where class selector always returns array of elements hence write .[0]th index and then listners

// document.getElementsByClassName("btn")[0].addEventListener("click",function(){  //addEventListener works as onclik event but directly

//   document.getElementsByClassName("list-item")[0].style.color ="red";
//   document.getElementsByClassName("list-item")[0].innerHTML="hello mahi";

//   let listitem=document.getElementsByClassName("list-item");
//   console.log(listitem.length); //to calculate the length of item


// })


// let lielement = document.getElementsByTagName("li");
//      //console.log(lielement.length);

//     // let firstelement = lielement[0].innerHTML;  //used to select perticular index elemnt
//     // console.log(firstelement);

//     //this is used to select/print entire all elemetn using loop
//     for(let index = 0; index < lielement.length; index++){
//     const ele = lielement[index];
//     console.log(ele);

// }


//querySelector()
let ulliElement = document.querySelectorAll("ul li.item1");
console.log(ulliElement);
ulliElement.innerText="New item";