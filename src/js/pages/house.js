// // import { filterData } from "../data.js";

// // import data from "../../data/harrypotter/data.js";

// //buscar a los personajes por cada letra que esta en el buscador

// // const houseHiddenInput = document.getElementById("house").value;
// const buscadorInput = document.querySelector("#buscador-house");

// function buscarPersonajes() {
//   buscadorInput.addEventListener("keyup", (e) => {
//     const valorBuscador = buscadorInput.value;
//     console.log(valorBuscador);
//   });
// }

// function creacionCard() {
//   const cardEstudiantesDiv = document.createElement("div");
//   cardEstudiantesDiv.classList.add("card-estudiante");

//   const contenedorImgDiv = document.createElement("div");
//   contenedorImgDiv.classList.add("contenedor-img");

//   const contenedorCardInfoDiv = document.createElement("div");
//   contenedorCardInfoDiv.classList.add("card-estudiante__info");

//   cardEstudiantesDiv.appendChild(contenedorImgDiv);
//   cardEstudiantesDiv.appendChild(contenedorCardInfoDiv);

//   const nameClassPadre = [
//     "card-estudiante__info--birthdate",
//     "card-estudiante__info--specie",
//     "card-estudiante__info--death",
//     "card-estudiante__info--group",
//   ];

//   for (let i = 0; i < nameClassPadre.length; i++) {
//     const elementDiv = document.createElement("div");
//     elementDiv.classList.add(nameClassPadre[i]);

//     contenedorCardInfoDiv.appendChild(elementDiv);

//     for (let i = 0; i < 2; i++) {
//       if (i % 0) {
//         const elementDiv = document.createElement("div");
//         elementDiv.classList.add(nameClassPadre[i]);
//       }
//     }
//   }

//   const cardInfoTituloH3 = document.createElement("h3");
//   cardInfoTituloH3.classList.add("card-estudiante__info--titulo");

//   const cardInfoBirthdateDiv = document.createElement("div");
//   cardInfoBirthdateDiv.classList.add("card-estudiante__info--birthdate");

//   const cardInfoSpecieDiv = document.createElement("div");
//   cardInfoSpecieDiv.classList.add("card-estudiante__info--specie");

//   const cardInfoDeathDiv = document.createElement("div");
//   cardInfoDeathDiv.classList.add("card-estudiante__info--death");

//   const cardInfoGroupDiv = document.createElement("div");
//   cardInfoGroupDiv.classList.add("card-estudiante__info--group");

//   contenedorCardInfoDiv.appendChild(cardInfoTituloH3);
//   contenedorCardInfoDiv.appendChild(cardInfoBirthdateDiv);
//   contenedorCardInfoDiv.appendChild(cardInfoSpecieDiv);
//   contenedorCardInfoDiv.appendChild(cardInfoDeathDiv);
//   contenedorCardInfoDiv.appendChild(cardInfoGroupDiv);

//   console.log(cardEstudiantesDiv);
// }

// creacionCard();
// // buscarPersonajes(data);
