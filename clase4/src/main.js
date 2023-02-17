import fs from 'fs'



const ruta = './static/agenda.txt'

//const agenda = new Map()
let agenda



function cargarAgenda(){
    const json = fs.readFileSync(ruta,'utf-8')
    agenda =JSON.parse(json)
}

function mostrarAgenda(){
    console.log(agenda)
}

function agregarContacto(contacto){
    agenda.push(contacto)
}

function guardarAgenta(){
    const json = JSON.stringify(agenda)
    fs.writeFileSync(ruta, json, null, 2) // para guardar en el txt y el 2 es los espacios
}

cargarAgenda()
mostrarAgenda()
agregarContacto({'andres':'54656132'})
guardarAgenta()