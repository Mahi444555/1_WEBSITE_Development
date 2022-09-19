let smsApp= ()=>{

    let textEnteredLength=document.querySelector("#text-area").value.length;
    console.log(textEnteredLength)

let rem = document.querySelector("#chars");
let total =100;
let ans = total - textEnteredLength;
console.log(ans);
rem.innerHTML="-" + ans;
}



//or this logic use
// function smsApp(){
    
//     let textEnteredLength=document.querySelector("#text-area").value.length;
//     console.log(textEnteredLength)

// let rem = document.querySelector("#chars");
// let total =100;
// let ans = total - textEnteredLength;
// console.log(ans);
// rem.innerHTML="-" + ans;
// }


//logic for password convert into text 
let changePassword=()=>{
  let passwordBox=document.querySelector("#pass-box");  //accessing it
  // let x=passwordBox.value;
  // console.log(x);
 
  let typeofinput= passwordBox.getAttribute("type");
  if(typeofinput ==="password"){
    passwordBox.setAttribute('type','text');    //its same as we inserting again password to that input-box .innerHTML 
  }
  else{
    passwordBox.setAttribute('type','password');  //if we unclick the checkbox then again it will convert into hidden password
  }
}

// logic for like and dislikes app
let likescount=0;
let dislikecount=0;
let total=0;

let liked=()=>{
  likescount++;
  total++;
  let likesbtn = document.querySelector("#likes");
  likesbtn.innerHTML=likescount;
  document.getElementById("total").innerHTML=total;
}

let disliked=()=>{
  dislikecount++;
  total++;
  let dislikebtn = document.querySelector("#dislikes");
  dislikebtn.innerHTML=dislikecount;
  document.getElementById("total").innerHTML=total;
}







//focus text field
function showHighlight(e){
  e.style.background="blue"
  e.style.color="white"
  e.style.fontSize="20px"
  e.style.fontWeight="bold"
}

function resetHighlight(e){
e.style.background="white"
}


const dataform=document.querySelector("form")
dataform.addEventListener("submit",function(evt){
  console.log("submitted data successfully");

  evt.preventDefault();
})


window.onresize=resizewindow

function resizewindow(){
  console.log(window.outerWidth);
  console.log(window.outerHeight);
}