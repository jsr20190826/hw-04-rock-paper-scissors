$(function () {

	let botChoice
	let userChoice
	let botScore = 0
	let userScore = 0
	let botWins = 0
	let userWins = 0
	resetGame()

	$('button').click((event) => {

		//Calling all functions
		clearBonusMessage()
		assignBotChoice()
		assignUserChoice()
		determineWinner()
		bonusPoints()
		roundOneWinner()
		roundTwoWinner()
	})

	//Randomly assigning a choice to the bot
	function assignBotChoice() {
		//Random number from 1 to 3
		botChoice = Math.floor(Math.random() * 3) + 1

		//If statement to assign numbers to string choices
		if (botChoice === 1) {
			botChoice = 'rock'
		} else if (botChoice === 2) {
			botChoice = 'scissors'
		} else if (botChoice === 3) {
			botChoice = 'paper'
		} else {
			console.log('Invalid choice.')
		}
	}

	//Grabbing the clicked button id and converting that choice to a string
	function assignUserChoice() {
		userChoice = $(event.target).attr('id')
	}

	//Function to compare choices, declare a winner, and reward points
	function determineWinner() {
		if ( userChoice === botChoice ) {
			$('#status').html(`<p>You chose <b><u>${userChoice}</u></b>. The bot chose <b><u>${botChoice}</u></b>.</p><p>Tie game!</p>`)
		} else if ( userChoice === 'rock' && botChoice === 'paper') {
			botWin()
		} else if ( userChoice === 'rock' && botChoice === 'scissors') {
			userWin()
		} else if ( userChoice === 'paper' && botChoice === 'rock') {
			userWin()
		} else if ( userChoice === 'paper' && botChoice === 'scissors') {
			botWin()
		} else if ( userChoice === 'scissors' && botChoice === 'rock') {
			botWin()
		} else if ( userChoice === 'scissors' && botChoice === 'paper') {
			userWin()
		} else {
			console.log('Error, invalid choices.')
		}
	}

	//Assigning bonus points based on three wins
	function bonusPoints() {
		if ( botWins === 3) {
			botWins = 0
			botScore += 2
			$('#computerScore').text(botScore)
			$('#bonus-message').text('Bot gained 2 bonus points for 3 consecutive wins!')
		} else if ( userWins === 3) {
			userWins = 0
			userScore += 2
			$('#humanScore').text(userScore)
			$('#bonus-message').text('You gained 2 bonus points for 3 consecutive wins!')
		} else {
			console.log('No bonus points awarded!')
		}
	}

	function botWin() {
		botScore += 1
		botWins += 1
		userWins = 0
		$('#computerScore').text(botScore)
		$('#status').html(`<p>You chose <b><u>${userChoice}</u></b>. The bot chose <b><u>${botChoice}</u></b>.</p><p>You lose!</p>`)
	}

	function userWin() {
		userScore += 1
		userWins += 1
		botWins = 0
		$('#humanScore').text(userScore)
		$('#status').html(`<p>You chose <b><u>${userChoice}</u></b>. The bot chose <b><u>${botChoice}</u></b>.</p><p>You win!</p>`)
	}

	//Checks for first player to win 10 games and changes the game color
	function roundOneWinner() {
		if(botScore >= 10) {
			$('#wise-message').text('Round 1 Winner: Bot')
			$('body').css('color', 'yellow')
			$('button').css('background', 'yellow')
			$('.scoreboard').css('borderColor', 'yellow')
			$('.scoreboard h2').css('borderBottomColor', 'yellow')
		} else if(userScore >= 10) {
			$('#wise-message').text('Round 1 Winner: You')
			$('body').css('color', 'yellow')
			$('button').css('background', 'yellow')
			$('.scoreboard').css('borderColor', 'yellow')
			$('.scoreboard h2').css('borderBottomColor', 'yellow')
		}
	}

	//Checks for first player to win 20 games and changes the game color
	function roundTwoWinner() {
		if(botScore >= 20) {
			$('#wise-message').addClass('winner')
			$('#wise-message').text('Game Winner: Bot!')
			$('#rock, #paper, #scissors').prop('disabled', true);
			$('body').css('color', 'white')
			$('button').css('background', 'white')
			$('.scoreboard').css('borderColor', 'white')
			$('.scoreboard h2').css('borderBottomColor', 'white')
			$('#status').html('')
		} else if(userScore >= 20) {
			$('#wise-message').addClass('winner')
			$('#wise-message').text('Game Winner: You!')
			$('#rock, #paper, #scissors').prop('disabled', true);
			$('body').css('color', 'white')
			$('button').css('background', 'white')
			$('.scoreboard').css('borderColor', 'white')
			$('.scoreboard h2').css('borderBottomColor', 'white')
			$('#status').html('')
		}
	}

	function clearBonusMessage() {
		$('#bonus-message').text('')
	}

	function resetGame() {
		$('#reset').click(() => {
			botScore = 0
			userScore = 0
			botWins = 0
			userWins = 0
			$('#computerScore').text(botScore)
			$('#humanScore').text(userScore)
			$('#wise-message').text('Choose Wisely')
			$('#wise-message').removeClass('winner')
			$('#status').html('')
			$('body').css('color', 'lime')
			$('button').css('background', 'lime')
			$('.scoreboard').css('borderColor', 'lime')
			$('.scoreboard h2').css('borderBottomColor', 'lime')
			$('#rock, #paper, #scissors').prop('disabled', false);
		})
	}

})