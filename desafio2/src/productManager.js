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

//const ruta = "../static/product.txt"

class ProductManager{
    constructor(ruta){
        this.ruta = ruta
        this.product=[]        
    }
    async getProducts(){
        const json = await fs.readFile(ruta, 'utf-8')
        this.product = JSON.parse(json)
        return this.product
        


    }

    async addproduct(p){
        p.id = this.product.length;
        this.product.push(p);        
        const json=JSON.stringify(this.product, null, 2)
        await fs.writeFile(this.ruta, json)

    }
    async getProductById(id){
        let searchId = this.product.find((product)=>product.id === id);

        if(!searchId){
            console.warn('Producto no encontrado')
        }
        return searchId;
    }
    async deleteProduct(){
        await fs.rm(this.ruta)
    }
}

class Product{
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

const ruta = new ProductManager('../static/product.txt')

let product1 = new Product({title:'yerba', description: 'pura para cualquier mate', price: 200, thumbnail:'thumbnail',code: 1, stock: 1});

await ruta.getProducts()
await ruta.addproduct(product1);
await ruta.getProductById()