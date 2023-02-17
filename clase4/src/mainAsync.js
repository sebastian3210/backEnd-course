import fs from 'fs/promises'



const ruta = './static/agenda.txt'

//const agenda = new Map()
let agenda

function contameUnCuento(){
    console.log('Habia uan vez...')
}


async function cargarAgenda(){
    const json = await fs.readFile(ruta,'utf-8')
    agenda =JSON.parse(json)
}

function mostrarAgenda(){
    console.log(agenda)
}

function agregarContacto(contacto){
    agenda.push(contacto)
}

async function guardarAgenta(){
    const json = JSON.stringify(agenda, null, 2) // el 2 es para los espacios para separador
    await fs.writeFile(ruta, json, null, 2) // para guardar en el txt y el 2 es los espacios
}

//async function eliminarEvidencia(){
  //  await fs.rm(ruta) // rmSync es para eliminar el archivo
//}
async function operarConLaAgenda(){
    await cargarAgenda()
    mostrarAgenda()
    agregarContacto({'andres':'54656132'})
    mostrarAgenda()
    guardarAgenta()
    }
    
    operarConLaAgenda()
    contameUnCuento()
//setTimeout(eliminarEvidencia, 5000) // en 5 segundo lo elimina el archivo