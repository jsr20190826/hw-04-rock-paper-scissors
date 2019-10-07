$(function () {

// Rockpaperscissorsgame logic

// users presses choice
//bot generates number
//compare and score game
//increment player score
//keep track of total
//display results
//reset display when new choice is made

const choices = ["rock","paper",'scissors']  // bot choices

let playerScore = 0
let botScore = 0
let playerBonus = 0
let botBonus = 0
let playerRoundScore = 0
let botRoundScore = 0
let playerGameScore = 0
let botGameScore = 0
let gameCounter = 10
let output = ""  // status output
let outputRound= "" // status of Round

$('.scoreboardround').hide()
$('.scoreboardgame').hide()
$('#playagain').hide()
$('#reloadgame').hide()


$(".choice-buttons").on("click", function (e) {
  event.preventDefault();

  $('#status').text(" ")
  $('#bonus').text(" ")

  const playerChoice = event.target.id
  const botChoice = choices[Math.floor(Math.random() * choices.length)]

//  console.log(`Player chose ${playerChoice}, Bot chose ${botChoice}  `)

  output += "<p>You played <u>"+playerChoice+"</u>,The bot played <u>"+botChoice+"</u>.<p/>"

  if (playerChoice === botChoice)  {
    output += "<p>You tied</p>"

  }
  // PLAYER LOSES
  else if  ((playerChoice === "rock" && botChoice === "paper") || (playerChoice === "paper" && botChoice === "scissors") || (playerChoice === "scissors" && botChoice === "rock") ) {

    output += "<p>You Lose :(</p>"
    botScore = botScore + 1
    // Bonus Requirement 3
    botBonus = botBonus+ 1
    playerBonus = 0

      if (botBonus >= 3) {
        botScore = botScore + 2
        $('#bonus').html("<p>Bot got two bonus points for winning 3 hand in a row</p>")
        botBonus = 0
        playerBonus = 0
    }

  }

  // PLAYER WINS

  else if ((playerChoice === "paper" && botChoice === "rock") || (playerChoice === "scissors" && botChoice === "paper") || (playerChoice === "rock" && botChoice === "scissors") ) {

    output += "<p>You Win :)</p>"
    playerScore = playerScore + 1

    // Bonus Requirement 3
    playerBonus = playerBonus + 1
    botBonus = 0

    if (playerBonus >= 3) {

      playerScore = playerScore + 2
      $('#bonus').html("<p>You got two bonus points for winning 3 hands in a row</p>")
      botBonus = 0
      playerBonus = 0
    }
    // End Bonus Requirement 3
  }

// Display Message and Scores

  $('#humanScore').text(playerScore)
  $('#computerScore').text(botScore)
  $('#status').html(output)


// Bonus Requirement 1
  if (playerScore >= 10 || botScore >= 10 ) {

    $('#statusRound').text(" ")
    $('.scoreboardround').show()
    $('#statusround').show()
    $('#playagain').show()
    $(".choice-buttons").attr("disabled", true);

    if (playerScore >= 10) {
      playerRoundScore = playerRoundScore +1
      $('#statusround').html("<p>You won the round with a score of: "+playerScore+"</p>")
      $('#humanScoreRound').text(playerRoundScore)

    }
    if (botScore >= 10) {
      botRoundScore = botRoundScore + 1
      $('#statusround').html("<p>Bot won the round with a score of: "+botScore+"</p>")
      $('#computerScoreRound').text(botRoundScore)
    }
  }
// End Bonus Requirement 1

// Bonus Requirement 2

  if (playerRoundScore >= 2 || botRoundScore >= 2 ) {

    $('#statusgame').text(" ")
    $('.scoreboardgame').show()
    $('#statusgame').show()
    $(".choice-buttons").attr("disabled", true);

    if (playerRoundScore >= 2) {
      $('#statusgame').html("<p>You won the game by winning "+playerRoundScore+" rounds</p>")
      $('#humanScoreGame').text(playerRoundScore)
    }
    if (botRoundScore >= 2) {
      $('#statusgame').html("<p>Bot won the game by winning "+botRoundScore+" rounds</p>")
      $('#computerScoreGame').text(botRoundScore)
    }
  $('#playagain').hide()
  $('#reloadgame').show()
}
// End Bonus Requirement 2


})

$("#reset").on("click", function (e) {
  event.preventDefault();
  //console.log("reset clicked")
  $('#playagain').hide()

  $(".choice-buttons").attr("disabled", false);
  playerScore = 0
  botScore = 0

  $('#statusround').text(" ")
  $('#statusgame').text(" ")
  $('#status').text(" ")
})

$("#reload").on("click", function (e) {
  event.preventDefault();

  // console.log("reload clicked")
  $('#playagain').hide()
  $(".choice-buttons").attr("disabled", false);

  playerScore = 0
  botScore = 0
  playerRoundScore = 0
  botRoundScore = 0


  $('#statusround').text(" ")
  $('#statusgame').text(" ")
  $('#status').text(" ")
  $('#reloadgame').hide()

})


})
