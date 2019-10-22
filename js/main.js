//this line prevents my editor from marking $ as undefined
/* global $ */

$(function () {
  // select an option at random for the both
  function chooseBotWeapon () {
    const weapons = ['rock', 'paper', 'scissors']
    const n = Math.floor(Math.random() * 3)
    const botWeapon = weapons[n]
    return botWeapon
  }

  // determine who wins the current hand
  function whoWins (playerChoice, winnerList) {
    // select the bot weapon
    const botChoice = chooseBotWeapon()

    // update the page text with current turn stats
    $('#playerChoice').text(`${playerChoice}`)
    $('#botChoice').text(`${botChoice}`)
    // if the same weapons were chosen, update page to show that it was a tie.
    // also return nobody to the winnerList since no one won the turn
    if (playerChoice === botChoice) {
      $('#showWinner').text('It was a tie!')
      return 'nobody'
    }

    // logic to determine who won the current hand
    // return the winner
    switch (botChoice) {
      case 'rock':
        if (playerChoice === 'scissors') {
          return 'bot'
        } else if (playerChoice === 'paper') {
          return 'player'
        }
        break

      case 'paper':
        if (playerChoice === 'rock') {
          return 'bot'
        } else if (playerChoice === 'scissors') {
          return 'player'
        }
        break

      case 'scissors':
        if (playerChoice === 'paper') {
          return 'bot'
        } else if (playerChoice === 'rock') {
          return 'player'
        }
        break
      default:
        console.log('Both players must choose an item!')
        return 'nobody'
    }
  }

  // update scoreboard page elements
  function updateScore (winner) {
    console.log(`running score count. adding points for ${winner}`)
    // clear any bonus info from Scoreboard
    $('#bonus').text('')
    // get details from scoreboard
    let currentHumanScore = parseInt($('#humanScore').text())
    let currentBotScore = parseInt($('#computerScore').text())
    // update the scoreboard and text with winner info
    if (winner === 'player') {
      currentHumanScore++
      $('#showWinner').text('You win! :D')
      $('#humanScore').text(currentHumanScore)
    } else if (winner === 'bot') {
      currentBotScore++
      $('#showWinner').text('You lose :(')
      $('#computerScore').text(currentBotScore)
    }
  }

  // calculate bonus points for this turn
  function calculateBonusPoints (winnerList) {
    const n = winnerList.length - 1
    // grab the last 3 winners from the winnerList
    const one = winnerList[n]
    const two = winnerList[n - 1]
    const three = winnerList[n - 2]

    // player who wins the last three rounds gets a two point bonus
    if (one === two && two === three) {
      if (one === 'nobody') {
        console.log('no bonus for tie rounds.')
      } else {
        // add two bonus points and update scoreboard
        updateScore(winnerList[n])
        updateScore(winnerList[n])
        $('#bonus').text(`Bonus: 2 pts for ${one}!`)
      }
    } else {
      console.log('no bonus detected.')
    }
  }

  // determine if there's a winner for the round
  function calculateRoundWinner () {
    //get score from page
    const humanScore = parseInt($('#humanScore').text())
    const botScore = parseInt($('#computerScore').text())

    if (humanScore >= 10) {
      // show a message that says Human wins the round!
      // add a point for the round
      alert('Congrats human, you\'ve won the round!')
      updateRoundScore('player')
    } else if (botScore >= 10) {
      // show a message that says Bot wins the round!\
      // add a point for the round
      alert('Aww, you\'ve lost the round. :(')
      updateRoundScore('bot')
    } else {
      // no one has won this round
      // just in case
      console.log('Round 1: in progress')
    }
  }

  function updateRoundScore (winner) {
    // this is messy, but I just wanted to get this assignment handed in.
    // apologies for the poor planning here. :)

    // if round 1 has not been posted to the board already,
    // this must be round 1. update page with the winner
    if ($('#round1').text() === '') {
      const pageUpdate = `<p id="round1">Round 1:
      <b id="winner1">${winner}</b>\n</p>`
      $('#roundTracking').append(pageUpdate)
      clearScore()
    } else if ($('#round2').text() === '') {
      // if round 2 has not been posted to the board already,
      // this must be round 2. update page with the winner
      const pageUpdate = `<p id="round2">Round 2:
      <b id="winner2">${winner}</b></p>`
      $('#roundTracking').append(pageUpdate)
      // if the same person won twice, declare a winner and prompt
      // for a new game
      if ($('#winner1').text() === $('#winner2').text()) {
        const announceGameWin = `${winner} wins the Game!`
        alert(announceGameWin)
        promptNewGame()
      }
      clearScore()
    } else {
      // if round 3 has not been posted to the board already,
      // this must be round 3.
      const pageUpdate = `<p id="round3">Round 3:
      <b id="winner3">${winner}</b></p>`
      $('#roundTracking').append(pageUpdate)
      // there will definitely be a game winner this time,
      // so we'll determine and announce winner, then prompt for new game
      if ($('#winner1').text() === $('#winner3').text() || $('#winner2').text() ===
    $('#winner3').text()) {
        const announceGameWin = `${winner} wins the Game!`
        alert(announceGameWin)
        promptNewGame()
      }
      // if you end up here that means the winner was determined
      // in round 2, so prompt for a new game
      promptNewGame()
    }
  }

  function clearScore () {
    // clear the scoreboard, obviouslyy
    $('#humanScore').text('0')
    $('#computerScore').text('0')
    $('#showWinner').text('')
    // clear any bonus info from Scoreboard
    $('#bonus').text('')
  }

  function promptNewGame () {
    // change the buttons around
    // the new button will ask if the user wants to start a new game
    // hence the name
    const hideButton = { display: 'none' }
    const revealButton = { display: 'inline' }
    $('.playButtons').css(hideButton)
    console.log('hide game buttons')
    $('.restartButton').css(revealButton)
    console.log('reveal the restart button')
  }

  const winnerList = []

  function playerTurn (weapon, winnerList) {
    //all te stuff that happens when the user takes their turn
    const winner = whoWins(weapon)
    updateScore(winner)
    console.log('score updated')
    console.log(winnerList)
    return winner
  }

  // determine who wins the current round
  $('#rock').click(() => {
    winnerList.push(playerTurn('rock', winnerList))
    // this is all being calculated here 'cause I didn't take
    // the time to plan this properly :)
    // ideally it would be lumped into the playerTurn() function
    calculateBonusPoints(winnerList)
    calculateRoundWinner()
  })
  $('#paper').click(() => {
    winnerList.push(playerTurn('paper', winnerList))
    calculateBonusPoints(winnerList)
    calculateRoundWinner()
  })
  $('#scissors').click(() => {
    winnerList.push(playerTurn('scissors', winnerList))
    calculateBonusPoints(winnerList)
    calculateRoundWinner()
  })
  $('#restart').click(() => {
    // when this button is visible the user can click it to restart the game
    clearScore()
    const reveal = { display: 'inline' }
    $('.playButtons').css(reveal)
    const hide = { display: 'none' }
    $('.restartButton').css(hide)
    // clear round tracking
    $('#roundTracking').text('')
  })
})
