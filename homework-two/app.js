/* var p1 = document.getElementsByTagName('p')[0]
var p2 = document.getElementsByTagName('p')[1]
var p3 = document.getElementsByTagName('p')[2] 
console.log(p1, p2)
*/

function higherOrder(n1, n2){
 n1 = 5;
 n2 = 15;

let total = (n1+n2) + (n1-n2) 
+ (n1*n2) + (n1/n2);
let roundedTotal = total.toFixed(2)

cb(n1, n2, roundedTotal);
console.log("All: " + total)
}

const cb = (n1, n2, roundedTotal) => {
    let average = (n1 + n2)/2
    let dataList = 
        `<p>Numbers: ${n1} , ${n2}</p>
        <p>Total Value: ${roundedTotal}</p>
        <p>Average: ${average}</p>`
        document.write(dataList)
}


higherOrder(cb)

