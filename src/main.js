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

    document.querySelector('#list').addEventListener('click', (e) => {
      const card = e.target.closest('.card');
      if (!card){
        return;
      }
      const monster = findById(monsters, Number(card.dataset.id));
      renderDetails(monster);
    });

    document.querySelector('#details').addEventListener('click', (e) => {
      if (e.target.id === 'close' || e.target.id === 'details') {
        hideDetails();
      }
    });

  } catch (error) {
    renderError(error.message);
  }
}

init();