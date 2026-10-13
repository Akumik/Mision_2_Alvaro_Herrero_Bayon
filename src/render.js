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
    <ul id="list" class="grid"></ul>
    <ul id="list" class="grid"></ul>
    <div id="details" class="detail hidden"></div>`;
    renderList(monsters);
}

export function renderList(monsters) {
    const list = document.querySelector("#list");
    list.innerHTML = monsters.map(monster => `
        <li class="card" data-id="${monster.id}">
            <h3>${monster.name}</h3>
            <p>Especie: ${monster.species}</p>
            <p>Debilidades: ${monster.weaknesses.join(", ")}</p>
        </li>
    `).join("");
}

export function renderDetails(monster) {
    const details = document.querySelector("#details");
    details.innerHTML = `<div class="detail-box">
        <button id="close">Cerrar</button>
        <h2>${monster.name}</h2>
        <p><em>${monster.species}</em></p>
        <p>${monster.description}</p>
        <h3>Elementos</h3>
        <p>${monster.elements.join(", ") || "Ninguno"}</p>

        <h3>Debilidades</h3>
        <ul>
            ${monster.weaknessStars.map(weakness => `<li>${weakness.element} ${"★".repeat(weakness.stars)}</li>`).join("")}
        </ul>

        <h3>Zonas</h3>
        <ul>
            ${monster.locations.map(location => `<li>${location}</li>`).join("")}
        </ul>
    </div>`;
    details.classList.remove("hidden");
}

export function hideDetails() {
    document.querySelector("#details").classList.add("hidden");
}