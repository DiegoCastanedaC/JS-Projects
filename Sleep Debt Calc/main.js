const getSleepHours = day => {
  switch (day) {
    case 'Monday':
    return 8
    break;
    case 'Tuesday':
    return 3
    break;
    case 'Wednesday':
    return 5
    break;
    case 'Thursday':
    return 2
    break;
    case 'Friday':
    return 6
    break;
    case 'Saturday':
    return 4
    break;
    case 'Sunday':
    return 6
    break;
    default:
      return 'Error'
      break;
      
  }
};

function getActualSleepHours(){
  var result = getSleepHours('Monday') + getSleepHours('Tuesday') 
  + getSleepHours('Tuesday') + getSleepHours('Wednesday') 
  + getSleepHours('Thursday') + getSleepHours('Friday') 
  + getSleepHours('Saturday') + getSleepHours('Sunday');
  return result
}

function getIdealSleepHours(){
var idealHours = 8
return idealHours * 7
}

function calculateSleepDebt(){
  var actualSleepHours = getActualSleepHours();
  var idealSleepHours = getIdealSleepHours();
  if (actualSleepHours == idealSleepHours){
    console.log('Perfect Amount of Sleep')
  }else if(actualSleepHours > idealSleepHours){
    console.log('More Sleep then needed')
  } else if (actualSleepHours < idealSleepHours){
    console.log('Should get some rest')
  } else {
    console.log('Nada')
  }
}

calculateSleepDebt()