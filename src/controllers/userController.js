const mongoose = require('mongoose');
const User = mongoose.model('User')

let sendJSONresponse = function (res, status, content) {
    res.status(status);
    res.json(content);
    res.end()
  };

module.exports.create = (req, res) => {
    User.create({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      sexo: req.body.sexo,
      cpf: req.body.cpf,
      idade: req.body.idade
    })
      .then(response => {
        sendJSONresponse(res, 200, { message: "Usuario Cadastrado com Sucesso !!!" })
      })
      .catch(err => {
        sendJSONresponse(res, 401, { message: "Favor preencher todos os campos" })
        console.log(err);
      })
  }