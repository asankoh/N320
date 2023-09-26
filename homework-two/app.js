/**
 * The higherOrder function takes two numbers, performs various mathematical operations on them, and
 * then calls a callback function with the original numbers and the total.
 * @param n1 - The first number, which is initially set to 3.
 * @param n2 - The parameter `n2` is the second number that will be used in the calculations.
 */
function higherOrder(n1, n2){
    n1 = 10;
    n2 = 6;
   let total = (n1+n2) + (n1-n2)
             + (n1*n2) + (n1/n2);

   cb(n1, n2, total)

    console.log("Numbers: " + n1 + " & " + n2);
    console.log("Total: " + total);
}

/**
 * The function `cb` calculates the average of two numbers and displays the numbers, total value, and
 * average on the webpage and in the console.
 * @param n1 - The first number in the calculation.
 * @param n2 - The parameter `n2` represents the second number in the calculation.
 * @param total - The `total` parameter represents the sum of `n1` and `n2`.
 */
function cb(n1, n2, total){
    let average = (n1 + n2)/2
    let dataList =
    `<p> Numbers: ${n1},${n2}</p>
    <p> Total Value: ${total}</p>
    <p> Average: ${average} </p>`
    document.write(dataList)
    console.log("Average: " + average)
}

higherOrder(cb)

