import labels from '../../labels';

export default function ConstructResult(o) {
  return `<h1 class="${o.className}">${o.title}</h1>
  <i class="${o.icon}"></i>
  <p>${labels.ui.computerChose} <strong>${o.cpu}</strong></p>`;
}
