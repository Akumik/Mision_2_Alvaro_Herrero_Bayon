export function onlyLarge(monsters) {
    return monsters.filter(monster => monster.type === "large");
}

export function simplify(monsters) {
    return monsters.map(monster => ({
        name: monster.name,
        species: monster.species,
        weaknesses: [...new Set(monster.weaknesses.filter(weakness => weakness.stars >= 3)
            .map(weakness => weakness.element))],
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