class Animal{
    constructor(qtdePatas){
        this.qtdePatas = qtdePatas;
    }
}

class Cachorro extends Animal{
    constructor(morde){
        super(4);
        this.morde = morde;
    }
    static latir(){
        console.log('Au au');
    }
}

const pug = new Cachorro(true);
console.log(pug);
console.log('\n', Cachorro.latir());