// estas funciones son de ejemplo
export const example = () => {
  return "example";
};

export const anotherExample = () => {
  return "OMG";
};

//total de personajes
export let computeStats = function (data) {
  let totalHufflepuff = 0;
  let totalGryffindor = 0;
  let totalRavenclaw = 0;
  let totalSlytherin = 0;

  data.characters.forEach(function (element) {
    if (element.house === "Hufflepuff") {
      totalHufflepuff += 1;
    }
    if (element.house === "Gryffindor") {
      totalGryffindor += 1;
    }
    if (element.house === "Ravenclaw") {
      totalRavenclaw += 1;
    }
    if (element.house === "Slytherin") {
      totalSlytherin += 1;
    }
  });
  console.log(totalHufflepuff, totalGryffindor, totalRavenclaw, totalSlytherin);
};
