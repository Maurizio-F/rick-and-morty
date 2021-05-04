import { createCharacterElement } from "./components/character";
import "./style.css";
import { createElement } from "./utils/elements";

const header = createElement("header", {
  className: "header",
  children: [
    createElement("h1", {
      className: "header_title",
      innerText: "Rick and Morty",
    }),
    createElement("input", {
      className: "input",
      placeholder: "Search character",
      autofocus: true,
    }),
  ],
});

const section = createElement("section", {
  className: "results",
  children: [
    createCharacterElement({
      imgSrc: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      name: "Rick Sanchez",
      status: "alive",
      species: "Human",
      origin: {
        name: "Earth",
      },
    }),
  ],
});

const footer = createElement("footer", {
  className: "footer",
  children: [
    createElement("div", {
      className: "footer-element",
      children: [createElement("span", { innerText: "This is the footer" })],
    }),
  ],
});

document.querySelector("#app").append(header, section, footer);
