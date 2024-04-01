document.addEventListener("DOMContentLoaded", ()=> {

    var contato =  document.getElementById('contato');
    var sobre_mim =  document.getElementById('sobre-mim');
    var portifolio =  document.getElementById('portifolio');
    var formacao =  document.getElementById('formacao');

    var btn_contato = document.getElementById('btn-contato')
    var btn_sobre_mim = document.getElementById('btn-sobre')
    var btn_portifolio = document.getElementById('btn-portifolio')
    var btn_formacao = document.getElementById('btn-formacao')

    btn_contato.addEventListener('click', ()=>{
        selectOption(contato, sobre_mim, portifolio, formacao)
    })
    btn_sobre_mim.addEventListener('click', ()=>{
        selectOption(sobre_mim, contato, portifolio, formacao)
    })
    btn_portifolio.addEventListener('click', ()=>{
        selectOption(portifolio, formacao, sobre_mim, contato)
    })
    btn_formacao.addEventListener('click', ()=>{
        selectOption(formacao, portifolio, sobre_mim, contato)
    })



    function selectOption(option, other1, other2, other3){
        option.style.display = 'flex'
        other1.style.display = 'none'
        other2.style.display = 'none'
        other3.style.display = 'none'
    }

})

