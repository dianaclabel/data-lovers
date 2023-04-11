import { computeStats } from "./data.js";
// import data from './data/lol/lol.js';
import data from "./data/harrypotter/data.js";
// import data from './data/rickandmorty/rickandmorty.js';

// console.log(example, data);

const numeroTotalP = document.querySelectorAll("#numero-total");

function totalEStudiantesCasa(data) {
  let totalTodosEstudiantes = computeStats(data);

  numeroTotalP[0].innerText = totalTodosEstudiantes.hufflepuff;
  numeroTotalP[1].innerText = totalTodosEstudiantes.gryffindor;
  numeroTotalP[2].innerText = totalTodosEstudiantes.ravenclaw;
  numeroTotalP[3].innerText = totalTodosEstudiantes.slytherin;

  //   console.log(totalTodosEstudiantes);
}

totalEStudiantesCasa(data);
