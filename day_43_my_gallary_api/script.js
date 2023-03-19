

async function mahi(){
   let response=  await fetch("https://api.escuelajs.co/api/v1/products")
    let data = await response.json();
    
    let output="";
    data.forEach(function(item){
        output+=`
        <div class="cards">
        <img src=${item.images} alt="not found">
            <h1>${item.id}</h1>
            <p>${item.title}</p>
            <p>${item.price}</p>
            <p>${item.description}</p>

        </div>
        `
    })
    document.getElementById("output").innerHTML=output;

}
    // await fetch("https://api.escuelajs.co/api/v1/products")
    //         .then((respnose)=>{
    //             let data = respnose.json();
    //             return data;
    //         }).then((data)=>{
    //             console.log(data)
                

    //             let output="";

    //         })

// }
mahi();