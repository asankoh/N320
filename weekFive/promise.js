/**
 * The function `allPromises` creates three promises that resolve after different time intervals and
 * returns a promise that resolves when all three promises have resolved.
 * @returns The function `allPromises` returns a promise that resolves with an array of the fulfilled
 * values of the promises `p1`, `p2`, and `p3`.
 */
async function allPromises() {

const p1 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        console.log("First Promise is complete")
        resolve("First Fulfilled")
    }, 1000)
})

const p2 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        console.log("Second Promise is complete")
        resolve("Second Fulfilled")
    }, 2000)
})

const p3 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        console.log("Third Promise is complete")
        resolve("Third Fulfilled")
    }, 3000)
})

const pAny = Promise.all([p1,p2,p3])
    return pAny;
}


/**
 * The function `returnData` asynchronously waits for all promises to resolve and then logs the data.
 */
async function returnData(){
    let data = await allPromises();
    console.log(data)
}

returnData();


//async function with an api call.
//promises are often used to pull data from an external source

async function goChuck(){
    //API call
    const response = await fetch("http://api.chucknorris.io/jokes/random");
    //format into json
    const results = await response.json();

    return results;
}

goChuck().then((data)=>{
    console.log(data);
    let chuckMsg = document.createElement("p");
    chuckMsg.innerHTML = data.value;
    document.getElementsByTagName('body')[0].appendChild(chuckMsg)

   //.value is from the api format 
}).catch((error) =>{
    console.log("ERROR!")
})