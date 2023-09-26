//Promise All
//meaning that all promises has to be true for it to run.

/* const p1 = new Promise(function(resolve, reject)
{
    setTimeout(function(){
        console.log("First Promise has resolved!")
        resolve(10)
    }, 1000);
})

const p2 = new Promise(function(resolve, reject)
{
    setTimeout(function(){
        console.log("Second Promise has resolved!")
        resolve(20)
    }, 000);
})

const p3 = new Promise(function(resolve, reject)
{
    setTimeout(function(){
        console.log("Third Promise has resolved!")
        resolve(10)
    }, 3000);
})

Promise.all([p1, p2, p3]).then(function(results){
console.log(`Results ${results}`)
}) */

//results refers to the parameters in the resolve. 10, 20 , 30


//Promise All when one is rejected

/*
const p4 = new Promise(function(resolve, reject){
    setTimeout(function(){
    console.log("First Promise has resolved")
    resolve(40)
    }, 1000)
})

const p5 = new Promise(function(resolve, reject){
    setTimeout(function(){
    console.log("Second Promise has rejected")
    reject(50)
    }, 2000)
})

const p6 = new Promise(function(resolve, reject){
    setTimeout(function(){
    console.log("Third Promise has resolved")
    resolve(60)
    }, 3000)
})

Promise.all([p4,p5,p6]).then(function(value){
    console.log(`Resolve" ${value}`)
}).catch(function(value){
    console.log(`Reject: ${value}`)
}) */

//Due to p5 being rejected, it goes and completes the promise all statement before p6.


//Promise Any
//meaning if just one of the statements is true, it will run.

const p10 = new Promise((resolve, reject) =>  {
setTimeout(() =>{
    console.log("Any Promise: 1 is resolved")
    resolve(10);
}, 1000)
})

const p11 = new Promise((resolve, reject) =>  {
    setTimeout(() =>{
        console.log("Any Promise: 2 is resolved")
        resolve(11);
    }, 2000)
    })

const p12 = new Promise((resolve, reject) =>  {
setTimeout(() =>{
    console.log("Any Promise: 3 is resolved")
    resolve(12);
    }, 3000)
    });

    const pAny= Promise.any([p10, p11, p12]).then((value) =>{
        console.log("Any Promise: Returned");
        console.log(value)
    }).catch((value) =>{
        console.log("Any Promise: Rejected" + value)
    })

