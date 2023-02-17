// setintervals

function saludar(){
    console.log('hola')
}

const timer1=setInterval(saludar, 60 * 60 * 1000)// para una hora // para un dia 24*60*60*1000

const timer2 = setTimeout(()=>{
    clearInterval(timer1)
},6000)

clearTimeout(timer2) // esto sigue