/*apiRouter.get('/api/personas', (req, res)=>{ res.json})
apiRouter.post('/api/personas', (req, res)=>{ res.json})
apiRouter.put('/api/personas', (req, res)=>{ res.json})
apiRouter.delete('/api/personas', (req, res)=>{ res.json})

apiRouter.get('/api/ventas', (req, res)=>{ res.json})
apiRouter.post('/api/ventas', (req, res)=>{ res.json})
apiRouter.put('/api/ventas', (req, res)=>{ res.json})
apiRouter.delete('/api/ventas', (req, res)=>{ res.json})*/

import express, { Router } from 'express'
import { personasRouter } from './personasRouter.js'
import { ventasRouter } from './ventasRouter.js'

export const apiRouter = Router()

apiRouter.use((req, res, next) => {
    console.log('pasa por el api router')
    next()
})

// esta es la forma manual
// function json(req, res, next){
     //extraer el cuerpo de la peticion
     //req.body = JSON.parse(cuerpo)
//     next()
// }

// function urlencoded(req, res, next) {
//     const queryString = req.url.split('?')[0] con esto puedo ver la url que me llega
//     // parseo el queryString
//     req.body = 'queryStringParseado'
//     next()
// }

apiRouter.use(express.json())
apiRouter.use(express.urlencoded({ extended: true }))

apiRouter.use('/personas', personasRouter)
apiRouter.use('/ventas', ventasRouter)
