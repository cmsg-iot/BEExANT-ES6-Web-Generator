import { handlePage, initialBottomMenu, handleBottomMenu } from "./pageHandler";

let mainContainer = document.createElement("div");
let pageContainer = document.createElement("div");
let floatUIContainer = document.createElement("div");

mainContainer.id = "container";
pageContainer.id = "page-container";
floatUIContainer.id = "ui-container";

floatUIContainer.appendChild(initialBottomMenu());
pageContainer = handlePage(pageContainer);

// 初始化載入 頁面
mainContainer.appendChild(pageContainer);

// 初始化載入 浮動介面
mainContainer.appendChild(floatUIContainer);

console.log(mainContainer);

// 視窗綁定事件，當 hash 變更時呼叫 handlePage 更新頁面
window.addEventListener("hashchange", () => {
  pageContainer = handlePage(pageContainer);
  handleBottomMenu();
});

window.onload = () => {
  handleBottomMenu();
};

export { mainContainer };
