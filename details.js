import "./style.css";
import styles from "./details.modules.css";
import { createElement } from "./utils/elements";
import { getCharacter } from "./utils/api";

const params = new URLSearchParams(location.search);
const characterID = params.get("id");

const resultElement = createElement("article", {
  className: styles.result,
});

const mainElement = createElement(
  "main",
  {
    className: styles.main,
  },
  resultElement
);

getCharacter(characterID);

document.querySelector("#app").append(mainElement);
