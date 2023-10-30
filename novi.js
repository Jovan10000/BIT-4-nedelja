function izvrtanjeReci(recenica) {
    var noviNiz = ""
    x = recenica.length - 1
    for(var i = x; 0 <= i; i--) {
     noviNiz += recenica[i]
    }
    return noviNiz
}

console.log(izvrtanjeReci("ja ucim da programiram"))
