function spajanjeniza (niz1,niz2) {
    var noviniz = []
    var x;
    if (niz1.length > niz2.length) {
        x = niz1.length
    }
    if(niz2.length > niz1.length) {
        x = niz2.length
    }
    
    for(var i = 0; i < x; i++) {
        if(niz1[i] !== undefined) {
            noviniz.push(niz1[i])
        }
        if (niz2[i] !== undefined) {
            noviniz.push(niz2[i])

        }
        

    }
    for(var j = 0; j < noviniz.length; j++) {
        for (var b = j+1; b < noviniz.length; b++) {
            if (noviniz[j] > noviniz[b]) {
              var  brojzaCuvanje = noviniz[j]
                noviniz[j] = noviniz[b]
                noviniz[b] = brojzaCuvanje

            }
        }
    }
    return noviniz
}

console.log(spajanjeniza([4,5,6,78,34,2,2,5,6], [2,3,4,6,7,4,2]))