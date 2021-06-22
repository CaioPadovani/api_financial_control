const mongoose = require('mongoose')

const validateEmail = function (email) {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const CandidateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true,
        validate: [validateEmail, 'Por favor preencher com e-mail válido'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    sexo: {
        type: String,
        enum: ['Masculino', 'Feminino'],
    },
    cpf: {
        type: Number,
        unique: true,
    },
    rg: {
        type: String,
    },
    cidade: {
        type: String,
    },
    uf: {
        type: String,
    },
}, {
    timestamp: true
});

module.exports = mongoose.model('User', CandidateSchema);