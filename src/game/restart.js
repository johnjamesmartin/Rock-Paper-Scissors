import labels from '../labels';
import scoreboard from './scoreboard';

export default function restartGame() {
  scoreboard.player = 0;
  scoreboard.computer = 0;
  score.innerHTML = `
    <div>${labels.player}: 0</div>
    <div>${labels.computer}: 0</div>
  `;
}
