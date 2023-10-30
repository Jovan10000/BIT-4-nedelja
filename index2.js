function checkstring(string,word) {
    for (var i = 0; i < string.length; i++) {
        var element = string[i]
        if (element === word) {
            return true
        } 
    }
    return false
}

console.log(checkstring("fhfjodjdbshi", "n"))

function removeDubble(array) {
    var novi = []
    for(var i = 0; i < array.length; i++) {
       var element = array[i] 
        if (!checkstring(novi,element)) {
            novi.push(element)
        }
    }
    return novi
}

console.log(removeDubble([1,1,12,2,3,4,5,6,7,4,3,2,2,32,])) 

function maxnumber(array) {
    var max = -Infinity
    for (var i = 0; i < array.length; i++) {
        if(array[i] > max) {
            max = array[i]
        }
    }
    return max
}

console.log(maxnumber([-10,4,5,767,5,43,2,5,6,7,1333,]))

function nizboolean(niz) {
    var counter1 = 0
    var counter2 = 0
    for(var i = 0; i <niz.length; i++) {
        if (niz[i] === true) {
            counter1++
        } else {
            counter2++
            
        }
    }
    console.log(counter1 + "ukupno true value  ",  "i ukupno ", counter2 , "falce value")
    
}
console.log(nizboolean([true,true,true,false]))