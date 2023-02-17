import fs from 'fs'



const ruta = './static/agenda.txt'

//const agenda = new Map()
let agenda

function contameUnCuento() {
    console.log('habia una vez...truz')
}

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
    const json = JSON.stringify(agenda, null, 2) // el 2 es para los espacios para separador
    fs.writeFileSync(ruta, json, null, 2) // para guardar en el txt y el 2 es los espacios
}

function eliminarEvidencia(){
    fs.rmSync(ruta) // rmSync es para eliminar el archivo
}



function operarConLaAgenda(){
    cargarAgenda()
    mostrarAgenda()
    agregarContacto({'andres':'54656132'})
    mostrarAgenda()
    guardarAgenta()
    }
    
    operarConLaAgenda()
    contameUnCuento()
//setTimeout(eliminarEvidencia, 5000) // en 5 segundo lo elimina el archivo

