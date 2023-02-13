// desafio entregable #1
/*
Consigna

Realizar una clase “ProductManager” que gestione un conjunto de productos.
Te acercamos esta ayuda 👉
Hands on lab sobre creación de clases (clase 1)

Aspectos a incluir

Debe crearse desde su constructor con el elemento products, el cual será un arreglo vacío
Cada producto que gestione debe contar con las propiedades:
-title (nombre del producto)
-description (descripción del producto)
-price (precio)
-thumbnail (ruta de imagen)
-code (código identificador)
-stock (número de piezas disponibles)

Debe contar con un método “addProduct” el cual agregará un producto al arreglo de productos inicial.
-Validar que no se repita el campo “code” y que todos los campos sean obligatorios
-Al agregarlo, debe crearse con un id autoincrementable
Debe contar con un método “getProducts” el cual debe devolver el arreglo con todos los productos creados hasta ese momento

Debe contar con un método “getProductById” el cual debe buscar en el arreglo el producto que coincida con el id
En caso de no coincidir ningún id, mostrar en consola un error “Not found”


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
    }


    getProductById(id){

        let searchId=this.listProduct.find((product)=> product.id === id);
        console.log(searchId);
        
        if(!searchId){
            console.warn('Producto no encontrado');
        }
            return searchId;
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

productoM.addproduct(product1);
productoM.addproduct(product2);

console.log(productoM.getProduct())

productoM.getProductById(1);

