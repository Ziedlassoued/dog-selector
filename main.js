import { createElement } from './lib/element';
import './style.css';

function mainApp() {
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

  const mainElement = createElement(
    'main',
    {
      className: 'main',
    },
    [
      createElement('p', {
        textContent: 'Please wait...',
      }),
    ]
  );

  appElement.append(headerElement, mainElement);
}
mainApp();
