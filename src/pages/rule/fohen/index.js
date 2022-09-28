import { ConfigButton } from "../../../components/ConfigButton";
import { ContentTitle } from "../../../components/ContentTitle";

let fohenPage = document.createElement("div");
let page = fohenPage;

page.id = "page_fohen";
page.classList.add("fade-in-500ms");

page.appendChild(ContentTitle("焚風保護設定"));

page.appendChild(ConfigButton());
page.appendChild(ConfigButton());
page.appendChild(ConfigButton());
page.appendChild(ConfigButton());
page.appendChild(ConfigButton());

export default fohenPage;
