import { createCharacterElement } from "./components/character";
import "./style.css";
import { createElement } from "./utils/elements";
import { getCharacters } from "./utils/api";

getCharacters().then((characters) => {
  const characterElements = characters.map(createCharacterElement);
  characterSection.append(...characterElements);
});

const characterSection = createElement("section", {
  className: "results",
});

// const section = characters.map(createCharacterElement);

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

// const section = createElement("section", {
//   className: "results",
// children: characters.map(createCharacterElement),
// });

const footer = createElement("footer", {
  className: "footer",
  children: [
    createElement("div", {
      className: "footer-element",
      children: [createElement("span", { innerText: "This is the footer" })],
    }),
  ],
});

document.querySelector("#app").append(header, characterSection, footer);
