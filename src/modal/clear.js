const modal = document.querySelector('.modal');

export default function clearModal(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
