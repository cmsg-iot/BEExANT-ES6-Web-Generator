import { handlePage, initialBottomMenu, handleBottomMenu } from "./pageHandler";

let mainContainer = document.createElement("div");
let pageContainer = document.createElement("div");
let floatUIContainer = document.createElement("div");

// page 放置頁面相關物件，float 放置浮動介面操作相關物件, main 依照順序加入 page 與 float 頁面
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

// 當視窗完成載入時(HTML,CSS,JS,圖片...等)執行其中的函式
window.onload = () => {
  handleBottomMenu();
};

window.onresize = () => {
  location.reload();
};

export { mainContainer };
