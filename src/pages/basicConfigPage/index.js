import { bottomMenu } from "../../components/bottomMenu";

// 設定頁面基礎模板，
let basicConfigPage = document.createElement("div");

basicConfigPage.id = "basic_config_page";
basicConfigPage.className = "basic-config-page";

let menu = {
  schedule: "📅",
  custom: "📝",
  network: "🌐",
  config: "🔧",
  terminal: "💻",
};

// basicConfigPage.appendChild(bottomMenu("menu_bottom", menu));

export default basicConfigPage;
