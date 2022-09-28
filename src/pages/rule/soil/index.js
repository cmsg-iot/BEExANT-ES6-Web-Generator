import { ConfigButton } from "../../../components/ConfigButton";
import { ContentTitle } from "../../../components/ContentTitle";

let soilPage = document.createElement("div");
let page = soilPage;

page.id = "page_soil";
page.classList.add("fade-in-500ms");

page.appendChild(ContentTitle("土壤濕度控制設定"));

page.appendChild(ConfigButton());
page.appendChild(ConfigButton());
page.appendChild(ConfigButton());
page.appendChild(ConfigButton());
page.appendChild(ConfigButton());

export default soilPage;
