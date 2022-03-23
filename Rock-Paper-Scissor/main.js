const getUserChoice = userInput => {
    userInput = userInput.toLowerCase()
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput
    }else{
      console.log('Error')
    }
  }

  function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber){
      case 0:
      return 'rock';
      break;
      case 1:
      return 'scissors'
      break;
      case 2:
      return 'paper';
      break;
      default:
      return 'error';
      break;
    }
  }
  
  function determineWinner(userChoice, computerChoice){
    if (userChoice === computerChoice){
      return 'Tie Dudes'
    } 
    if (userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return 'Compu Won!'
      }else{
        return 'You Won!'
      }
    }
    if (userChoice === 'rock'){
        if(computerChoice === 'paper'){
          return 'Compu Won!'
        }else{
          return 'You Won!'
        }
      }
    if (userChoice === 'paper'){
        if(computerChoice === 'scissors'){
          return 'Compu Won!'
        }else{
          return 'You Won!'
        }
      }
    if (userChoice === 'scissors'){
        if(computerChoice === 'rock'){
          return 'Compu Won!'
        }else{
          return 'You Won!'
        }
      }
      if (userChoice === 'bomb'){
        return 'EXPLOSION'
        }
      }
    

    function playGame(){
        var userChoice = getUserChoice('bomb');
        var computerChoice = getComputerChoice()
        console.log ('you choose ' + userChoice);
        console.log('the compu choose ' + computerChoice);
        console.log(determineWinner(userChoice, computerChoice))
      }

playGame()


