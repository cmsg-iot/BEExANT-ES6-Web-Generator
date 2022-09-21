import { contentTitle } from "../../components/contentTitle";
import { pageTitle } from "../../components/pageTitle";
import { wifiList } from "../../components/wifiList";

let networkPage = document.createElement("div");
networkPage.id = "page_network";
networkPage.classList.add("fade-in-500ms");

networkPage.appendChild(pageTitle("🌐 網路設定"));

networkPage.appendChild(contentTitle("Wifi 清單"));

networkPage.appendChild(wifiList("wifi_list"));

export default networkPage;
