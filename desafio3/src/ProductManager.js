import fs from 'fs/promises'

//const ruta = "./desafio3/database/products.json"

export default class ProductManager{
    constructor(ruta){
        this.ruta = ruta
        this.product = []            
    }
    async getProducts(){
        try{
        const products = await fs.readFile(this.ruta, 'utf-8')
        
        return await  JSON.parse(products)

        }
        catch(error){
            console.log(error);
        }       
        
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
            console.warn('Producto no encontrado para el update')
        } else{
            this.product[searchId] ={...this.product[searchId],...id,stock:45};
            await this.saveProduct();
            return console.log('producto update')
        }


    }
}

export class Products{
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