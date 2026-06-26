//1.Encapsulamento
class ContaBancaria {
    #saldo = 0;
    depositar(valor){
        this.#saldo+= valor;
        //abreviação de saldo+saldo=valor
}
sacar(valor){
    if(valor<this.#saldo){
        this.#saldo-=valor;
    }
}
consultarSaldo(){
    return this.#saldo;
}
}
const conta1 = new ContaBancaria();//obj criado conta1
conta1.depositar(500);
conta1.sacar(100);
console.log("Seu saldo atual é de R$"+conta1.consultarSaldo());
//herança
class pessoa{
    constructor(nome){
        this.nome = nome;
    }
    apresentar(){
    console.log(`meu nome é ${this.nome}`);
    }
}
class Funcionario extends pessoa{
    constructor(nome,cargo){
        super(nome);
        this.cargo = cargo;
    }
     trabalhar(){
        console.log(this.nome+"está trabalhando!")
     }
}
const funcionario = new Funcionario("maria,programador");
funcionario.apresentar();
funcionario.trabalhar();