$(function () {

  let playerChoice
  let botChoice
  $("button").click((event) => {
    playerChoice =  $(event.currentTarget).attr('id')
    botChoice = generateBotChoice()
    compare(botChoice, playerChoice)
    console.log('bot choice: ' + botChoice)
    console.log('player choice: ' + playerChoice)

  })

  function generateBotChoice() {
    let botChoice
    const number = Math.floor(Math.random() * 3) + 1;
    if(number === 1){
     botChoice = 'rock'
      } else if(number === 2){
        botChoice = 'paper'
      } else {
        botChoice = 'scissors'
      }
    return botChoice
  }

  function compare(botChoice, playerChoice) {
    if(botChoice === playerChoice){
      console.log("It's a tie!")
    } else if(botChoice === "rock"){
      if(playerChoice === 'scissors'){
        console.log("bot wins")
        } else{
          console.log("player wins") //
        }
    } else if(botChoice === "scissors"){
      if(playerChoice === "paper"){
        console.log("bot wins")
        } else{
          console.log("player wins") //scissors +rocks
        }
    } else if(botChoice === "paper"){
      if(playerChoice === 'rock'){
        console.log("bot wins")
        }else{
          console.log("player wins") //
        }
    }
  }
})
