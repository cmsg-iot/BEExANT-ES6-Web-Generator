import { PageTitle } from "../../components/PageTitle";
import { ConfigButton } from "../../components/ConfigButton";

let configPage = document.createElement("div");
let page = configPage;

page.id = "page_config";
page.classList.add("fade-in-500ms");

page.appendChild(PageTitle("🔧 系統設定"));

page.appendChild(
  ConfigButton("btn-1", "btn-1", "v-1", 1, () => alert("This is btn-1."))
);
page.appendChild(ConfigButton("btn-2", "btn-2", "v-2", 2));
page.appendChild(ConfigButton("btn-3", "btn-3", "v-3", 3));
page.appendChild(ConfigButton("btn-4", "btn-4", "v-4", 4));
page.appendChild(ConfigButton("btn-5", "btn-5", "v-5", 5));
page.appendChild(ConfigButton());

export default configPage;
