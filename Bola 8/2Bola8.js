let userName = 'Diego'
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello');

var userQuestion = 'Que quieres Saber';

console.log(`${userQuestion} ${userName}?`);

var randomNumber = Math.floor(Math.random()*8) + 1;

var eightBall = "";
switch (randomNumber) {
case 1 : 
console.log('Es un Hecho!')
break; 
case 2 : 
console.log('Por que asi son las cosas')
break; 
case 3 : 
console.log('No entendi la pregunta')
break; 
case 4 : 
console.log('Imposible adivinar ahora')
break; 
case 5 : 
console.log('No cuentes con eso')
break; 
case 6 : 
console.log('Mis fuentes dicen que no')
break;
case 7 : 
console.log('No se ve bien el panorama')
break; 
case 8 : 
console.log('las senales indican que si')
break;
default :
break;
}

console.log(eightBall)