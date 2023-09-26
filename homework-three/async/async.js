
/**
 * The function `dogAPI` fetches 20 random dog images from the Dog API.
 * @returns the results of the API call, which is a JSON object containing information about random dog
 * images.
 */  

/*
async function dogAPI(){
    try{
    const response = await fetch("https://dog.ceo/api/breeds/image/random/20")
            if(!response.ok){
                console.log("API error has occurred.")
                throw new Error("API was not retrieved")
            } 
               const results = await response.json();
               return results;
    }catch(error){
        console.log("Error in fetching data")
    }
}

 async function displayImg(data)   {
    data = await dogAPI();
    console.log(data)

    const flexContainer = document.querySelector('.flex-container');

    if(flexContainer){
        for (let i = 0; i < data.message.length; i++) {
            // Create an <img> element for each image URL
            const dogImg = document.createElement("img");
            dogImg.src = data.message[i];
            flexContainer.appendChild(dogImg);
        };
    }else{
        console.log("Failed:", new Error("Falied to display images."))
        document.write("Wasn't able to display images. Check to see if you successful retrieved element from HTML Page")
    }
 }

 displayImg();
*/