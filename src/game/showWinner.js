import labels from '../labels';
import scoreboard from './scoreboard';
import gameResult from './elementConstructor/gameResult';

const modal = document.querySelector('.modal');

export default function showWinner(winner, computerChoice) {
  if (winner === 'player') {
    scoreboard.player++;
    result.innerHTML = gameResult({
      title: 'You Win',
      className: 'text-win',
      icon: `fas fa-hand-${computerChoice} fa-10x`,
      cpu: computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    });
  } else if (winner === labels.computer) {
    scoreboard.computer++;
    result.innerHTML = gameResult({
      title: 'You Lose',
      className: 'text-lose',
      icon: `fas fa-hand-${computerChoice} fa-10x`,
      cpu: computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    });
  } else {
    result.innerHTML = gameResult({
      title: "It's a Draw!",
      className: '',
      icon: `fas fa-hand-${computerChoice} fa-10x`,
      cpu: computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    });
  }

  /* Update score width by percentage:
   *******************************************/
  let a = scoreboard.player;
  let b = scoreboard.computer;
  let playerPercentage = (a / (a + b)) * 100;
  let computerPercentage = (b / (a + b)) * 100;
  score.innerHTML = `
    <div style="width:${playerPercentage}%;">Player: ${scoreboard.player}</div>
    <div style="width:${computerPercentage}%;">Computer: ${
    scoreboard.computer
  }</div>
    `;

  modal.style.display = 'block';
}
