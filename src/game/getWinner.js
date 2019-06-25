import labels from '../labels';

export default function getWinner(p, c) {
  if (p === c) {
    return labels.draw;
  } else if (p === labels.rock) {
    return c === labels.paper ? labels.computer : labels.player;
  } else if (p === labels.paper) {
    return c === labels.scissors ? labels.computer : labels.player;
  } else if (p === labels.scissors) {
    return c === labels.rock ? labels.computer : labels.player;
  }
}
