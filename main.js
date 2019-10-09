$(function () {

// Rock Paper Scissor routine input user choice, generate random computer response
// find out who won, update score and then present result in table on screen
// There seems to be a bias in the program toward the user -- cause not clear
// First define globale variables that are used to display results or simplify flow:
  let userWins=0
  let machineWins=0
  let machineInput=NaN
  let userInput=NaN

  // The evenhandler is where we are waiting for input
  // Very much in contrast to "normal linear programming"
  // Everything emenates from here

  // If the user clicks "rock":
  $('#rock').click(() => {
  let userInput = $('#rock').text()
  mainLoop(userInput)
  })
  // If the user clicks "paper":
  $('#paper').click(() => {
    let userInput = $('#paper').text()
    mainLoop(userInput)
  })
  // If the user clicks "scissors":
  $('#scissors').click(() => {
    let userInput = $('#scissors').text()
    mainLoop(userInput)
  })

  //The mainLoop is where the action is after we have received user input
  function mainLoop(userInput){
    // first get the input from the machine into "MachineInput"
    getMachineInput()
    // find out who wins using the function from previous home work
    winner=findWinner(userInput,machineInput)
    // Depending on who wins, update total scores
    updateScores(winner)
    // change score board
    $('#humanScore').text(userWins)
    $('#computerScore').text(machineWins)
    // Extra info for the user for clarity and also debugging -- a little awkward but it works
    if (winner===1) {gwin="User"} else {gwin="Bot"}  //transfer winner to text that we can use
    $('#status').html("Computer played " + '<u>'+machineInput+'</u>' + '.' + '\n'
    + "You played " + '<u>'+userInput+'</u>'+'.' + '</br>' + gwin + " Won" )
    // All done - go back to evenhandler
  }


  // The function findwinner is only slightly modified from previous homework
  // Output 0 for a tie
  // Output 1 for user wins (playerA)
  // Output 2 for machine wins (player B)
  function findWinner(playerAChoice,playerBChoice) {
    if (playerAChoice == playerBChoice) {
        return 0
        console.log("Result: Tie")
    }
    else if (playerAChoice == "rock"){
      if (playerBChoice == "paper")  {
        return 2
        console.log("Result: PlayerB wins")
      }
      else if (playerBChoice == "scissors"){
        return 1
        console.log("Result: PlayerA wins")
      }
    }
    else if (playerAChoice == "scissors"){
      if (playerBChoice == "rock"){
        return 2
        console.log("Result: PlayerB wins")
      }
      else if (playerBChoice == "paper"){
        return 1
        console.log("Result: PlayerA wins")
      }
    }
    else if (playerAChoice == "paper"){
      if (playerBChoice == "scissors"){
        return 2
        console.log("Result: PlayerB wins")
      }
      else if (playerBChoice == "rock"){
        return 1
        console.log("Result: PlayerA wins")
      }
    }
  }

  // let us find out what the machine choses
  function getMachineInput() {
    // generate a random integer [0:2]
    let randomInt = getRandomInt(3)
    if (randomInt===0) {
        choice='rock'
     } else if (randomInt===1) {
        choice='paper'
     } else if (randomInt===2) {
        choice='scissors'
     } else {
       alert('something wrong with the getMachineInput routine [0:2]:' + randomInt)
     }
    // Transfer choice to the global variable
    machineInput=choice
    return machineInput
  }

  // Mapping from random real number [0:1] to integer [0:(max-1)]
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  // Updates scores depending on who won
  function updateScores(winner) {
    if (winner===1){
      userWins=userWins+1
    }  else if (winner===2) {
      machineWins=machineWins+1
    }
  }


})
