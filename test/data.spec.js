import {
  computeStats,
  dataNameToLowerCase,
  filterData,
  filterGender,
  filterBooks,
  filterTypeAncestry,
  orderName,
} from "../src/js/data.js";

const characters = [
  { name: "Juan", gender: "Male", house: "Gryffindor", ancestry: "Pure-blood" },
  { name: "Carla", gender: "Female", house: "Ravenclaw", ancestry: "Muggle" },
  {
    name: "Rodrigo",
    gender: "Male",
    house: "Gryffindor",
    ancestry: "Pure-blood",
  },
  {
    name: "Mariano",
    gender: "Male",
    house: "Slytherin",
    ancestry: "Half-bood",
  },
  { name: "Maria", gender: "Female", house: "Ravenclaw", ancestry: "Muggle" },
  { name: "Ana", gender: "Female", house: "Slytherin", ancestry: "Half-bood" },
  {
    name: "Rosa",
    gender: "Female",
    house: "Hufflepuff",
    ancestry: "Half-bood",
  },
  { name: "Piero", gender: "Male", house: "Hufflepuff", ancestry: "Muggle" },
];

const books = [{ title: "Los tres cerditos" }, { title: "La cenicienta" }];

const charactersGryffindor = [
  { name: "Juan", gender: "Male", house: "Gryffindor", ancestry: "Pure-blood" },
  {
    name: "Rodrigo",
    gender: "Male",
    house: "Gryffindor",
    ancestry: "Pure-blood",
  },
];

const charactersSlytherin = [
  {
    name: "Mariano",
    gender: "Male",
    house: "Slytherin",
    ancestry: "Half-bood",
  },
  { name: "Ana", gender: "Female", house: "Slytherin", ancestry: "Half-bood" },
];

const charactersMale = [
  { name: "Juan", gender: "Male", house: "Gryffindor", ancestry: "Pure-blood" },
  {
    name: "Rodrigo",
    gender: "Male",
    house: "Gryffindor",
    ancestry: "Pure-blood",
  },
  {
    name: "Mariano",
    gender: "Male",
    house: "Slytherin",
    ancestry: "Half-bood",
  },
  { name: "Piero", gender: "Male", house: "Hufflepuff", ancestry: "Muggle" },
];

const charactersFemale = [
  { name: "Carla", gender: "Female", house: "Ravenclaw", ancestry: "Muggle" },
  { name: "Maria", gender: "Female", house: "Ravenclaw", ancestry: "Muggle" },
  { name: "Ana", gender: "Female", house: "Slytherin", ancestry: "Half-bood" },
  {
    name: "Rosa",
    gender: "Female",
    house: "Hufflepuff",
    ancestry: "Half-bood",
  },
];

const charactersMuggle = [
  { name: "Carla", gender: "Female", house: "Ravenclaw", ancestry: "Muggle" },
  { name: "Maria", gender: "Female", house: "Ravenclaw", ancestry: "Muggle" },
  { name: "Piero", gender: "Male", house: "Hufflepuff", ancestry: "Muggle" },
];

const charactersPureBlood = [
  { name: "Juan", gender: "Male", house: "Gryffindor", ancestry: "Pure-blood" },
  {
    name: "Rodrigo",
    gender: "Male",
    house: "Gryffindor",
    ancestry: "Pure-blood",
  },
];
const charactersOrderName = [
  { name: "Ana", gender: "Female", house: "Slytherin", ancestry: "Half-bood" },
  { name: "Carla", gender: "Female", house: "Ravenclaw", ancestry: "Muggle" },
  { name: "Juan", gender: "Male", house: "Gryffindor", ancestry: "Pure-blood" },
  { name: "Maria", gender: "Female", house: "Ravenclaw", ancestry: "Muggle" },
  {
    name: "Mariano",
    gender: "Male",
    house: "Slytherin",
    ancestry: "Half-bood",
  },
  { name: "Piero", gender: "Male", house: "Hufflepuff", ancestry: "Muggle" },
  {
    name: "Rodrigo",
    gender: "Male",
    house: "Gryffindor",
    ancestry: "Pure-blood",
  },
  {
    name: "Rosa",
    gender: "Female",
    house: "Hufflepuff",
    ancestry: "Half-bood",
  },
];

const nameCharacter = {
  name: "Juan",
  gender: "Male",
  house: "Gryffindor",
  ancestry: "Pure-blood",
};

const nameToLowerCase = "juan";

describe("test function for computeStats", () => {
  it("counts characters for each house", () => {
    expect(computeStats({ characters })).toEqual({
      hufflepuff: 2,
      gryffindor: 2,
      ravenclaw: 2,
      slytherin: 2,
    });
  });
});

describe("test function for character of each house", () => {
  it("function for characters of gryffindor", () => {
    expect(filterData({ characters }, "Gryffindor")).toEqual(
      charactersGryffindor
    );
  });
});

describe("test function for character of each house", () => {
  it("function for characters of slytherin", () => {
    expect(filterData({ characters }, "Slytherin")).toEqual(
      charactersSlytherin
    );
  });
});

describe("test function for lowercase name", () => {
  it("function for lowercase character name", () => {
    expect(dataNameToLowerCase(nameCharacter)).toEqual(nameToLowerCase);
  });
});

describe("test function gender", () => {
  it("Filter male", () => {
    expect(filterGender(characters, "Male")).toEqual(charactersMale);
  });
});

describe("test function gender", () => {
  it("Filter Female", () => {
    expect(filterGender(characters, "Female")).toEqual(charactersFemale);
  });
});

describe("test function ancestry", () => {
  it("Filter muggle", () => {
    expect(filterTypeAncestry(characters, "Muggle")).toEqual(charactersMuggle);
  });
});

describe("test function ancestry", () => {
  it("Filter pure-blood", () => {
    expect(filterTypeAncestry(characters, "Pure-blood")).toEqual(
      charactersPureBlood
    );
  });
});

describe("test function order name", () => {
  it("order A-Z", () => {
    expect(orderName(characters)).toEqual(charactersOrderName);
  });
});

describe("test function books", () => {
  it("Filter books", () => {
    expect(filterBooks({ books })).toEqual(books);
  });
});
