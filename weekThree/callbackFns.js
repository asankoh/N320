//Working the DOM (Document Object Modifier)

//Return one element: querySelector
document.querySelector('div ul li:first-child').innerHTML = "querySelector"

document.querySelector  ('p').innerHTML = "querySelector p"



//grab a list
//getElementsByClassName
document.getElementsByClassName("my")[1].innerHTML = "Class Name";

document.getElementsByTagName("li")[1].innerHTML = "Second List Item";

document.querySelectorAll("body>ul li")[0].innerHTML = "querySelectorAll"

//single values:
//getElementById
//querySelector

//Lists:
//getElementByClassName
//getElementsByTagName
//querySelectorAll

function callBack(){
    console.log("This is a callback function")
}
/*
function higherOrder(newFunction){
    console.log("Before callback")
    newFunction();
    console.log("After calling function")
}

higherOrder(callBack);

function firstFunction(msg){
    alert(msg);
}

function middleFunction(msg){
    console.log(msg);
}

function lastFunction(msg){
return confirm(msg);
}

firstFunction("My First Message");
middleFunction("My Message");
lastFunction("My Last Message");




/**
 * The startFunction takes a message and a callback function as parameters, displays the message in an
 * alert, and then calls the callback function with the message and the endFunction as arguments.
 * @param msg - The `msg` parameter is a string that represents a message that will be displayed in an
 * alert box.
 * @param mFn - mFn is a callback function that is passed as a parameter to the startFunction. It is a
 * function that will be called within the startFunction and is expected to take two parameters: msg (a
 * message) and endFunction (another callback function).
 
const startFunction = (msg, mFn) => {

    alert(msg);
    mFn(msg, endFunction);
}


/**
 * The nextFunction takes in a message and an error function, logs the message, and then executes the
 * error function.
 * @param msg - The `msg` parameter is a string that represents a message or information that you want
 * to log or display.
 * @param eFn - eFn is a function that will be executed after the console.log statement.
 
const nextFunction = (msg, eFn) =>{
console.log(msg)
eFn(msg);
}


const endFunction = (msg) =>{
    return confirm(msg);
}


startFunction("Callback message...", 
nextFunction);

//  <---    --->


const costTable = (subTotal, tip, total)=> {
    let createTable = `<ul>
    <li>SubTotal: ${subTotal}</li>
    <li>Tip:${tip}</li>
    <li>Total:${total}</li>
    </ul>`
    document.write(createTable)
}

const calcTotal = (subTotal, tip, callback, taxRate=0.07) =>{
let total = subTotal + (subTotal*taxRate)+tip;
total = total.toFixed(2);
callback(subTotal, tip, total);
}

calcTotal(34.95, 10.50, costTable); 

*/
// <--- --->

/* Write a Function that will take a string and find the middle 
character. You will write a higher order function that will find the middle position
and the callback function will find what the middle character is and print it out 
using document write*/


const cb = (h,m,a) =>{
    let mLetter = a[h];
    let mL2 = m[h];
    document.write(`Middle Letter: ${mLetter} ${mL2}`)
}

const midPos = (msg,callback) =>{
    let sl = msg.length;
    let half = Math.floor(sl/2);
    let sArray = msg.split("");
    callback(half,sArray,msg);
}

midPos("Gabriel", cb)

setTimeout(() => {
    console.log("Time Up")
}, 5000);

function callback(){
    console.log("Callback Function")
}

setTimeout(callback, 1000)

//SetInterval

function cb2(){
    console.log('callback is called continuously')
}
// setInterval(cb2, 5000)

var num = 0;
var intervalId = setInterval(() => {
    num++;
    console.log(`Current Number: ${num}`)
    if(num===5){
        console.log(intervalId);
        clearInterval(intervalId)
    }
}, 2000);


//Foreach
var arr = [1,2,3,4,5];
function forLoopArray(arr){
for (let i = 0; i < arr.length; i++) {
console.log(arr[i]*2)    
}
}
forLoopArray(arr)

//forEach function parameters: item, index, array

arr.forEach(number => {
    console.log(number*2)
});

var instruments = ["piano", "guitar", "drums"];

var results=[];

instruments.forEach((item, index, arr) =>{
    if(arr.length-1 !==index){
        results+=item+" "
    } else {
        results+=item+"!!"
    }
})

console.log(results);