import { PageTitle } from "../../components/PageTitle";

let configPage = document.createElement("div");
let page = configPage;

page.id = "page_config";
page.classList.add("fade-in-500ms");

page.appendChild(PageTitle("🔧 系統設定"));

export default configPage;
