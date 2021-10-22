import { createElement } from '../lib/element';
import styles from './dogCard.module.css';

export default function createDogCard(image, race) {
  const dogCard = createElement(
    'article',
    {
      clasName: styles.card,
    },
    [
      createElement('img', { className: styles.img, src: image }),
      createElement('h2', { textContent: race }),
    ]
  );

  return dogCard;
}
