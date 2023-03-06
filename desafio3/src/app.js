import ProductManager, { Products } from "./ProductManager.js"
import express from "express"



const ruta = "./database/products.json"

const productManager = new ProductManager(ruta)



let product1 = new Products({title:'yerba', description: 'pura para cualquier mate', price: 200, thumbnail:'thumbnail',code: "abc5466", stock: 1});
let product2 = new Products({title:'agua', description: 'pura para cualquier momento', price: 400, thumbnail:'thumbnail',code: "abc5467", stock: 3});
let product3 = new Products({title:'coca-cola', description: 'gas para cualquier momento', price: 500, thumbnail:'thumbnail',code: "abc5468", stock: 10});
let product4 = new Products({title:'pepsi', description: 'gas para cualquier momento', price: 300, thumbnail:'thumbnail',code: "abc5469", stock: 7});
let product5 = new Products({title:'mate', description: 'gas para cualquier momento', price: 300, thumbnail:'thumbnail',code: "abc5469", stock: 7});
let product6 = new Products({title:'cafe', description: 'gas para cualquier momento', price: 300, thumbnail:'thumbnail',code: "abc5469", stock: 7});
let product7 = new Products({title:'harina', description: 'gas para cualquier momento', price: 300, thumbnail:'thumbnail',code: "abc5469", stock: 7});
let product8 = new Products({title:'palmito', description: 'gas para cualquier momento', price: 300, thumbnail:'thumbnail',code: "abc5469", stock: 7});
let product9 = new Products({title:'mermelada', description: 'gas para cualquier momento', price: 300, thumbnail:'thumbnail',code: "abc5469", stock: 7});
let product10 = new Products({title:'caocao', description: 'gas para cualquier momento', price: 300, thumbnail:'thumbnail',code: "abc5469", stock: 7});
let product11 = new Products({title:'picadillo', description: 'gas para cualquier momento', price: 300, thumbnail:'thumbnail',code: "abc5469", stock: 7});
let product12 = new Products({title:'mate-cabaya', description: 'gas para cualquier momento', price: 300, thumbnail:'thumbnail',code: "abc5469", stock: 7});
let product13 = new Products({title:'arroz', description: 'gas para cualquier momento', price: 300, thumbnail:'thumbnail',code: "abc5469", stock: 7});


productManager.getProducts().then((res)=> console.log(res))

await productManager.addproduct(product1)
await productManager.addproduct(product2)
await productManager.addproduct(product3)
await productManager.addproduct(product4)
await productManager.addproduct(product5)
await productManager.addproduct(product6)
await productManager.addproduct(product7)
await productManager.addproduct(product8)
await productManager.addproduct(product9)
await productManager.addproduct(product10)
await productManager.addproduct(product11)
await productManager.addproduct(product12)
await productManager.addproduct(product13)

productManager.getProducts().then((res)=> console.log(res))

const app = express();

app.get('/products', async (req, res) => {
    try {
        const products = await productManager.getProducts()
        const limitValue = +(req.query.limit);
        
        if(!limitValue){
            res.json(products);
        } else {
            const productLimit = products.slice(0,limitValue)
            res.json(productLimit);
        }
    } 
    catch (error) {
        console.log(error);
    }
});

app.get('/products/:pid', async(req, res) => {
    try {
        const { pid } = req.params;
        const productById = await productManager.getProductById(+pid)
        productById ? res.json(productById) : res.json({message: 'error 404: Not found'})
    } 
    catch (error) {
        console.log(error);
    }
});

const server = app.listen(8080)
