<<<<<<< HEAD
// SIMULAÇÃO DE BANCO DE DADOS - EXPORTA FILMES, SERIES, E MENSAGEM
function bancoDeDados(dado) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (dado == "series") {
                return resolve(require("./series.json")); 
            }
            else if (dado == "filmes") {
                return resolve(require("./filmes.json"));

            } else if (dado == "assistir") {
                return resolve(require("./mensagem.json"));
            }
            else {
                return reject("Dado não encontrado");
            }

        }, 2000);
    });
};

// EXPORTAR BANCO DE DADOS
module.exports = {
    bancoDeDados
};
=======
function bancoDeDados(dado){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if (dado == "series"){
                return resolve( require("./series.json"))
            }
            else if(dado == "filmes"){
                return resolve(require("./filmes.json"))
            }
            else{
                return reject("Dado não encontrado")
            }
            
        }, 2000);
    })
}

module.exports ={
    bancoDeDados
}
>>>>>>> d7fd2eb411423ef73c1141bce9253dee1645f020
