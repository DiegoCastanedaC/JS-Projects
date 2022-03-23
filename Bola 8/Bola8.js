let userName = ''
if (userName='Pedro') {
    console.log(`Hola ${userName}!`)
    }else{
        console.log('Kiubo!')
}

var userQuestion = 'Que quieres saber'

console.log(`${userQuestion} ${userName}?`)

var randomNumber = Math.floor(Math.random()*8)+1

var eightball = ""

if(randomNumber===1){
    console.log('Es un Hecho!')
}else if(randomNumber===2){
    console.log('Por que asi son las cosas')
}else if(randomNumber===3){
    console.log('No entendi la pregunta')
}else if(randomNumber===4){
    console.log('Imposible adivinar ahora')
}else if(randomNumber===5){
    console.log('No cuentes con eso')
}else if(randomNumber===6){
    console.log('Mis fuentes dicen que no')
}else if(randomNumber===7){
    console.log('No se ve bien el panorama')
}else if(randomNumber===8){
    console.log('las senales indican que si')
}else{
}

console.log(eightball)

