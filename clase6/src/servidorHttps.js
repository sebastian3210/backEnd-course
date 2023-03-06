import http from 'http'


function getQueryParams(url){
    const queryParamsText = url.split('?')[1]
    if(queryParamsText){
        const queryParams = queryParamsText.split('&').map(par => par.split('='))
        return Object.fromEntries(queryParams)
    } else{
        return {}
    }
}

function getUrlParams(url, nombrePosicionesParams){
    const urlParamsText = url.split('?')[0]
    const urlParams = urlParamsText.split('/')
    const result = {}
    for(const nombre in nombrePosicionesParams){
        result[nombre] = urlParams[nombrePosicionesParams[nombre]]
    }
    return result
}

const server = http.createServer((peticion, respuesta)=>{
    console.log(peticion.method)
    console.log(peticion.url)

    const queryParams = getQueryParams(peticion.url)
    console.log(queryParams)

    const urlParams = getUrlParams(peticion.url, {nroUsuario: 2})
   // const queryParamsText = peticion.url.split('?')[1]
  //  if(queryParamsText){
    //   const queryParams = queryParamsText.split('&').map(par => par.split('='))
     //  console.log(Object.fromEntries(queryParams))
   // }
  //  const urlParamsTeext = peticion.url.split('?')[0]
   // const urlParams = urlParamsTeext.split('/')
    //const nroUsuario = urlParams[2]
   // console.log({ nroUsuario })
    console.log(urlParams)
    
    respuesta.end()
})
// http://localhost:8080/usuario/123/propiedades?zona=almagro&ambientes=4
server.listen(8080) // escuchar preguntas, en el puerto 8080 va al host de mi compu, la direccion dle servidor. Ahora me va a mostrar la peticion del navegador