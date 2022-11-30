let icono = document.getElementById("logo")
let barra = document.querySelector(".barranavegacion")

icono.addEventListener('click', ()=>{
    barra.classList.toggle("spread")
})
window.addEventListener('click', e =>{
    if(barra.classList.contains('spread') 
        && e.target != barra && e.target != icono){
        console.log('cerrar')
        barra.classList.toggle("spread")
    }
})