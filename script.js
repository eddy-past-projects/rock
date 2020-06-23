const picks = [ 'Rock', 'Paper', 'Scissors' ];
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
	button.addEventListener('click', playgame);
});

const player = document.querySelector('.player');
const computer = document.querySelector('.computer');
const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector('.computerScore');
const outcome = document.querySelector('.outcome');

function playgame(e) {
	const playerPick = e.target.innerText;
	let computerPick = picks[Math.floor(Math.random() * picks.length)].toUpperCase();
	player.innerHTML = ' ' + playerPick.toLowerCase() + '   ';
	computer.innerText = ' ' + computerPick.toLowerCase() + ' ';

	let result = checkWinner(playerPick, computerPick);

	if (result === 'Player') {
		outcome.innerText = 'Player wins!';
		playerScore.innerText++;
	}

	if (result === 'Computer') {
		outcome.innerText = 'Computer wins!';
		computerScore.innerText++;
	}

	if (result === 'Draw') {
		outcome.innerText = "It's a tie!";
	}
}

function checkWinner(player, computer) {
	if (player === computer) {
		return 'Draw';
	}

	if (player === 'ROCK') {
		if (computer === 'PAPER') {
			return 'Computer';
		} else {
			return 'Player';
		}
	}

	if (player === 'PAPER') {
		if (computer === 'SCISSORS') {
			return 'Computer';
		} else {
			return 'Player';
		}
	}

	if (player === 'SCISSORS') {
		if (computer === 'ROCK') {
			return 'Computer';
		} else {
			return 'Player';
		}
	}
}
