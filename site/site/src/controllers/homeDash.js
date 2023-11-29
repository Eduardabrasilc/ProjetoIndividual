var homeDashmodel = require("../models/homeDash");

function buscarRanking(req, res) {
    console.log(`Buscando ranking de respostas ao quiz`);

    homeDashmodel.buscarRespostas().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as respostas dos quiz.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedia(req, res) {
    console.log(`Buscando média de pontos`);

    homeDashmodel.buscarMediaPontos().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarRanking,
    buscarMedia

}