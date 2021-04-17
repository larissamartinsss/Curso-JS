function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno= document.getElementById('txtano') // id direto 'ex'
    var res = document.querySelector('div#res') // id == 'div#ex'
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        alert('[ERRO} Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)//res.innerHTML = `Idade calculada ${idade}.`
        var genero = ''
        var img = document.createElement('img')
        img.getAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >=0 && idade <14) {
                // Criança
                img.setAttribute('src', 'menino.png')
                document.body.style.background = '#96cecd'
            } else if(idade >=14 && idade <30) {
                // Jovem
                img.setAttribute('src', 'jovem-homem.png')
                document.body.style.background = '#d27a4a'
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'adulto.png')
                document.body.style.background = '#455052'
            } else {
                // Idoso
                img.setAttribute('src', 'idoso.png')
                document.body.style.background = '#c3c0c7'
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >=0 && idade <14) {
                // Criança
                img.setAttribute('src', 'menina.png')
                document.body.style.background = '#e8edf3'
            } else if(idade >=14 && idade <30) {
                // Jovem
                img.setAttribute('src', 'jovem-mulher.png')
                document.body.style.background = '#46696f'
            } else if (idade < 60) {
                // Adulta
                img.setAttribute('src', 'adulta.png')
                document.body.style.background = '#d59f72'
            } else {
                // Idosa
                img.setAttribute('src', 'idosa.png')
                document.body.style.background = '#f9b16b'
            }
        }
        res.innerHTML = `Identificamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}