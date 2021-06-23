const mongoose = require('mongoose');
const Bank = mongoose.model('Bank');
const ObjectId = mongoose.Types.ObjectId;

let sendJSONresponse = function (res, status, content) {
    res.status(status);
    res.json(content);
    res.end()
};

module.exports.create = (req, res) => {
    Bank.create({
        user: ObjectId(req.body.user),
        bank: req.body.bank,
        agencia: req.body.agencia,
        identif: req.body.identif,
        conta: req.body.conta,
        saldo: req.body.saldo,
    })
        .then(response => {
            sendJSONresponse(res, 200, { message: "Conta Cadastrado com Sucesso !!!" })
        })
        .catch(err => {
            sendJSONresponse(res, 401, { message: "Favor preencher todos os campos" })
            console.log(err);
        })
}

module.exports.getConsult = (req, res) => {
    Bank.findOne({ user: req.params.id })
        .populate('user')
        .then((response) => {
            sendJSONresponse(res, 200, response)
        })
}

module.exports.deposito = (req, res) => {
    Bank.findOne({ _id: req.params.id })
        .populate('user')
        .then((response) => {
            let val1 = parseFloat(response.saldo)
            let val2 = parseFloat(req.body.saldo)
            Bank.updateOne({ _id: req.params.id }, {
                $set: {
                    saldo: val1 + val2
                },
            })
                .then(() => {
                    sendJSONresponse(res, 200, { message: "Saldo Atualizado com Sucesso !!" })
                }).catch(()=>{
                    sendJSONresponse(res, 401, { message: "Ocorreu algum erro inesperado!!" })
                })

        })

}
module.exports.sacar = (req, res) => {
    Bank.findOne({ _id: req.params.id })
        .populate('user')
        .then((response) => {
            let val1 = parseFloat(response.saldo)
            let val2 = parseFloat(req.body.saldo)
            Bank.updateOne({ _id: req.params.id }, {
                $set: {
                    saldo: val1 - val2
                },
            })
                .then(() => {
                    sendJSONresponse(res, 200, { message: "Saldo Atualizado com Sucesso !!" })
                }).catch(()=>{
                    sendJSONresponse(res, 401, { message: "Ocorreu algum erro inesperado!!" })
                })

        })

}
