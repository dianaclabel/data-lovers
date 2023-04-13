// estas funciones son de ejemplo
// import data from "./data/harrypotter/data.js";

// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };
//total de personajes
export const computeStats = function (data) {
  const totalEstudiantes = {
    hufflepuff: 0,
    gryffindor: 0,
    ravenclaw: 0,
    slytherin: 0,
  };

  data.characters.forEach(function (element) {
    if (element.house === "Hufflepuff") {
      totalEstudiantes.hufflepuff += 1;
    }
    if (element.house === "Gryffindor") {
      totalEstudiantes.gryffindor += 1;
    }
    if (element.house === "Ravenclaw") {
      totalEstudiantes.ravenclaw += 1;
    }
    if (element.house === "Slytherin") {
      totalEstudiantes.slytherin += 1;
    }
  });

  return totalEstudiantes;
};

//Filtrar los personajes segun la letra del buscador

// export const filterData = function (data, condition) {};

//hechizos
export const filterSpells = (spellName) => {
  return data.spells.filter((spell) => spell.name.includes(spellName));
};
