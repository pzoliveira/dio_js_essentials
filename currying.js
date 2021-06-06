function somar(n1){
    return function(n2){
        return n1 + n2;
    }
}

var somar2 = somar(5);

console.log(somar2(5));
console.log(somar2(10));
console.log(somar2(15));
console.log(somar2(20));