import { User } from "./user.js"
import fs from 'fs/promises'
import { encriptar } from "./criptografia.js";


export class UserManager {
    // para que solo sea usado en este archivo
    #users
    #ruta



    constructor(ruta){
        this.#ruta = ruta
        this.#users = []
    }

    async #read(){
        const json = await fs.readFile(this.#ruta,'utf-8')
        this.#users = JSON.parse(json)
    }

    async #writer(){
        const nuevoJson = JSON.stringify(this.#users, null,2)
        await fs.writeFile(this.#ruta, nuevoJson)
    }

    async crearUsuario({nombre, apellido, username, contrasena}){
        await this.#read()
        const user = new User({nombre, apellido, username, contrasena: encriptar(contrasena)})
        this.#users.push(user)
        await this.#writer()
        return user

    }
    async validation({username, contrasena}){
        await this.#read()
        const user= this.#users.find(u => u.username === username)
        const encriptada = encriptar(contrasena)
        if (encriptada !== user.contrasena){
            throw new Error('credenciales invalidas')
        } else{
            return user
        }
    }
}

