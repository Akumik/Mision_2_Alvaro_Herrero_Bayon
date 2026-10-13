const app = document.querySelector("#app");

export function renderLoading(){
    app.innerHTML = `<p class="loading">Cargando monstruos...</p>`;
}

export function renderError(message){
    app.innerHTML = `<p class="error">No se han podido cargar los datos: ${message}</p>`;
}

export function renderPage(monsters, counts) {
    const options = Object.keys(counts).map(species => `<option value="${species}">${species} (${counts[species]})</option>`).join("");

    app.innerHTML = `<h1>Monstruos de Monster Hunter World</h1>
    <select id="species">
        <option value="">Todas las especies</option>
        ${options}
    </select>
    <ul id="list" class="grid"></ul>`;
    renderList(monsters);
}

export function renderList(monsters) {
    const list = document.querySelector("#list");
    list.innerHTML = monsters.map(monster => `
        <li class="card">
            <h3>${monster.name}</h3>
            <p>Especie: ${monster.species}</p>
            <p>Debilidades: ${monster.weaknesses.join(", ")}</p>
        </li>
    `).join("");
}