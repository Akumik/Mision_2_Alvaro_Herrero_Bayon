export function onlyLarge(monsters) {
    return monsters.filter(monster => monster.type === "large");
}

export function simplify(monsters) {
    return monsters.map(monster => ({
        id: monster.id,
        name: monster.name,
        species: monster.species,
        description: monster.description,
        element: monster.element,
        weaknesses: [...new Set(monster.weaknesses.filter(weakness => weakness.stars >= 3)
            .map(weakness => weakness.element))],
        weaknessStars: bestWeaknessStars(monster.weaknesses),
        resistances: [...new Set(monster.resistances.map(resistance => resistance.element))],
        locations: monster.locations.map(location => location.name)
    }));
}

export function filterBySpecies(monsters, species) {
    if (!species) {
        return monsters;
    }
    return monsters.filter(monster => monster.species === species);
}

export function countBySpecies(monsters) {
    return monsters.reduce((acc, monster) => {
        acc[monster.species] = (acc[monster.species] || 0) + 1;
        return acc;
    }, {});
}

export function bestWeaknessStars(weaknesses) {
    const byElement = weaknesses.reduce((acc, weakness) => {
        acc[weakness.element] = Math.max(acc[weakness.element] || 0, weakness.stars);
        return acc;
    }, {});
    
    return Object.entries(byElement).map(([element, stars]) => ({ element, stars }))
    .sort((a, b) => b.stars - a.stars);

}

export function findById(monsters, id) {
    return monsters.find(monster => monster.id === id);
}


