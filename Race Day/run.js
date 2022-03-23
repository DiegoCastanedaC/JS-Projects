let raceNumber = Math.floor(Math.random() * 1000);

var registerEarly = false;
var age = 25
if (registerEarly === true && age > 18){
  console.log(raceNumber += 1000);
  console.log('The race starts at 9:30')
}else if(registerEarly === false && age > 18){
  console.log(raceNumber);
  console.log('The race starts at 11:00')
}else if(age <= 18){
  console.log(raceNumber);
  console.log('The race starts at 12:30')
}else{
    console.log('Please go!')
  }




