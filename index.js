function removeDubble(num) {
    var novi = []  
    for (var i = 0; i < num.length; i++) {
        for (var j = 0; j < num.length; j++) {
            if (num[i] !== num[j]) {
                novi.push(num[i])
                
            }
        }
    }
    return novi
}
console.log(removeDubble([1,1,2,2,3,3,4,5,6,7,7,8,9,5,6,4,5]))