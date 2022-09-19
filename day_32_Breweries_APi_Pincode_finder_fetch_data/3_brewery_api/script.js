//create and Build and Html element
//now we directly writting all html code in js using templet-literals
document.body.innerHTML=   `
<div class="heading-container">
<h1>Brewery List</h1>
<img  class="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXwwjFuok876hgKG1-3rGSSo-h_gozkVjQDw&usqp=CAU" alt="not_found" width="400px" height="200px">
<div id="mainContainer" class="main-container"> </div>
</div>
`;

//Writing a logic to get the data 
const getData = async ()=>{
    try {
        //fetch the data from the url
        // const url="https://api.openbrewerydb.org/breweries";
        const data=await fetch("https://api.openbrewerydb.org/breweries");
        const brewerys = await data.json(); //converting data 
        mainContainer.innerHTML="";
        brewerys.forEach((brewery)=>{
            console.log(brewery)
            displayData(brewery)
        })
    } catch (error) {
        console.log(error)
    }
}

getData();  //callling function

const displayData=(obj)=>{
    //using DOM with Template literal syntax
    mainContainer.innerHTML+=  
        `
        <div class="container">
        <h3>Brewery Name:<sapn>${obj.name}</span></h3>
        <p id="p1">Brewery Type:<span>${obj.brewery_type}</span></p>
        <p>Brewery Address:<span>${obj.street}</span></p>
        <p>Brewery City:<span>${obj.city}</span></p>
        <p>Brewery Phone:<span>${obj.phone}</span></p>
        <p>Brewery country:<span>${obj.country}</span></p>
        </div>
        `
}

