const alunos = [{
    nome : "Julia",
    nota : 7
},
{
    nome : "João",
    nota : 5
},
{
    nome : "Janaína",
    nota : 8
},
{
    nome : "Jorge",
    nota : 4
}];


    function mostraAprovados(array){
        return array.filter(function(item){
            return item.nota >= 7;
        })
    }

    console.log(mostraAprovados(alunos));

