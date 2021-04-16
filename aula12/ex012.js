// aprendendo conditions com horas
var agora = new Date()
var hora = agora.getHours()
if (hora < 12) {
    console.log('Good Morning!')
} else if (hora <= 18) {
    console.log('Good Afternoon')
} else {
    console.log('Good Evening')
}