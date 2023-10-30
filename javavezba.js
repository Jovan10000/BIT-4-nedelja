function spojidvaniza(niz1,niz2) {
    var x;
    var noviNiz = []
    if (niz1.length > niz2.length) {
         x = niz1.length 
    }
    if(niz2.length > niz1.length) {
        x = niz2.length 
    }

    for (var i = 0; i < x; i++) {
        if (niz1[i] !== undefined) {
             noviNiz.push(niz1[i])
        }
        if (niz2[i] !== undefined) {
            noviNiz.push(niz2[i])
        }
        
    }
    for(var a = 0; a < noviNiz.length; a++) {
        for (var b = a + 1; b < noviNiz.length; b++) {
            if( noviNiz[a] > noviNiz[b]) {
                var brojzaCuvanje = noviNiz[a]
                noviNiz[a] = noviNiz[b] 
                noviNiz[b] = brojzaCuvanje
            }
        }
    }
    return noviNiz
}
console.log(spojidvaniza([1,2,23,4,5,6,7,3], [4,5,78,3,2,6]))