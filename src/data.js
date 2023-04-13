import data from "./data/harrypotter/data.js";

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

export const filterSpells = (spellName) => {
  return data.spells.filter(spell => spell.name.includes(spellName));
}
