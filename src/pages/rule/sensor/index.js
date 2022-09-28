import { ConfigButton } from "../../../components/ConfigButton";
import { ContentTitle } from "../../../components/ContentTitle";

let sensorPage = document.createElement("div");
let page = sensorPage;

page.id = "page_sensor";
page.classList.add("fade-in-500ms");

page.appendChild(ContentTitle("壓力感測器設定"));

page.appendChild(ConfigButton());
page.appendChild(ConfigButton());
page.appendChild(ConfigButton());
page.appendChild(ConfigButton());
page.appendChild(ConfigButton());

page.appendChild(ContentTitle("土壤濕度感測器設定"));

page.appendChild(ConfigButton());
page.appendChild(ConfigButton());
page.appendChild(ConfigButton());
page.appendChild(ConfigButton());
page.appendChild(ConfigButton());

export default sensorPage;
