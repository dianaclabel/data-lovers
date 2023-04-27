import { computeStats, filterData, filterGender, filterSpells, filterPotions  } from "../src/js/data.js";

const characters = [
  { name: "Juan", gender: "Male", house: "Gryffindor", ancestry: "Pure-blood" },
  { name: "Carla", gender: "Female", house: "Ravenclaw", ancestry: "Muggle" },
  {
    name: "Rodrigo",
    gender: "Male",
    house: "Gryffindor",
    ancestry: "Pure-blood",
  },
  { name: "Maria", gender: "Female", house: "Ravenclaw", ancestry: "Muggle" },
];

const charactersGryffindor = [
  { name: "Juan", gender: "Male", house: "Gryffindor", ancestry: "Pure-blood" },
  {
    name: "Rodrigo",
    gender: "Male",
    house: "Gryffindor",
    ancestry: "Pure-blood",
  },
];

const charactersMale = [
  { name: "Juan", gender: "Male", house: "Gryffindor", ancestry: "Pure-blood" },
  {
    name: "Rodrigo",
    gender: "Male",
    house: "Gryffindor",
    ancestry: "Pure-blood",
  },
];

describe("test function for computeStats", () => {
  it("counts characters for each house", () => {
    expect(computeStats({ characters })).toEqual({
      hufflepuff: 0,
      gryffindor: 2,
      ravenclaw: 2,
      slytherin: 0,
    });
  });
});

describe("test function gender", () => {
  it("Filter male", () => {
    expect(filterGender(characters, "Male")).toEqual(charactersMale);
  });
});

describe("test function for character of each house", () => {
  it("function for characters of gryffindor", () => {
    expect(filterData({ characters }, "Gryffindor")).toEqual(
      charactersGryffindor
    );
  });
});

describe('filterSpells', () => {
  test('debería devolver una lista filtrada de hechizos que contengan el nombre de hechizo proporcionado', () => {
    const spellName = 'Accio';
    const filteredSpells = filterSpells(spellName);
    expect(Array.isArray(filteredSpells)).toBe(true);
    expect(filteredSpells[0].name).toEqual(spellName);
  });

  test('debería devolver una lista vacía si no se encuentran hechizos que contengan el nombre de hechizo proporcionado', () => {
    const spellName = 'Hechizo que no existe';
    const filteredSpells = filterSpells(spellName);
    expect(filteredSpells).toEqual([]);
  });

  test('debería devolver una la cantidad de hechizos que coincidan con la palabra ingresada', () => {
    const spellName = 'Anti';
    const filteredSpells = filterSpells(spellName);
    expect(filteredSpells.length).toEqual(3);
  });
});

describe('filterPotions', () => {
  test('debería devolver una lista filtrada de pociones que contengan el nombre de la pocion proporcionada', () => {
    const potionName = 'Bulgeye';
    const filteredPotions = filterPotions(potionName);
    expect(Array.isArray(filteredPotions)).toBe(true);
    expect(filteredPotions).toEqual([{
      id: 21,
      name: "Bulgeye Potion",
      description: "Presumed to make the taker's eyes swell.",
    }]);
  });

  test('debería devolver una lista vacía si no se encuentran la pocion que contengan el nombre de pocion proporcionada', () => {
    const potionName = 'Pocion que no existe';
    const filteredPotions = filterPotions(potionName);
    expect(filteredPotions).toEqual([]);
  });

  test('debería devolver una la cantidad de pociones que coincidan con la palabra ingresada', () => {
    const potionName = 'Antidote';
    const filteredPotions = filterPotions(potionName);
    expect(filteredPotions.length).toEqual(6);
  });
});