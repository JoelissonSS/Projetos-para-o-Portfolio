function mudar(atual){
    let parag = document.getElementById(atual)
    document.querySelectorAll('.pa').forEach(el => el.style.display = 'none')
    parag.style.cssText = 'display: block;'
}