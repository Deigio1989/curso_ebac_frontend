function Animal(nome, cor, idade){
    this.nome = nome;
    this.cor = cor;
    this.idade = idade;
}

function Cachorro(nome, cor, idade, raca){
    this.raca = raca;
    this.latir = function(){
        console.log(nome + " está latindo.");
    }

    Animal.call(this, nome, cor, idade);
}

function Lobo(nome, cor, idade){
    this.uivar = function(){
        console.log(nome + "uiva para o luar.");
    }

    Animal.call(this, nome, cor, idade);
}

function Ogro(nome, cor, idade){
    this.urrar = function(){
        console.log(nome + ", faz o urro.");
    }

    Animal.call(this, nome, cor, idade);
}



const beethoven = new Cachorro('Beethoven','Branco e caramelo',2 ,"São Bernardo");
const snoopy = new Cachorro('Snoopy','Branco',5,"Beagle");
const loboMau = new Lobo('Lobo Mau','cinza',10);
const shrek = new Ogro('Shrek','verde', 34);

snoopy.latir();
shrek.urrar();