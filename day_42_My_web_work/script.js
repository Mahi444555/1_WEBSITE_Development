
// document.getElementById("items").addEventListener("click",mahi)


function mahi(){
    fetch("data.json")
        .then((response)=>{
            let data = response.json();
            return data;
        
        }).then((data)=>{
            console.log(data);

            let output ="";

            
            data.forEach((item)=>{
                output+=`
                <div class="container1">
                <div class="container2">
                 <img class="img" src="${item.thumbnail}" alt="not found">
                 <h1 class="one1">${item.id}</h1>
                 <p class="two2">${item.brand}</p>
                 <p class="three3">${item.title}</p>
                 <p class="four4">${item.category}</p>
                 <p class="price">${item.price}$</p>
                 <button id="btn">view more</button>
             </div>
             </div>
                `
            })
            
            document.getElementById("output").innerHTML=output;
        })
}

mahi();