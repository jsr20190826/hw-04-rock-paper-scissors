$(function() {
  let humanScores = new Array
  let botScores = new Array
  let humanScore = 0
  let botScore = 0

  $("button").click(function() {

    let userChoice = $(this).attr("id")

    let botChoice = "rock"
    let botGenerator = Math.floor(Math.random() * 3) + 1
    switch (botGenerator) {
      case 1:
        botChoice = "rock"
        break
      case 2:
        botChoice = "paper"
        break
      case 3:
        botChoice = "scissors"
        break
    }

    console.log(userChoice)
    console.log(botChoice)

    $("#popup").html(`You played <u>${userChoice}</u>. The bot played <u>${botChoice}</u>.`)

    let botWin = 0
    let humanWin = 0

    if (userChoice === "rock") {
      if (botChoice === "rock") {
        $("#status").html("You tied")
        botWin = 0
        humanWin = 0
      } else if (botChoice === "paper") {
        $("#status").html("You Lose :(")
        botWin = 1
        humanWin = 0
      } else {
        $("#status").html("You Win! :)")
        botWin = 0
        humanWin = 1
      }
    } else if (userChoice === "paper") {
      if (botChoice === "paper") {
        $("#status").html("You tied")
        botWin = 0
        humanWin = 0
      } else if (botChoice === "scissors") {
        $("#status").html("You Lose :(")
        botWin = 1
        humanWin = 0
      } else {
        $("#status").html("You Win! :)")
        botWin = 0
        humanWin = 1
      }
    } else {
      if (botChoice === "scissors") {
        $("#status").html("You tied")
        botWin = 0
        humanWin = 0
      } else if (botChoice === "rock") {
        $("#status").html("You Lose :(")
        botWin = 1
        humanWin = 0
      } else {
        $("#status").html("You Win! :)")
        botWin = 0
        humanWin = 1
      }
    }

    console.log(botWin);
    console.log(humanWin);

    let addScores = ((botWin, humanWin) => {
      botScores.push(botWin)
      humanScores.push(humanWin)
    })

    addScores(botWin, humanWin)

    console.log(botScores)
    console.log(humanScores)

    console.log(botScore)
    console.log(humanScore)

    let sumScore = ((array1, array2) => {
      for (let i = botScores.length - 1; i < botScores.length; i++) {
        let botPoint = botScores[i]
        let humanPoint = humanScores[i]
        botScore = botScore + botPoint
        humanScore = humanScore + humanPoint
      }
    })

    sumScore()

    console.log(botScore)
    console.log(humanScore)

    $("#humanScore").each(function() {
      $(this).html(humanScore)
    })
    $("#computerScore").each(function() {
      $(this).html(botScore)
    })
  })
})
