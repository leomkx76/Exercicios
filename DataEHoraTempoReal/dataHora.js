const data = new Date()
const div_data = document.querySelector("#div_data")
const div_relogio = document.getElementById("div_relogio")

let dia_m = data.getDate() 
dia_m< 10 ? `0${dia_m}` : `${dia_m}`

let mes_m = data.getMonth()
mes_m < 10 ? `0${mes_m}` : `${mes_m}`

const data_res = `${dia_m}/${mes_m}/${data.getFullYear()}`

div_data.innerHTML = data_res

const relogio_full = ()=>{
const relogio = () => {
    const data = new Date()
    let hora = data.getHours() 
    hora < 10 ? `0${hora}` : `${hora}`
    let minutos = data.getMinutes() 
    minutos < 10 ? `0${minutos}` : `${minutos}`
    let segundos = data.getSeconds() 
    segundos < 10 ? `0${segundos}` : `${segundos}`
    let hora_retorno = `${hora}:${minutos}:${segundos}`
    div_relogio.innerHTML = hora_retorno
}
const intervalo = setInterval(relogio, 1000)
relogio()
}

relogio_full()