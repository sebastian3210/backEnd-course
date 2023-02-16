// repaso de Js //
/*
function saludar(nombre){
    console.log('hola '+ nombre.toLowerCase())
}

const nombre = 'marian'

saludar (nombre)
*/

/*
/** 
* @param {Array} list
*/
/*
function viewList (list) {
    if (list.length === 0){
        console.log('lista vacia')
    } else{
        for (const element of list){
            console.log(element)
            console.log(`longitud de la lista : ${list.length}`)
        }        
    }
}

viewList([])
viewList([1,2,3])

*/
/*
const array = {
    [0]: 'valor',
    [1]: 'valor',
    [2]: 'valor',
    length: 3,
    push
}
*/


// class

class Contador {
    static cant = 0
    constructor(responsable){
        this.responsable = responsable
        this.contador = 0
    }

    contar (){
        this.contador++
        Contador.cant++
    }
    getResponsable(){
        return this.responsable
    }
    getCuentaIndividual (){
        return this.contador
    }
    getCuentaGlobal(){
        return Contador.cant
    }
}

const c1 = new Contador('marian')
const c2 = new Contador('anderson')


c1.contar()
c1.contar()
c1.contar()

c2.contar()
c2.contar()
c2.contar()
c2.contar()
c2.contar()



console.log(c1)
console.log(c2)
console.log(Contador.cant)

console.log(c1.getResponsable())
console.log(c1.getCuentaIndividual())
console.log(c1.getCuentaGlobal())

console.log(c2.getResponsable())
console.log(c2.getCuentaIndividual())
console.log(c2.getCuentaGlobal())