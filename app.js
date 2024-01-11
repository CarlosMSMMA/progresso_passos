const progresso = document.getElementById('progresso')
const ant = document.getElementById('ant')
const prox = document.getElementById('prox')
const circulos = document.querySelectorAll('.circulo')

let controle = 1

prox.addEventListener('click', ()=> {
    controle++
    if(controle > circulos.length){
        controle = circulos.length
    }

    atualizar()

})

ant.addEventListener('click', ()=> {
    controle--
    if(controle < 1){
        controle = 1
    }

    atualizar()

})

function atualizar(){
    circulos.forEach((circulo, index) => {
        if(index < controle){
            circulo.classList.add('ativo')
        } else {
            circulo.classList.remove('ativo')
        }
    })

    const ativos = document.querySelectorAll('.ativo')

    progresso.style.width = ((ativos.length -1) / (circulos.length -1)) * 100 + '%'

    if(controle === 1){
        ant.disabled=true
    } else if(controle === circulos.length){
        prox.disabled=true
    } else {
        ant.disabled=false
        prox.disabled=false
    }

}