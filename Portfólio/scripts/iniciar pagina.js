function setarMain(atual='Resumo', liAtual='resumo'){
    let li = document.getElementById(liAtual)
    document.querySelectorAll('.nav-links').forEach(el => 
        el.style.cssText = 'background-color: #2099d9;')
    li.style.cssText = 'background-color: yellow'
    
    let parag = document.getElementById(atual)
    document.querySelectorAll('.pa').forEach(el => el.style.display = 'none')
    parag.style.cssText = ''
}
