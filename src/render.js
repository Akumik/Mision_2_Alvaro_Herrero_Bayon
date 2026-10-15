const app = document.querySelector("#app");

export function renderLoading(){
    app.innerHTML = `<p class="loading">Loading monsters...</p>`;
}

export function renderError(message){
    app.innerHTML = `<p class="error">Failed to load data: ${message}</p>`;
}

export function renderPage(monsters, counts) {
    const options = Object.keys(counts).map(species => `<option value="${species}">${species} (${counts[species]})</option>`).join("");

    app.innerHTML = `<h1>Monster Hunter World Monsters</h1>
    <select id="species">
        <option value="">All Species</option>
        ${options}
    </select>
    <ul id="list" class="grid"></ul>
    <div id="details" class="detail hidden"></div>`;
    renderList(monsters);
}

export function renderList(monsters) {
    const list = document.querySelector("#list");
    list.innerHTML = monsters.map(monster => `
        <li class="card" data-id="${monster.id}">
            <h3>${monster.name}</h3>
            <p>Species: ${monster.species}</p>
            <p>Weaknesses: ${monster.weaknesses.join(", ")}</p>
        </li>
    `).join("");
}

export function renderDetails(monster) {
    const details = document.querySelector("#details");
    details.innerHTML = `<div class="detail-box">
        <button id="close">Close</button>
        <h2>${monster.name}</h2>
        <p><em>${monster.species}</em></p>
        <p>${monster.description}</p>
        <h3>Elements</h3>
        <p>${monster.elements.join(", ") || "None"}</p>

        <h3>Weaknesses</h3>
        <div class="weak-row">
            <ul>
                ${monster.weaknessStars.map(weakness => `<li>${weakness.element} ${"★".repeat(weakness.stars)}</li>`).join("")}
            </ul>
            <img src="${monster.image}" alt="${monster.name}" class="detail-img" onerror="this.remove()">
        </div>
        <h3>Resistances</h3>
        <p>
            ${monster.resistances.join(", ") || "None"}
        </p>

        <h3>Locations</h3>
        <ul>
            ${monster.locations.map(location => `<li>${location}</li>`).join("")}
        </ul>

    </div>`;
    details.classList.remove("hidden");
}

export function hideDetails() {
    document.querySelector("#details").classList.add("hidden");
}