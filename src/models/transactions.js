const mongoose = require('mongoose')
const Float = require('mongoose-float').loadType(mongoose);

const TransactionSchema = new mongoose.Schema({
    bank: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bank',
    },
    desc: {
        type: String,
    },
    transaction: {
        type: String,
        enum:['Entrada', 'Saida']
    },
    type: {
        type: String,
        enum:['TED', 'DOC', 'Boleto', 'Cheque', 'Débito Automático', 'Salario', 'Titulos']
    },
    value:{
        type: Float
    }
}, {
    timestamp: true
});

module.exports = mongoose.model('Transaction', TransactionSchema);