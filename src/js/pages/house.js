import { filterData } from "../data.js";

import data from "../../data/harrypotter/data.js";

const house = document.getElementById("house").value;
const buscadorInput = document.querySelector("#buscador-house");
//buscar a los personajes por cada letra que esta en el buscador
function buscarPersonajes() {
  buscadorInput.addEventListener("keyup", (e) => {
    const valorBuscador = buscadorInput.value;
    console.log(valorBuscador);
  });
}

function creacionCard() {
  let cardEstudiantesDiv = document.createElement("div");
  cardEstudiantesDiv.classList.add("card-estudiante");
}

buscarPersonajes(data);
