$(function () {

  let humanChoice = ""
  let computerChoice = ""

  let humanSelection = 0
  let computerSelection = 0

  let humanScore = 0
  let computerScore = 0



  function statusMessage() {
    $("#status").html("You played <u>" + humanChoice +  "</u>. The computer played <u>" + computerChoice + "</u>.")
  }

  function getComputerSelection() {
    if( computerSelection === 1 ){
      computerChoice = "Rock"
    } else if ( computerSelection === 2 ) {
      computerChoice = "Paper"
    } else{
      computerChoice = "Scissors"
    }

  }


  function compare(){

    getComputerSelection()

    if (( humanSelection === 1 && computerSelection === 3 ) || ( humanSelection === 2 && computerSelection === 1 ) || ( humanSelection === 3 && computerSelection === 2 )){

      humanScore++

      $("#computerScore").html(computerScore)
      $("#humanScore").html(humanScore)
      statusMessage()
      $("#winner").html("You win!")

    } else if /*( humanSelection > computerSelection)*/ (( computerSelection === 1 && humanSelection === 3 ) || ( computerSelection === 2 && humanSelection === 1 ) || ( computerSelection === 3 && humanSelection === 2 )) {

      computerScore++

      $("#computerScore").html(computerScore)
      $("#humanScore").html(humanScore)
      statusMessage()
      $("#winner").html("You lose!")

    } else if /*( humanSelection === computerSelection)*/(computerSelection === humanSelection) {

      $("#computerScore").html(computerScore)
      $("#humanScore").html(humanScore)
      statusMessage()
      $("#winner").html("You Tie")

    }
  }

  ///////////////////////////////////////What happens when you click "rock" button
  $("#rock").click(()=>{

    humanSelection = 1
    computerSelection = Math.ceil((Math.random() * 3))

    humanChoice = "rock"

    compare()
    // This doesnt work winningLogic()

      //Function to calc score and messages



    console.log("+++++++++++++++++++++++++++++++++++++++++++++")
    console.log("rock pressed")
    console.log("human score " + humanScore)
    console.log("computer score " + computerScore)
    console.log("player Choice " + humanChoice)
    console.log("player selection " + humanSelection)
    console.log("computer selection " + computerSelection)
    console.log("computer Choice " + computerChoice)
    console.log("+++++++++++++++++++++++++++++++++++++++++++++")
  })


  ///////////////////////////////////////What happens when you click "paper" button
  $("#paper").click(()=>{
    humanSelection = 2
    computerSelection = Math.ceil((Math.random() * 3))

    humanChoice = "paper"

    compare()

    console.log("+++++++++++++++++++++++++++++++++++++++++++++")
    console.log("paper pressed")
    console.log("human score " + humanScore)
    console.log("computer score " + computerScore)
    console.log("player Choice " + humanChoice)
    console.log("player selection " + humanSelection)
    console.log("computer selection " + computerSelection)
    console.log("computer Choice " + computerChoice)
    console.log("+++++++++++++++++++++++++++++++++++++++++++++")
  })

  ///////////////////////////////////////What happens when you click "scissors" button
  $("#scissors").click(()=>{
    humanSelection = 3
    computerSelection = Math.ceil((Math.random() * 3))

    humanChoice = "scissors"

    compare()

    console.log("+++++++++++++++++++++++++++++++++++++++++++++")
    console.log("scissors pressed")
    console.log("human score " + humanScore)
    console.log("computer score " + computerScore)
    console.log("player Choice " + humanChoice)
    console.log("player selection " + humanSelection)
    console.log("computer selection " + computerSelection)
    console.log("computer Choice " + computerChoice)
    console.log("+++++++++++++++++++++++++++++++++++++++++++++")
  })

})
