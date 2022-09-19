//set initial value to 0
let count=0;

//select buttons & values 
const value=document.querySelector("#value");
const btns=document.querySelectorAll(".btn")

btns.forEach(function(btn){
  btn.addEventListener("click",function(e){
    const styles=e.currentTarget.classList
    console.log(styles)
    if(styles.contains("decrease")){
      count--;
    } else if(styles.contains("increase")){
      count++;
    }else{
      count=0;
    }
    value.innerHTML = count;
  })
})