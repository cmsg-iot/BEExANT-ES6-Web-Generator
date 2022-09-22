import { ContentTitle } from "../../components/ContentTitle";
import { PageTitle } from "../../components/PageTitle";
import { WifiList } from "../../components/WifiList";

let networkPage = document.createElement("div");
networkPage.id = "page_network";
networkPage.classList.add("fade-in-500ms");

networkPage.appendChild(PageTitle("🌐 網路設定"));

networkPage.appendChild(ContentTitle("Wifi 清單"));

networkPage.appendChild(WifiList("wifi_list"));

export default networkPage;
