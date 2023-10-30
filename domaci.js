/**  5. Write a program that prints a multiplication table for numbers up to 12.
 */
/*
function pomnoziVeceOd12(niz) {
    var novi = []
    for (var i = 0; i < niz.length; i++) {
        if (niz[i] <= 12) {
            niz[i] = niz[i] * 2
        }
        console.log(niz)
    }
    return novi
}
console.log(pomnoziVeceOd12([1,2,3,4,5,6,7,8,9]))
*/
 /*Write a function that takes a number and returns array of its digits.
 */
/*function numnerOfDigits(num) {
    var numstr = num.toString()
    var output = numstr.split("").map(Number)
    return output
}
var number = 12345
var dig = numnerOfDigits(number)
console.log(dig)
*/
/*Write a function to find the maximum element in array of numbers. Filter out all non-number
elements.*/
function findmaxFilter(array) {
    var filter = [] 
    var output = []
    var max = -Infinity
    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] === "number" && array[i] > max) {
            max = array[i]
        }
        
       else if (typeof array[i] === "number") {
            output.push(array[i])
            console.log(output)
            
        }

        

}
return max
}
console.log(findmaxFilter([1,2,100,3,4,undefined,true,NaN,1200,"jjj"]))