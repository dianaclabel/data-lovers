import { filterData } from "../data.js";
import { dataNameToLowerCase } from "../data.js";
import { filterGender } from "../data.js";

import data from "../../data/harrypotter/data.js";

//buscar a los personajes por cada letra que esta en el buscador

const houseSelection = document.getElementById("house").value;
const seleccionFiltracionSelect = document.getElementById(
  "seleccion-filtracion"
);
const buscadorInput = document.querySelector("#buscador-house");
const contenedorCardsEstudiantesDiv = document.getElementById(
  "contenedor-cards-estudiantes"
);
//Todos los personajes por casa
const estudiantesHouseSelection = filterData(data, houseSelection);

function buscarPersonajes() {
  buscadorInput.addEventListener("keyup", () => {
    contenedorCardsEstudiantesDiv.innerHTML = "";
    const valorBuscador = buscadorInput.value.toLowerCase();

    const estudiantesEncontrados = estudiantesHouseSelection.filter(
      (estudianteHouseSelection) => {
        const nameEstudianteMinuscula = dataNameToLowerCase(
          estudianteHouseSelection
        );
        return nameEstudianteMinuscula.includes(valorBuscador);
      }
    );

    for (const estudianteEncontrado of estudiantesEncontrados) {
      contenedorCardsEstudiantesDiv.appendChild(
        creacionCard(estudianteEncontrado)
      );
    }

    console.log(valorBuscador);
    console.log(estudiantesEncontrados);
  });
}

seleccionFiltracionSelect.addEventListener("change", () => {
  contenedorCardsEstudiantesDiv.innerHTML = "";
  const valorSeleccion = seleccionFiltracionSelect.value;

  if (valorSeleccion === "Male" || valorSeleccion === "Female") {
    const personajesFiltradosGenero = filterGender(
      estudiantesHouseSelection,
      valorSeleccion
    );
    for (const personajeFiltradosGenero of personajesFiltradosGenero) {
      contenedorCardsEstudiantesDiv.appendChild(
        creacionCard(personajeFiltradosGenero)
      );
    }
  }
});

function creacionCard(data) {
  const personajeEncontrado = data;

  const cardEstudianteDiv = document.createElement("div");
  cardEstudianteDiv.classList.add("card-estudiante");

  const contenedorImgDiv = document.createElement("div");
  contenedorImgDiv.classList.add("contenedor-img");

  const imagenCasaImg = document.createElement("img");
  imagenCasaImg.classList.add("card-estudiante__img");
  imagenCasaImg.setAttribute(
    "src",
    "../../assets/escudo-" + `${houseSelection}` + ".png"
  );

  const contenedorCardInfoDiv = document.createElement("div");
  contenedorCardInfoDiv.classList.add("card-estudiante__info");

  const cardInfoTituloH3 = document.createElement("h3");
  cardInfoTituloH3.classList.add("card-estudiante__info--titulo");
  cardInfoTituloH3.innerText = personajeEncontrado.name;

  contenedorImgDiv.appendChild(imagenCasaImg);
  contenedorCardInfoDiv.appendChild(cardInfoTituloH3);

  const propiedadInfo = [
    "Birthdate:",
    "Specie:",
    "Gender:",
    "Group Association:",
  ];

  const valorInfo = [
    personajeEncontrado.birth,
    personajeEncontrado.species,
    personajeEncontrado.gender,
    personajeEncontrado.associated_groups[0],
  ];

  const nombreClasePadre = [
    "card-estudiante__info--birthdate",
    "card-estudiante__info--specie",
    "card-estudiante__info--gender",
    "card-estudiante__info--group",
  ];

  for (let i = 0; i < nombreClasePadre.length; i++) {
    const contenedorPropiedadDiv = document.createElement("div");
    contenedorPropiedadDiv.classList.add(nombreClasePadre[i]);

    const elementNegritaP = document.createElement("P");
    elementNegritaP.classList.add("info-negrita");
    elementNegritaP.innerText = propiedadInfo[i];

    const elementP = document.createElement("P");
    elementP.innerText = valorInfo[i];

    contenedorPropiedadDiv.appendChild(elementNegritaP);
    contenedorPropiedadDiv.appendChild(elementP);
    contenedorCardInfoDiv.appendChild(contenedorPropiedadDiv);
  }

  cardEstudianteDiv.appendChild(contenedorImgDiv);
  cardEstudianteDiv.appendChild(contenedorCardInfoDiv);

  console.log(cardEstudianteDiv);
  return cardEstudianteDiv;
}

buscarPersonajes(data);
