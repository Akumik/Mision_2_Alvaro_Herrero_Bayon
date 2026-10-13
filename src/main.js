import './style.css';
import { getMonsters } from './api.js';
import { onlyLarge, simplify, filterBySpecies, countBySpecies } from './logic.js';
import { renderLoading, renderError, renderPage, renderList } from './render.js';

async function init() {
  renderLoading();

  try {
    const data = await getMonsters();
    const monsters = simplify(onlyLarge(data));

    renderPage(monsters, countBySpecies(monsters));

    document.querySelector('#species').addEventListener('change', (e) => {
      renderList(filterBySpecies(monsters, e.target.value));
    });
  } catch (error) {
    renderError(error.message);
  }
}

init();