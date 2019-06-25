import labels from '../labels';

export default function getComputerChoice() {
  const rand = Math.random();
  if (rand < 0.34) {
    return labels.rock;
  } else if (rand <= 0.67) {
    return labels.paper;
  } else {
    return labels.scissors;
  }
}
