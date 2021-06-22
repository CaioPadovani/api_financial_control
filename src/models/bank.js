const mongoose = require('mongoose')
const Float = require('mongoose-float').loadType(mongoose);

const BankSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    bank: {
        type: String,
        required: true
    },
    agencia: {
        type: String,
        required: true
    },
    identif:{
        type: String,
        unique:true,
    },
    conta: {
        type: String,
        unique:true,
    },
    saldo: {
        type: Float
    },
}, {
    timestamp: true
});

module.exports = mongoose.model('Bank', BankSchema);