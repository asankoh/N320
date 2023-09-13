/* The code is creating a new Promise object called `basicPromise`. The Promise constructor takes a
function as an argument, which is called the executor function. This function takes two parameters,
`resolve` and `reject`, which are functions that are used to either fulfill or reject the promise. */
let basicPromise = new Promise(function(resolve,rejected){
    let x = 10;
    if (x==10){
        resolve()
    } else{
        rejected()
    }
})


//basicPromise function will run if the promise is fulfilled (true).
basicPromise.then(function() {
    document.write("Basic Promise Resolved")
}, () => {
    document.write("Basic Promise is rejected!")
})

//another basic function using catch
// promises are often used with constants

const cPromise = new Promise(function(reject, resolve){
    let newNum = Math.random();
    if(newNum<0.5){
        resolve(newNum)
    }else{
        reject(newNum)
    }
})

//.catch is often used for when the statement is rejected(false)
//.then is ogten used for when the statement is resolved (true)
cPromise.then(function(num) {
    console.log("Promise Resolved!", num)
}).catch(function(num){
    console.log("Promise Rejected! ", num)
})


//promise when a setTimeout
const rNumPromise = new Promise(function(resolve, reject) {
    setTimeout(function (){
        let randNum = Math.floor(Math.random() * 10) + 1
        resolve(randNum);
    },2000);
});

rNumPromise.then(function(data){
console.log("SetTimeout Promise Resolved: ", data)
})

console.log("SetTimeout Initaited")


//Promise Chaining
const PromiseChain = new Promise(function(resolve, rejected){
    resolve(5);
});

PromiseChain.then(function(data){
    return data*2;
}).then(function(data){
    return data + 20;
}).then(function(data){
    console.log(data);
})

//make a promise statement involving turning an API into a JSON then displaying the content.
const fetchPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")

console.log("Fetched Promise: ", fetchPromise)

fetchPromise.then(function(response){
    const jPromise = response.json();
    jPromise.then(function(data){
        console.log("Data Received: " +  data[2].name)
    })
})