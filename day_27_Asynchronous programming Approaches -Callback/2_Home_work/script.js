let time=10;
const countdown = document.querySelector(".countdown");
countdown.innerHTML=time--;

//now make setTimout function

setTimeout(()=>{
    countdown.innerText=time--;
    setTimeout(()=>{
        countdown.innerText=time--;
        setTimeout(()=>{
            countdown.innerText=time--;
            setTimeout(()=>{
                countdown.innerText=time--;
                setTimeout(()=>{
                    countdown.innerText=time--;
                    setTimeout(()=>{
                        countdown.innerText=time--;
                        setTimeout(()=>{
                            countdown.innerText=time--;
                            setTimeout(()=>{
                                countdown.innerText=time--;
                                setTimeout(()=>{
                                    countdown.innerText=time--;
                                    setTimeout(()=>{
                                        countdown.innerText=time--;
                                        document.write("Hello Mj444555")
                                    },2000);
                                },2000);
                            },2000);
                        },2000);
                    },2000);
                },2000);
            },2000);
        },2000)
    },2000);
},2000);



