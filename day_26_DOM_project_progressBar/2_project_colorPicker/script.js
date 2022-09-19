
let colors=["red","blue","orange","green","yellow","indigo","violet"]

let container=document.querySelector("#container");
let h1=document.querySelector("h1");
let clickedColor=document.querySelector("#clickedColor");


for (const color of colors){
    let box=document.createElement("div");
    box.classList.add("box");
    container.appendChild(box);

    box.style.backgroundColor = color;
    box.addEventListener("click",()=>{
      h1.innerHTML="You have selected:";
      clickedColor.innerHTML=color;
      clickedColor.style.backgroundColor=color;
    })
}

