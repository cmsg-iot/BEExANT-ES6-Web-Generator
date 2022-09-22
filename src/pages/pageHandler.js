import { BottomMenu } from "../components/BottomMenu";
import { getTheme } from "../themes/themeProvider";
import basicConfigPage from "./basicConfigPage";
import configPage from "./config";
import customPage from "./custom";
import errorPage from "./error";
import homePage from "./home";
import networkPage from "./network";
import schedulePage from "./schedule";
import systemPage from "./system";
import terminalPage from "./terminal";
import testPage from "./test";

// 回傳處理後的頁面元件
export const handlePage = (container = document.createElement("div")) => {
  console.log(location.hash);

  // 在每次切換頁面時清除 container 及 basicConfigPage 底下的元件，且會同時將元件所綁定的事件一併清除
  container.innerHTML = "";
  basicConfigPage.innerHTML = "";

  // 透過網址hash來注入頁面
  switch (location.hash) {
    case "#config":
      basicConfigPage.appendChild(configPage);
      container.appendChild(basicConfigPage);
      break;
    case "":
      location.hash = "#home";
      break;
    case "#home":
      container.appendChild(homePage);
      break;
    case "#custom":
      basicConfigPage.appendChild(customPage);
      container.appendChild(basicConfigPage);
      break;
    case "#network":
      basicConfigPage.appendChild(networkPage);
      container.appendChild(basicConfigPage);
      break;
    case "#schedule":
      basicConfigPage.appendChild(schedulePage);
      container.appendChild(basicConfigPage);
      break;
    case "#system":
      basicConfigPage.appendChild(systemPage);
      container.appendChild(basicConfigPage);
      break;
    case "#terminal":
      basicConfigPage.appendChild(terminalPage);
      container.appendChild(basicConfigPage);
      break;
    case "#test":
      basicConfigPage.appendChild(testPage);
      container.appendChild(basicConfigPage);
      break;
    default:
      container.appendChild(errorPage);
      break;
  }

  return container;
};

export const initialBottomMenu = () => {
  let menu = {
    schedule: "📅",
    custom: "📝",
    network: "🌐",
    config: "🔧",
    terminal: "💻",
    test: "🔧",
  };
  return BottomMenu(menu);
};

// 處理底部選單狀態顯示
export const handleBottomMenu = () => {
  let target = location.hash.split("#")[1];
  switch (location.hash) {
    case "#config":
      selectBottomMenu(target);
      showBottomMenu(1);
      break;
    case "#home":
      showBottomMenu(0);
      break;
    case "#custom":
      selectBottomMenu(target);
      showBottomMenu(1);
      break;
    case "#network":
      selectBottomMenu(target);
      showBottomMenu(1);
      break;
    case "#schedule":
      selectBottomMenu(target);
      showBottomMenu(1);
      break;
    case "#system":
      selectBottomMenu(target);
      showBottomMenu(1);
      break;
    case "#terminal":
      selectBottomMenu(target);
      showBottomMenu(1);
      break;
    case "#test":
      selectBottomMenu(target);
      showBottomMenu(1);
      break;
    default:
      showBottomMenu(0);
      break;
  }
};

function selectBottomMenu(target) {
  let selectedMenu = document.querySelector(".bottomMenu-selected");
  let targetMenu = document.getElementById("bottomMenu_" + target);
  // 清除已選擇的按鈕顯示
  if (selectedMenu) {
    selectedMenu.classList.remove("bottomMenu-selected");
  }

  // 加入選擇的按鈕顯示
  if (targetMenu) {
    targetMenu.parentElement.classList.add("bottomMenu-selected");
    targetMenu.parentElement.style.backgroundColor =
      getTheme().bottomMenu.selected;
  }
}

function showBottomMenu(flag) {
  let menu = document.getElementById("menu_bottom");
  flag ? menu.classList.remove("hidden") : menu.classList.add("hidden");
}
