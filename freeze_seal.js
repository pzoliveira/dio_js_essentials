const usuario = {
    nome: 'Pericles',
    idade: 49
}

console.log('Propriedades: ', Object.keys(usuario));
console.log('\nValores: ', Object.values(usuario));
console.log('\nLista de propriedades e valores:', Object.entries(usuario));

var usuarioexp = Object.assign({}, usuario, {sobrenome: 'Zapata'});
console.log(usuarioexp);

var novoObj = {foo: 'bar'};
console.log(novoObj);

Object.freeze(novoObj);

novoObj.foo = 'changed';
delete novoObj.foo;
novoObj.bar = 'foo';
console.log(novoObj);

const pessoa = {nome: 'Pericles'};
console.log(pessoa);

Object.seal(pessoa);

pessoa.nome = 'Leticia';
delete pessoa.nome;
pessoa.idade = 30;
console.log(pessoa);