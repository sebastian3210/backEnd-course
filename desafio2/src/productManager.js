/*Manejo de archivos
Se creará una instancia de la clase “ProductManager”
Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
Se llamará al método “addProduct” con los campos:
title: “producto prueba”
description:”Este es un producto prueba”
price:200,
thumbnail:”Sin imagen”
code:”abc123”,
stock:25
El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE
Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado
Se llamará al método “getProductById” y se corroborará que devuelva el producto con el id especificado, en caso de no existir, debe arrojar un error.
Se llamará al método “updateProduct” y se intentará cambiar un campo de algún producto, se evaluará que no se elimine el id y que sí se haya hecho la actualización.
Se llamará al método “deleteProduct”, se evaluará que realmente se elimine el producto o que arroje un error en caso de no existir.
*/

import fs from 'fs/promises'

const ruta = "./desafio2/static/product.json"

class ProductManager{
    constructor(ruta){
        this.ruta = ruta
        this.product = []            
    }
    async getProducts(){
        //const json = await fs.readFile(this.ruta, 'utf-8')
        const products = await fs.readFile(this.ruta, 'utf-8')
        //this.product = await JSON.parse(json);
        return await  JSON.parse(products)
    }

    async mostrarProduct(){
        await this.getProducts()
        console.log(this.product)
    }

    async saveProduct(){
        const json=JSON.stringify(this.product, null, 2)
        await fs.writeFile(this.ruta, json)
    }

    async addproduct(p){
        await this.getProducts();

        p.id = this.product.length;
        this.product.push(p);    
        
        await this.saveProduct();
        


    }
    async getProductById(id){
        await this.getProducts()
        //const json = await fs.readFile(this.ruta, 'utf-8')
        //this.product = JSON.parse(json)

        let searchId = this.product.find((product)=>product.id === id);

        if(!searchId){
            console.warn('Producto no encontrado')
        }
        return await searchId;
    }
    async deleteProduct(id){
        await this.getProducts()

        let searchId = this.product.findIndex((product)=>product.id === id);

        if(!searchId){
            console.warn('Producto no encontrado')
        } else{
            this.product.splice(1, searchId);
            await this.saveProduct();
            return console.log('producto eliminado')
        }
    }
    async updateProduct(id){
        await this.getProducts();
        let searchId = this.product.findIndex((product)=>product.id === id);

        if(!searchId){
            console.warn('Producto no encontrado para le update')
        } else{
            this.product[searchId] ={...this.product[searchId],...id,stock : 1};
            await this.saveProduct();
            return console.log('producto update')
        }


    }
}

class Products{
    constructor(data){
        const{title, description, price, thumbnail, code,stock} = data;
        this.title = title,
        this.description = description,
        this.price = price,
        this.thumbnail = thumbnail,
        this.code = code,
        this.stock = stock
    }
}


const manager = new ProductManager(ruta)

let product1 = new Products({title:'yerba', description: 'pura para cualquier mate', price: 200, thumbnail:'thumbnail',code: "abc5466", stock: 1});
let product2 = new Products({title:'agua', description: 'pura para cualquier momento', price: 400, thumbnail:'thumbnail',code: "abc5467", stock: 3});
let product3 = new Products({title:'coca-cola', description: 'gas para cualquier momento', price: 500, thumbnail:'thumbnail',code: "abc5468", stock: 10});
let product4 = new Products({title:'pepsi', description: 'gas para cualquier momento', price: 300, thumbnail:'thumbnail',code: "abc5469", stock: 7});

manager.getProducts().then((res)=> console.log(res))

await manager.addproduct(product1)
await manager.addproduct(product2)
await manager.addproduct(product3)
await manager.addproduct(product4)


manager.getProducts().then((res)=> console.log(res))

await manager.getProductById(0).then((res)=> console.log(res));

await manager.updateProduct(2)

await manager.deleteProduct(1)


