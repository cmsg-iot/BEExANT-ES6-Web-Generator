import { ConfigButton } from "../../../components/ConfigButton";
import { ContentTitle } from "../../../components/ContentTitle";

let motorPage = document.createElement("div");
let page = motorPage;

page.id = "page_motor";
page.classList.add("fade-in-500ms");

page.appendChild(ContentTitle("馬達保護設定"));

page.appendChild(ConfigButton());
page.appendChild(ConfigButton());
page.appendChild(ConfigButton());
page.appendChild(ConfigButton());
page.appendChild(ConfigButton());

export default motorPage;
