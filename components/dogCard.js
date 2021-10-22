import { createElement } from '../lib/element';
import styles from '.dogCard.module.css';

export default function createDogCard({ name, message, status }) {
  const dogCard = createElement(
    'article',
    {
      clasName: styles.card,
    },
    [
      createElement('img', { className: message }),
      createElement('h2', { textContent: name }),
      createElement('img', { textContent: status }),
    ]
  );

  return dogCard;
}
