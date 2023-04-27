import { computeStats } from "../data.js";
import data from "../../data/harrypotter/data.js";

const carruselDiv = document.getElementById("carrusel");
const numeroTotalP = document.querySelectorAll(".numero-total");
const carruselLeftBtn = document.getElementById("btn-carrusel__left");
const carruselRightBtn = document.getElementById("btn-carrusel__right");

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

//books
function librosEncontrados() {
  const imgLibros = [
    "book-1",
    "book-2",
    "book-3",
    "book-4",
    "book-5",
    "book-6",
    "book-7",
    "book-8",
  ];

  for (let i = 0; i < data.books.length; i++) {
    cardBook(data.books[i], imgLibros[i]);
  }
}

function cardBook(datalibro, imglibro) {
  const libroCard = datalibro;
  const imagenLibro = imglibro;
  const cardLibroDiv = document.createElement("div");
  cardLibroDiv.classList.add("card-libro");

  const imgLibro = document.createElement("img");
  imgLibro.setAttribute("src", `./assets/${imagenLibro}.png`);
  imgLibro.classList.add("img-libro");

  const cardLibroInfo = document.createElement("div");
  cardLibroInfo.classList.add("card-libro__info");

  const titleBookP = document.createElement("p");
  titleBookP.innerHTML = `<b>Title:</b> ${libroCard.title}`;

  const releaseDayP = document.createElement("p");
  releaseDayP.innerHTML = `<b>Release Day:</b> ${libroCard.releaseDay}`;
  const authorP = document.createElement("p");
  authorP.innerHTML = `<b>Author:</b> ${libroCard.author}`;

  cardLibroInfo.appendChild(titleBookP);
  cardLibroInfo.appendChild(releaseDayP);
  cardLibroInfo.appendChild(authorP);
  cardLibroDiv.appendChild(imgLibro);
  cardLibroDiv.appendChild(cardLibroInfo);

  carruselDiv.appendChild(cardLibroDiv);
}

carruselLeftBtn.addEventListener("click", () => {
  carruselDiv.scrollBy({ left: -200, behavior: "smooth" });
});

carruselRightBtn.addEventListener("click", () => {
  carruselDiv.scrollBy({ left: 200, behavior: "smooth" });
});

librosEncontrados();
