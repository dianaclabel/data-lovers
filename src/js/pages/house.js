import { filterData } from "../data.js";
import { dataNameToLowerCase } from "../data.js";

import data from "../../data/harrypotter/data.js";

//buscar a los personajes por cada letra que esta en el buscador

const houseSelectionInput = document.getElementById("house").value;
const buscadorInput = document.querySelector("#buscador-house");

function buscarPersonajes(data) {
  buscadorInput.addEventListener("keyup", (e) => {
    const valorBuscador = buscadorInput.value;
    //Todos los personajes por casa
    const estudiantesHouseSelection = filterData(data, houseSelectionInput);
    // Todos los nombre de los personajes en minuscula
    const nombreEstudiantesMinuscula = dataNameToLowerCase(
      estudiantesHouseSelection
    );

    // const estudiantesBuscados = nombreEstudiantesMinuscula.filter(
    //   (estudianteHouseSelection) => {
    //     if (estudianteHouseSelection.includes(valorBuscador)) {
    //       return estudiantesHouseSelection;
    //     }
    //   }
    // );

    const estudiantesBuscados = nombreEstudiantesMinuscula.filter(
      (estudianteHouseSelection) => {
        if (estudianteHouseSelection.includes(valorBuscador)) {
          return estudiantesHouseSelection.id;
        }
      }
    );

    console.log(valorBuscador);
    console.log(estudiantesBuscados);
  });
}
buscarPersonajes(data);

function creacionCard() {
  const cardEstudiantesDiv = document.createElement("div");
  cardEstudiantesDiv.classList.add("card-estudiante");

  const contenedorImgDiv = document.createElement("div");
  contenedorImgDiv.classList.add("contenedor-img");

  const imagenCasaImg = document.createElement("img");
  imagenCasaImg.classList.add("card-estudiante__img");

  const contenedorCardInfoDiv = document.createElement("div");
  contenedorCardInfoDiv.classList.add("card-estudiante__info");

  const cardInfoTituloH3 = document.createElement("h3");
  cardInfoTituloH3.classList.add("card-estudiante__info--titulo");

  contenedorImgDiv.appendChild(imagenCasaImg);
  contenedorCardInfoDiv.appendChild(cardInfoTituloH3);

  const propiedadInfo = [
    "Birthdate:",
    "Specie:",
    "Death:",
    "Group Association:",
  ];

  const nombreClasePadre = [
    "card-estudiante__info--birthdate",
    "card-estudiante__info--specie",
    "card-estudiante__info--death",
    "card-estudiante__info--group",
  ];

  for (let i = 0; i < nombreClasePadre.length; i++) {
    const contenedorPropiedadDiv = document.createElement("div");
    contenedorPropiedadDiv.classList.add(nombreClasePadre[i]);

    const elementNegritaP = document.createElement("P");
    elementNegritaP.classList.add("info-negrita");
    elementNegritaP.innerText = propiedadInfo[i];

    const elementP = document.createElement("P");
    elementP.innerText = "valor" + propiedadInfo[i];

    contenedorPropiedadDiv.appendChild(elementNegritaP);
    contenedorPropiedadDiv.appendChild(elementP);
    contenedorCardInfoDiv.appendChild(contenedorPropiedadDiv);
  }

  cardEstudiantesDiv.appendChild(contenedorImgDiv);
  cardEstudiantesDiv.appendChild(contenedorCardInfoDiv);

  console.log(cardEstudiantesDiv);
}

creacionCard();
// buscarPersonajes(data);
