var quoteAPI = new Promise((resolve, reject) =>{
    fetch("https://api.quotable.io/quotes?limit=20")
    .then((response) =>{
        if(!response.ok){
            reject("Fetch Failed");
            console.log("Error in retrieving API from fetch statement")
            return
        } 
        return response.json();
    })
    .then((results) =>{
        resolve(results)
    })
})

quoteAPI.then(() =>{
    document.write("Basic Promise Resolved")
}, () => {
    document.write("Basic Promise is rejected!")
})

async function displayQuote(){
   const data =  await quoteAPI;
    console.log(data)

    const flexContainer = document.querySelector('.flex-container');

    if(flexContainer){
        data.results.forEach((quote) => {
            const quoteText = document.createElement("p");
            quoteText.innerHTML = quote.results;
            flexContainer.appendChild(quoteText);
        
        })
    }
}

displayQuote()