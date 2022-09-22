import { getTheme } from "../../themes/themeProvider";

// 設定頁面基礎模板，
let basicConfigPage = document.createElement("div");

basicConfigPage.id = "basic_config_page";
basicConfigPage.className = "basic-config-page";
basicConfigPage.style.backgroundColor = getTheme().configPageBg;

export default basicConfigPage;
