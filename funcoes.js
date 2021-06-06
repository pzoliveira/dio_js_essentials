function funcao(){
    return 'Saída funcao';
}
console.log(funcao());

const arrowFn = () => 'Saída arrowFn';
console.log(arrowFn());

const arrowFn2 = () => {
    return 'Saída arrowFn2';
}
console.log(arrowFn2());

funcao.prop = 'prop';
console.log(funcao(), funcao.prop);

const fct = executa => console.log(executa);
fct(funcao());