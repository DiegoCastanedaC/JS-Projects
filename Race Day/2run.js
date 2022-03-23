let raceNumber = Math.floor(Math.random() * 1000);

var registerEarly = true;
var age = 19

if (registerEarly && true) {
    raceNumber += 1000;
}

if(registerEarly && age>18){
    console.log(`Race will begin at 9:30, your race number is: ${raceNumber}`)
} else if(!registerEarly && age>18){
    console.log(`Race will begin at 11:00, your race number is: ${raceNumber}`)
} else if(age<=18){
    console.log(`Race will begin at 12:30, your race number is: ${raceNumber}`)
}else{
    console.log('Please go!')
  }

