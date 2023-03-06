//const crypto = require('crypto')
/*

import crypto from 'crypto'
console.log(Math.random())


console.log(crypto.randomUUID())*/

//import { User } from "./user.js"
import { UserManager} from './UserManager.js'

const um = new UserManager('./data/usuarios.json')

const user = await um.crearUsuario({
    nombre:'marian',
    apellido: 'Lopez',
    username: 'marian23',
    contrasena: '123456'
})

console.log(user)

const loggedUser = await um.validation({
    username: 'marian23',
    contrasena: '1234567'
})
console.log(loggedUser)
