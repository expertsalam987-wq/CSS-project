const choices = document.querySelectorAll('.choice');
const resultText = document.getElementById('resultText');
const playerChoiceDisplay = document.getElementById('playerChoice');
const computerChoiceDisplay = document.getElementById('computerChoice');
const scoreDisplay = document.getElementById('score');

let score = 0;

choices.forEach(choice => {
  choice.addEventListener('click', () => {
    const playerChoice = choice.getAttribute('data-choice');
    playRound(playerChoice);
  });
});

function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
  const result = determineWinner(playerChoice, computerChoice);

  playerChoiceDisplay.textContent = `You chose: ${playerChoice} `;
  computerChoiceDisplay.textContent = `Computer chose: ${computerChoice} `;

  if (result === 'win') {
    resultText.textContent = '🎉 You Win!';
    resultText.style.color = 'green';
    score++;
  } else if (result === 'lose') {
    resultText.textContent = '😞 You Lose!';
    resultText.style.color = 'red';
    score--;
  } else {
    resultText.textContent = '🤝 It’s a Draw!';
    resultText.style.color = '#555';
  }

  scoreDisplay.textContent = score;
}

function getComputerChoice() {
  const options = ['rock', 'paper', 'scissors'];
  return options[Math.floor(Math.random() * options.length)];
}

function determineWinner(player, computer) {
  if (player === computer) return 'draw';
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    return 'win';
  }
  return 'lose';
}
