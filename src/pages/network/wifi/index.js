import { Button } from "../../../components/Button";
import { ConfigButton } from "../../../components/ConfigButton";
import { ContentTitle } from "../../../components/ContentTitle";
import { Row } from "../../../components/Row";
import { WifiList } from "../../../components/WifiList";

let wifiPage = document.createElement("div");
let row = Row();
let page = wifiPage;

page.classList.add("fade-in-500ms");

page.appendChild(ConfigButton("", "目前wifi", "current_wifi", "-"));

row.appendChild(Button("wifi_reconnect", "warning", "md", "重新連上"));
row.appendChild(Button("wifi_scan", "primary", "md", "搜尋"));

page.appendChild(row);

page.appendChild(WifiList("wifi_list"));

export default wifiPage;
