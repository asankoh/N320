//Array Methods

//For Each
let arr = [1,2,3];
arr.forEach((value) =>{
console.log("For Each Value: " + value)
})

function doubleValue(arr){
var newArr=[];
arr.forEach((value)=>{
newArr.push(value*2);
})
return newArr;
}

console.log("Double Values:" , doubleValue(arr))

//Every: only boolean values
let eArr = [-1,-2,-3]
var everyFn1 = eArr.every((value) =>{
    return value<0;
})

console.log("Every FUnction 1: ", everyFn1)

var everyFn2 = eArr.every((value) =>{
    return value<=-2;
})

console.log("Every FUnction 2: ", everyFn2)

//checking to see if all characters are lowercase

function allLowercase(str){
 return str.split().every((val)=>{
    return val===val.toLowerCase();
 })
}

console.log("All lowercase 1: ", allLowercase("this is a sentence about what"))

//checking to see if all array values are arrays
function allArray(arr) {
return arr.every(Array.isArray);
}

console.log("Is this an array? ", allArray([[1,2], ["Dog", "Cat"], [3], [true]]))

//Some: only boolean values
var sArr = [10, 20, 30];
var someFn1 = sArr.some((value)=>{
    return value>10;
})

console.log("SOme Function: ", someFn1)

function evenNum(arr){
return arr.some((value)=>{
    return value%2==0;
})

}

console.log("Has even numbers? ", evenNum([1,2,3,4,5]))

//Filter

