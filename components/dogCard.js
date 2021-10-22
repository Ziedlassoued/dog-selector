import { createElement } from '../lib/element';
import styles from './dogCard.module.css';

export default function createDogCard(image) {
  const dogCard = createElement(
    'article',
    {
      clasName: styles.card,
    },
    [createElement('img', { src: image })]
  );

  return dogCard;
}
