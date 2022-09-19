const div=document.querySelector(".box");
div.addEventListener("click",function(){
    div.innerHTML="Clicked"; //assigning this name to div
    setTimeout(function(){
        div.classList.add('circle');   //adding to tht div class 'circle' 
        setTimeout(function(){
            div.style.backgroundColor="blue";
            div.style.fontSize ="100px";
            setTimeout(function(){
                div.classList.remove('circle'); //again removing tht class 'circle'
                div.innerHTML="mahesh";
            },250)
        },500)
    },2000)
})