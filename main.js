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
    createElement("div", {
      innerText: "No results",
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
