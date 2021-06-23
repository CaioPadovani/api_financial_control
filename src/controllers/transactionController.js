const mongoose = require('mongoose');
const Transaction = mongoose.model('Transaction');
const ObjectId = mongoose.Types.ObjectId;

let sendJSONresponse = function (res, status, content) {
    res.status(status);
    res.json(content);
    res.end()
};

module.exports.create = (req, res) => {
    Transaction.create({
        bank: ObjectId(req.body.bank),
        desc: req.body.desc,
        transaction: req.body.transaction,
        type: req.body.type,
        value: req.body.value,
    })
        .then(response => {
            sendJSONresponse(res, 200, { message: "Operacão concluida com sucesso !!!" })
        })
        .catch(err => {
            sendJSONresponse(res, 401, { message: "Erro ao efetuar operacão" })
            console.log(err);
        })
}