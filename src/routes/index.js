const routes = require('express').Router();

const Usuario = require('../controllers/userController');
const Conta = require('../controllers/bankController');

// Routes User
routes.post("/user", Usuario.create)
routes.get("/user", Usuario.list)

//Routes Bank
routes.post("/bank", Conta.create)
routes.get("/bank/:id", Conta.getConsult)
routes.put("/bank/deposit/:id", Conta.deposito)
routes.put("/bank/sacar/:id", Conta.sacar)



module.exports = routes;