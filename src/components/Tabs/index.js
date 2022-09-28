import { getTheme } from "../../themes/themeProvider";
let defaultTabs = [
  { title: "Tab1", pageElement: document.createElement("div") },
  { title: "Tab2", pageElement: document.createElement("div") },
  { title: "Tab3", pageElement: document.createElement("div") },
];

export const Tabs = (props = defaultTabs) => {
  let div_root = document.createElement("div");
  let div_tabs = document.createElement("div");
  let div_tabPane = document.createElement("div");
  div_root.className = "tabs-container";
  div_tabs.className = "tabs";
  div_tabPane.className = "tab-pane";

  div_tabPane.style.height = window.innerHeight - 247 + "px";

  // 產生 tabs
  for (let i = 0; i < props.length; i++) {
    const element = props[i];
    let div_tab = document.createElement("div");

    div_tab.id = "tab_" + element.title;
    div_tab.className = "tab";
    div_tab.style.color = getTheme().tabs.text;
    div_tab.style.backgroundColor = getTheme().tabs.default;
    div_tab.innerHTML = element.title;

    div_tab.addEventListener("click", () => {
      // 清除 page
      div_tabPane.innerHTML = "";

      // 清除上一個選擇狀態,將目前點擊的tab轉為已選擇
      let selected = document.querySelector(".tab-active");
      if (selected) {
        selected.classList.remove("tab-active");
        selected.style.color = getTheme().tabs.text;
        selected.style.backgroundColor = getTheme().tabs.default;
      }
      div_tab.classList.add("tab-active");
      div_tab.style.color = getTheme().tabs.selectedText;
      div_tab.style.backgroundColor = getTheme().tabs.selected;

      // 加入 page
      div_tabPane.appendChild(element.pageElement);
    });
    div_tabs.appendChild(div_tab);
  }

  div_root.appendChild(div_tabs);
  div_root.appendChild(div_tabPane);

  return div_root;
};
