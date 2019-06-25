import getComputerChoice from './getComputerChoice';
import getWinner from './getWinner';
import showWinner from './showWinner';

export default function takeTurn(e) {
  restart.style.display = 'inline-block';
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  showWinner(winner, computerChoice);
}
