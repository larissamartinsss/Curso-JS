function tabuada() {
    var num = document.getElementById('txtn')
    var selnum = document.getElementById('selnum')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        var n = Number(num.value)
        var c = 100
        tab.innerHTML = ''
        while ( c >= 1 <= 100) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c} `
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}