import { mainContainer } from "./pages";

try {
  document.getElementById("root").appendChild(mainContainer);
} catch (error) {
  console.error(error);
}
