import { ConfigButton } from "../../../components/ConfigButton";

let socketPage = document.createElement("div");
let page = socketPage;

page.classList.add("fade-in-500ms");

page.appendChild(
  ConfigButton("btn_set_socket", "Socket傳送位址", "socket_address", "---")
);

export default socketPage;
