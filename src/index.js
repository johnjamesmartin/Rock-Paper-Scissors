import takeTurn from './game/takeTurn';
import clearModal from './modal/clear';
import restartGame from './game/restart';

const choices = document.querySelectorAll('.choice');
const restart = document.getElementById('restart');

/* Event listeners:
 *******************************************/
choices.forEach(choice => choice.addEventListener('click', takeTurn));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);
