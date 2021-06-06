const frutas_amarelas = ['banana', 'melão'];
const frutas_vermelhas = ['maçã', 'cereja', 'uva'];
const frutas = [...frutas_amarelas, ...frutas_vermelhas];
console.log(frutas);

let baskara = (a, b, c, x) => a * x ** 2 + b * x + c;
var args = [1, 2, 3, 1]
console.log(baskara(...args));

frutas.categ = 'Padrão A';
for(let item in frutas){
    console.log(item);
}
for(let elem of frutas){
    console.log(elem);
}
