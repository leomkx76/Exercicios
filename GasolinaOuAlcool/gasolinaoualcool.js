const gasolina = document.querySelector("#gasolina")
const alcool = document.querySelector("#alcool")
const calcular = document.querySelector(".calcular")
const resultadonum = document.querySelector(".resultadonum")
const resultadotxt = document.querySelector(".resultadotxt")




let calcula = (a, g)=>{
    let res = 0
    res = a/g
    return res
}

// console.log(gasolina)
// console.log(alcool)
// console.log(calcula(alcool,gasolina))


calcular.addEventListener("click", ()=>{
    resultadonum.value = calcula(alcool.value ,gasolina.value)*100 + "%"
    console.log(gasolina.value)
    console.log(alcool.value)
    console.log(resultadonum.value)
    if(calcula(alcool.value ,gasolina.value)*100 < 70){
        resultadotxt.value = "Alcool"
    }else{
        resultadotxt.value = "Gasolina"
    }
})

