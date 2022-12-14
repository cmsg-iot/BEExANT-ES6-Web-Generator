import { getTheme } from "../../themes/themeProvider";

export const BottomMenu = (props = {}) => {
  let root = document.createElement("div");
  let div1 = document.createElement("div");
  root.id = "menu_bottom";
  div1.className = "bottomMenu";

  // 依據傳入物件建立按鈕, key 作為按鈕 id, value 作為按鈕中的文字
  for (const key in props) {
    if (Object.hasOwnProperty.call(props, key)) {
      const element = props[key];
      let div2 = document.createElement("div");
      let div3 = document.createElement("div");

      div2.id = "bottomMenu_" + key;
      div2.innerHTML = element;
      div3.className = "bottom-menu-btn";
      div3.style.backgroundColor = getTheme().bottomMenu.default;

      // 滑鼠懸停時效果
      div3.addEventListener("mouseover", () => {
        div3.style.backgroundColor = getTheme().bottomMenu.hover;
      });

      // 滑鼠離開時效果
      div3.addEventListener("mouseout", () => {
        div3.style.backgroundColor = getTheme().bottomMenu.default;
      });

      // 點擊時改變網址hash
      div3.addEventListener("click", () => {
        location.hash = key;
      });

      div3.appendChild(div2);
      div1.appendChild(div3);
    }
  }

  // 加入離開按鈕
  let exit1 = document.createElement("div");
  let exit2 = document.createElement("button");
  exit1.className = "bottom-exit-btn";
  exit2.innerHTML = " ☓ ";

  // 點擊時改變網址hash為 #home
  exit2.addEventListener("click", () => {
    location.hash = "#home";
  });

  exit1.appendChild(exit2);
  div1.append(exit1);
  root.appendChild(div1);
  return root;
};
