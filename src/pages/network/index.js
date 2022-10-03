import { PageTitle } from "../../components/PageTitle";
import { Tabs } from "../../components/Tabs";
import httpPage from "./http";
import lineNotifyPage from "./lineNotify";
import mqttPage from "./mqtt";
import networkOverviewPage from "./overview";
import socketPage from "./socket";
import wifiPage from "./wifi";

let networkPage = document.createElement("div");
let page = networkPage;
let subPages = [
  { title: "設定一覽", pageElement: networkOverviewPage, default: true },
  { title: "Wi-Fi設定", pageElement: wifiPage },
  { title: "Line通報設定", pageElement: lineNotifyPage },
  { title: "Socket設定", pageElement: socketPage },
  { title: "HTTP設定", pageElement: httpPage },
  { title: "MQTT設定", pageElement: mqttPage },
];

page.id = "page_network";
page.classList.add("fade-in-500ms");

page.appendChild(PageTitle("🌐 網路設定"));

page.appendChild(Tabs("tabs_network", subPages));

export default networkPage;
