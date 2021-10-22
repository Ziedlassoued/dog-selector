import { createElement } from './lib/element';
import './style.css';
import createDogCard from './components/dogCard';

async function mainApp() {
  const appElement = document.querySelector('#app');
  const headerElement = createElement(
    'header',
    {
      className: 'header',
    },
    [
      createElement('h1', {
        textContent: 'Dogs Random Selector',
      }),
    ]
  );

  const response = await fetch('https://dog.ceo/api/breed/hound/images');
  const body = await response.json();
  const breeds = body.message;
  console.log(breeds);
  const dogCards = breeds.map((image) => createDogCard(image));

  const mainElement = createElement(
    'main',
    {
      className: 'main',
    },
    dogCards
  );

  appElement.append(headerElement, mainElement);
}
mainApp();
