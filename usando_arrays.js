const frutas = Array.of('banana', 'melão', 'melancia');
console.log(frutas.pop());
const salgados = ['quibe', 'coxinha'];
const comida = salgados.concat(frutas);
console.log(comida.shift());
let cincovazios = Array(5);
console.log(cincovazios);
let limpeza = Array('sabão', 'detergente');
console.log(limpeza.unshift('rodo'));
console.log(comida.splice(2, 1, 'maracujá', 'mamão'));
console.log(comida.push('feijão'));