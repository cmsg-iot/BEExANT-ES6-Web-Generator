import { button } from "../../components/button";
import { configButton } from "../../components/configButton";
import { pageTitle } from "../../components/pageTitle";

let configPage = document.createElement("div");
let page = configPage;

page.id = "page_config";
page.classList.add("fade-in-500ms");

page.appendChild(pageTitle("🔧 系統設定"));

export default configPage;
