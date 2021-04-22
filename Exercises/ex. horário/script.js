var msg = document.getElementById('msg')
var bonjuour = document.getElementById('bonjour')
var img = document.getElementById('imagem')
var data = new Date()
//var hora = data.getHours()
var hora = 19
 
var minuto = data.getMinutes()

function carregar() {
    msg.innerHTML = `São ${hora}:${minuto}.`
    if (hora >= 6 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.background = '#d3ea51'
        bonjuour.innerHTML = "Bom dia!"
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde!
        img.src = 'tarde.png'
        document.body.style.background = '#be5b38'
        bonjuour.innerHTML = "Boa tarde!"
    }  else if (hora >=18 && hora < 23) {
        //Boa noite!
        img.src = 'noite.png'
        document.body.style.background = '#2f484d'
        bonjuour.innerHTML = "Boa noite!"
    } else {
        //Boa madrugada!
        img.src = 'madrugada.png'
        document.body.style.background = '#0a0b0f'
        bonjuour.innerHTML = "Boa madrugada!"
}
}



