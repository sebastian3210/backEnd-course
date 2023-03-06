import express from 'express'


const app = express()
/*
app.get('/usuario/:nroUsuario/propiedades',(peticion, respuesta)=>{
    console.log(peticion.params)
    console.log(peticion.query)
   // respuesta.end()
   respuesta.send(`<h1>aguante Expresss</h1>
   ${JSON.stringify(peticion.params)}
   ${JSON.stringify(peticion.query)} 
   `) // enviar html
})*/

//http://localhost:8080/usuario/123/propiedades?zona=almagro&ambientes=4

app.get('/usuario/:nroUsuario/propiedades',(req, res)=>{
    console.log(req.params)
    console.log(req.query)

    //const nroUsuario = parseInt(req.params.nroUsuario) // parseInt es para parsearlo un numero entero

    if(isNaN(Number(req.params.nroUsuario))){
     res.json({status:400 , message: 'formato incorrecto de numero de usuario'}) // devuelvo un error, un objeto del error.
     return //early return o sino poner un else a res.json({ruta : 'usuario', urlParams: req.params, queryParams: req.query})
    }


   // respuesta.end()
   res.json({ruta : 'usuario', urlParams: req.params, queryParams: req.query}) // status(200) por defecto
   // enviar html
})

app.get('/cosas',(req, res)=>{
   res.json({ruta:'cosas', urlParams: req.params, queryParams: req.query})  
})
app.get('/personas',(req, res)=>{
    res.json({ruta:'personas', urlParams: req.params, queryParams: req.query})  // renderizar json pongo json.
 })

 app.get('/verduras',(req, res)=>{
   res.send('<h1>verduras!</h1> ')  // texto apra renderizar le mando send
  // res.send(await fs.readFile(path.resolve('./views','cosas.html')))// es mejor usar el sendFile de mas arriva para usar esto.
})
app.get('/descargas',(req, res)=>{
   res.download('./views/cosas.html')
})


const server = app.listen(8080)


