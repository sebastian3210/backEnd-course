// clase 4 meno de archivos en javascript

/*
// setintervals

function saludar(){
    console.log('hola')
}

const timer1=setInterval(saludar, 60 * 60 * 1000)// para una hora // para un dia 24*60*60*1000

const timer2 = setTimeout(()=>{
    clearInterval(timer1)
},6000)

clearTimeout(timer2) // esto sigue
*/
// libreria fs
import fs from 'fs'
//ojo con la ruta que las barras vienen invertidas en windows
//si en node pongo cat timer.js  me muestra tambien eso tengo que estar en la carpeta // y puedo usar cat ../timer.js si estoy en otra carpeta

//const rutaAbsoluta = 'C:/Users/Sebastian/Desktop/practicasBack-end/clase4/timer.js'
const raiz = 'C:/Users/Sebastian/Desktop/practicasBack-end'
const restoDelaRuta = 'clase4/timer.js'
const rutaRelativa = `${raiz}/${restoDelaRuta}`
console.log(fs.readFileSync(rutaRelativa,'utf-8')) //el sistema operativo necesita cambiar los bites en caracteres y hay que especificar con codificacion
