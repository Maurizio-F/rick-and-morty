import "./style.css";
import styles from "./details.modules.css";
import { createElement } from "./utils/elements";
import { getCharacter } from "./utils/api";
import { createCharacterDetails } from "./components/characterDetails";
import { footer } from "./main";
import { header } from "./main";

const params = new URLSearchParams(location.search);
const characterID = params.get("id");

getCharacter(characterID).then((response) => {
  const characterDetailsElement = createCharacterDetails(response);
  mainElement.append(characterDetailsElement);
});

const mainElement = createElement("main", {
  className: styles.main,
});

document.querySelector("#app").append(header, mainElement, footer);
