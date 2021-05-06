import "../style.css";
import styles from "./characterDetails.module.css";
import { createElement } from "../utils/elements";

export function createCharacterDetails({
  image,
  name,
  status,
  species,
  origin,
  location,
  episode,
}) {
  return createElement("div", {
    className: styles["character-card__details"],
    children: [
      createElement("img", { src: image }),
      createElement("h2", { innerText: name }),
      createElement("p", { innerText: status }),
      createElement("p", { innerText: species }),
      createElement("p", { innerText: origin.name }),
      createElement("p", { innerText: location.name }),
      createElement("p", {
        innerText: "Episodes: " + episode[(0, 1, 2, 3)],
      }),
    ],
  });
}
