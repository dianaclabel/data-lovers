import { computeStats } from "../data.js";
import data from "../../data/harrypotter/data.js";

const numeroTotalP = document.querySelectorAll(".numero-total");

//total de estudiantes por casa
function totalEStudiantesCasa(data) {
  const totalTodosEstudiantes = computeStats(data);

  numeroTotalP[0].innerText = totalTodosEstudiantes.hufflepuff;
  numeroTotalP[1].innerText = totalTodosEstudiantes.gryffindor;
  numeroTotalP[2].innerText = totalTodosEstudiantes.ravenclaw;
  numeroTotalP[3].innerText = totalTodosEstudiantes.slytherin;

  //   console.log(totalTodosEstudiantes);
}

totalEStudiantesCasa(data);
