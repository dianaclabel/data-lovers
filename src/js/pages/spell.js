import { filterSpells } from "../data.js";
const inputBuscador = document.querySelector("#input-buscador");

if (inputBuscador !== null) {
  inputBuscador.addEventListener("keydown", (e) => {
    const contenedorResultado = document.querySelector("#resultado-busqueda");
    const spellEncontrados = filterSpells(inputBuscador.value);

    contenedorResultado.innerHTML = "";
    spellEncontrados.forEach((spell) => {
        contenedorResultado.appendChild(mostrarSpell(spell));
    });
  });
}

const mostrarSpell = (spell) => {
  const contenedorSpell = document.createElement("div");
  contenedorSpell.classList.add("spell-item");

  const contenedorImgVarita = document.createElement("div");
  contenedorImgVarita.classList.add("contenedor-img-varita");

  const imagenVarita = document.createElement("img");
  imagenVarita.classList.add("spell-item__img");
  imagenVarita.setAttribute("src", "../../assets/varita.png");
  contenedorImgVarita.appendChild(imagenVarita);

  const contenedorCardInfoNombreDiv = document.createElement("div");
  contenedorCardInfoNombreDiv.classList.add("spell-item__info");
  contenedorCardInfoNombreDiv.innerHTML = `<b>Nombre: </b>${spell.name}`;

  const contenedorCardInfoPronunciacionDiv = document.createElement("div");
  contenedorCardInfoPronunciacionDiv.classList.add("spell-item__info");
  contenedorCardInfoPronunciacionDiv.innerHTML = `<b>Pronunciación: </b>${spell.pronunciation}`;

  const contenedorCardInfoHechizoTipoDiv = document.createElement("div");
  contenedorCardInfoHechizoTipoDiv.classList.add("spell-item__info");
  contenedorCardInfoHechizoTipoDiv.innerHTML = `<b>Tipo de Hechizo: </b>${spell.spell_type}`;


  contenedorSpell.appendChild(contenedorImgVarita);
  contenedorSpell.appendChild(contenedorCardInfoNombreDiv);
  contenedorSpell.appendChild(contenedorCardInfoPronunciacionDiv);
  contenedorSpell.appendChild(contenedorCardInfoHechizoTipoDiv);

  
  return contenedorSpell;
}