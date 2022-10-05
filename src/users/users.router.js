//1. /users 
//    1. GET → Al hacer esta peticion deberas de retornar todos los usuarios
//    2. POST → Al hacer esta peticion, manejaras el req del cliente y crearas un nuevo usuario
//2. /users/:id
//    1. GET → Al hacer esta petición deberas retornar el usuario con el ID en especifico que recibes desde parametros

const router = require('express').Router()

const usersServices = require('./users.services')

router.get('/users', usersServices.getAll)

router.post('/users', usersServices.createNewUser)

router.get('/users/:id', usersServices.getOneUsers)

module.exports = router