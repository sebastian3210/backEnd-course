/*const num = 5
console.log(Math.pow(5, 2))
console.log(5 ** 2)


console.log([1,2,3,4,5,6].includes(3))
console.log([1,2,3,4,5,6].includes(8))
*/

/*
const numbers = [1,2,3,4,5,6]

for(const num of numbers){
    console.log(num)
}*/
/*
const numbers = [10,20,30,40,50,60]

for(const key in numbers){
    console.log(numbers[key])
}*/
/*
console.log(Object.keys({nombre:'marian', edad: 36}))
console.log(Object.values({nombre:'marian', edad: 36}))
console.log(Object.entries({nombre:'marian', edad: 36}))
*/
/*
// operador de despliegue
const person = {nombre: 'marian', edad: 60}
const datosNuevos = {direccion: 'rivadavia 123', nombre: 'profemarian'}
const copiaPersona = {...person, ...datosNuevos}
console.log(copiaPersona)
*/
/*
const numbers = [10,20,30,40,50,60]
const  datosNuevos = [70,80,90,100]
const copiaNumbers = [...numbers, ...datosNuevos]
console.log(copiaNumbers)
*/
/*
const numbers = [10,20,30,40,50,60]
function mostrar(primNum){
    console.log(primNum)
    for(const arg of arguments){
        console.log(arg)
    }
}

mostrar(...numbers)
*/
/*
// el rest para mostrar los parametros que faltan de los argumentos
const numbers = [10,20,30,40,50,60]
function mostrar(primNum, segNum, terNum, ...rest){

    console.log(primNum)
    console.log(segNum)
    console.log(terNum)
    console.log(rest)
    console.log(arguments)

}

mostrar(...numbers)
*/

/*
function mostrar (...arg){
    console.log(arg[0])
    console.log(arg[1])
    console.log(arg[2])
    console.log(arg)
}

mostrar(1,2,3,4,5)

function crearPunto(x, y){
    console.log({x,y})

}

crearPunto(5,7)
function sumatoria(...numeros){
//sumo cada num
}

sumatoria(1,4,6,8,12,46)
*/
/*
// sumatoria
function sumatoria(...numeros){
    return numeros.reduce((acumulado, actual) => acumulado + actual,0)   
    }

console.log(sumatoria(1,2,3,4,5,6))


const mensaje= '    hola     '
console.log(mensaje.trimStart()) //  trim elemina los espacios trimStart elimina los espacios de alcomienzo y trimEnd al final


console.log([1,2,3,4,5,[5,6,7,[8,9,10].flat()].flat()].flat()) // elimino nivlees de profundidad usando el flat
console.log([1,2,3,4,5,[5,6,7,[8,9,10]]].flat(3)) // elimino nivlees de profundidad usando el flat con profundidad (3 o 2)
*/
/*

// import estatico
import fs from 'fs'

// import dinamico que funciona comopromesa
async function f(){
    if(1 == 1){
        const fs = await import('fs')
    }

}
*/

// nullish
/*
if ('string no vacio da true'){
    console.log('wow que loco')
}*/
/*
console.log(1 || 5)
console.log(0 || 'tu casa')
console.log('' || 'tu casa')


let nombre = ''
let tamanioEnCM 

if(false){
    nombre = 'el valor de formulario'
    tamanioEnCM = 0

}
console.log(nombre || 'anonimo')
console.log(tamanioEnCM || 'tama??o invalido')
console.log(tamanioEnCM ?? 'tama??o invalido')
*/

// desafio de clase

/*
??C??mo lo hacemos? Se crear?? una clase que permitir?? llevar una gesti??n completa de usuarios que deseen acceder a dichos eventos.

Definir clase TicketManager, el cual tendr?? un arreglo de eventos que iniciar?? vac??o
La clase debe contar con una variable privada ???precioBaseDeGanancia???, la cual a??adir?? un costo adicional al precio de cada evento.
Debe contar con el m??todo ???getEventos??? El cual mostrar?? los eventos guardados.
Debe contar con el m??todo ???agregarEvento??? El cual recibir?? los siguientes par??metros:
nombre
lugar
precio (deber?? agregarse un 0.15 del valor original)
capacidad (50 por defecto)
fecha (hoy por defecto)
El m??todo deber?? crear adem??s el campo id autoincrementable y el campo ???participantes??? que siempre iniciar?? con un arreglo vac??o.
Debe contar con un m??todo ???agregarUsuario??? El cual recibir??:
id del evento (debe existir, agregar validaciones)
id del usuario
El m??todo debe evaluar que el evento exista y que el usuario no haya estado registrado previamente (validaci??n de fecha y capacidad se evitar?? para no alargar el reto)
Si todo est?? en orden, debe agregar el id del usuario en el arreglo ???participantes??? de ese evento.
Debe contar con un m??todo ???ponerEventoEnGira??? El cual recibir??:
id del evento
nueva localidad
nueva fecha
El m??todo debe copiar el evento existente, con una nueva localidad, nueva fecha, nuevo id y sus participantes vac??os (Usar spread operator para el resto de las propiedades)

*/
/*
class TicketManager{
    static precioBaseGanancia = 0.15
    eventos

    constructor(){
        this.eventos = [];
    }

    getEventos(){
        return this.eventos;
    }



    agregarEvento(evento){
        //cargos por el servicio
        evento.precio += evento.precio * TicketManager.precioBaseGanancia

        //identificador del evento
        if(this.eventos.length === 0){
            evento.id = 1;            
        } else{
            evento.id = this.eventos[this.eventos.length -1].id +1;
        }
        //registro del evento
        this.eventos.push(evento)
    }

    agregarUsuario(idEvento, idUsuario){
        const evento = this.eventos.find(e => e.id === idEvento);
        if(!evento){
            throw new Error('evento no encontrado')
        }

        const usuarioRegistrado = evento.participantes.includes(idUsuario);
        if(usuarioRegistrado){
            throw new Error('Usuario ya registrado para asisitir a este evento')
        }
        evento.participantes.push(idUsuario)
    }

    ponerEventoEnGira(idEvento, nuevaLocalidad, nuevaFecha){
        const evento = this.eventos.find(e => e.id === idEvento);
        if(!evento){
            throw new Error ('Evento no encontrado');
        }
        const newEvento = {
            ...evento,
            lugar : nuevaLocalidad,
            fecha: nuevaFecha,
            id: this.eventos[this.eventos.length -1].id + 1,
            participantes : []
        }
        this.eventos.push(newEvento);
    }


}

class Evento {
    constructor(nombre, lugar, precio, capacidad = 50, fecha = new Date().toLocaleString()){
        this.nombre = nombre,
        this.lugar = lugar,
        this.precio = precio,
        this.capacidad = capacidad,
        this.fecha = fecha,
        this.participantes = []
    }
}

// pruebas

const manejadorEventos = new TicketManager();

console.log('agregando Evento coder 1 para Argentina, precio 200, para 50 participantes')
manejadorEventos.agregarEvento(new Evento('evento coder 1', 'Argentina', 200, 50))

console.log('agregar al evento con id 1 la participacion del usuario con id 2')
manejadorEventos.agregarUsuario(1,2);

console.log(' creando una copia vacia del eevento 1 pero en mexico y para el 2024')
manejadorEventos.ponerEventoEnGira(1, 'Mexico', '30/11/2024');

console.log(manejadorEventos.getEventos());
*/

// desafio entregable #1
/*
Consigna

Realizar una clase ???ProductManager??? que gestione un conjunto de productos.
Te acercamos esta ayuda ????
Hands on lab sobre creaci??n de clases (clase 1)

Aspectos a incluir

Debe crearse desde su constructor con el elemento products, el cual ser?? un arreglo vac??o
Cada producto que gestione debe contar con las propiedades:
-title (nombre del producto)
-description (descripci??n del producto)
-price (precio)
-thumbnail (ruta de imagen)
-code (c??digo identificador)
-stock (n??mero de piezas disponibles)

Debe contar con un m??todo ???addProduct??? el cual agregar?? un producto al arreglo de productos inicial.
-Validar que no se repita el campo ???code??? y que todos los campos sean obligatorios
-Al agregarlo, debe crearse con un id autoincrementable
Debe contar con un m??todo ???getProducts??? el cual debe devolver el arreglo con todos los productos creados hasta ese momento

Debe contar con un m??todo ???getProductById??? el cual debe buscar en el arreglo el producto que coincida con el id
En caso de no coincidir ning??n id, mostrar en consola un error ???Not found???


Formato del entregable

Archivo de Javascript listo para ejecutarse desde node.

*/


class ProductManager{

    /*listProduct*/
    constructor(){
        this.listProduct = []
    }
    getProduct(){
        return this.listProduct;
    }

    addproduct(p){

        p.id= this.listProduct.length;

        this.listProduct.push(p);

        return;


    
        
        /*
        if (this.listProduct.length === 0){
            p.id = 1
        } else{            
            p.id = this.listProduct[this.listProduct.length -1]. id +1
        }
     
        this.listProduct.push(new Product( title, description, price, thumbnail,  code, stock));*/
    }


    getProductById(id){

        let searchId=this.listProduct.find((product)=> product.id === id);
        console.log(searchId);
        
        if(!searchId){
            console.warn('Producto no encontrado');
           }
            return searchId;


        /*
        let searchId = this.listProduct.filter((item) => item.code === id)
        if (searchId.length === 0){
            throw new Error ('Producto no encontrado')
        }
        console.log(searchId)*/
    }
    
}

class Product {
    constructor(data){
        const {title, description, price,thumbnail, code, stock} = data;
        this.title = title,
        this.description = description,
        this.price = price,
        this.thumbnail = thumbnail,
        this.code = code,
        this.stock = stock
    }
}

const productoM = new ProductManager

let product1 = new Product({title:'yerba', description: 'pura para cualquier mate', price: 200, thumbnail:'thumbnail',code: 1, stock: 1});
let product2 = new Product({title:'leche', description: 'fresca para el desayuno',price: 350, thumbnail:'thumbnail',code: 2, stock :3})

/*
productoM.addproduct(new Product({ }))
productoM.addproduct({title:'leche', description: 'fresca para el desayuno',price: 350, thumbnail:'thumbnail',code: 2, stock :4} )
*/

productoM.addproduct(product1);
productoM.addproduct(product2);


console.log(productoM.getProduct())

productoM.getProductById(1);
