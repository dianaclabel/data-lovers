import { computeStats } from "../data.js";
import data from "../../data/harrypotter/data.js";

const numeroTotalP = document.querySelectorAll("#numero-total");

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
function cardBook(libro) {
  const cardLibroDiv = document.createElement("div");
  cardLibroDiv.classList.add("card-libro");

  const imgLibro = document.createElement("img");
  imgLibro.setAttribute("src", `./assets/book.png`);
  imgLibro.classList.add("img-libro");

  const cardLibroInfo = document.createElement("div");
  cardLibroInfo.classList.add("card-libro__info");

  const titleBookP = document.createElement("p");
  titleBookP.innerText = "Title :" + libro.title;

  const releaseDayP = document.createElement("p");
  releaseDayP.innerText = "Release Day :" + libro.releaseDay;

  const authorP = document.createElement("p");
  authorP.innerText = "Author :" + libro.author;

  cardLibroInfo.appendChild(titleBookP);
  cardLibroInfo.appendChild(releaseDayP);
  cardLibroInfo.appendChild(authorP);
  cardLibroDiv.appendChild(imgLibro);
  cardLibroDiv.appendChild(cardLibroInfo);

  console.log(cardLibroDiv);
}

cardBook();
