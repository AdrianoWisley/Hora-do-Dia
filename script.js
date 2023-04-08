function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom Dia!
        img.src = 'imagens/manha.png'
        document.body.style.background = '#e3cd9f'
    } else if (hora >= 12 && hora <= 18) {
        //Boa Tarde!
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        //Boa Noite!
        img.src = 'imagens/noite.png'
        document.body.style.background = '#515154'
    }
}

