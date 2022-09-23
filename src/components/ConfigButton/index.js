import { getTheme } from "../../themes/themeProvider";

export const ConfigButton = (
  btnId = "",
  title = "",
  valueId = "",
  value = "",
  clickEvent = function () {}
) => {
  let div = document.createElement("div");
  let table = document.createElement("table");
  let tbody = document.createElement("tbody");
  let tr = document.createElement("tr");
  let td = document.createElement("td");

  div.id = btnId;
  div.className = "setting-btn";
  div.style.background = getTheme().settingBtn.default;

  // 新增點擊事件
  div.addEventListener("click", clickEvent);

  // 滑鼠懸停時效果
  div.addEventListener("mousemove", () => {
    div.style.background = getTheme().settingBtn.hover;
  });

  // 滑鼠離開按鈕時效果
  div.addEventListener("mouseout", () => {
    div.style.background = getTheme().settingBtn.default;
  });

  td.className = "setting-btn-title";
  td.style.color = getTheme().settingBtn.titleText;
  td.innerText = title;
  tr.appendChild(td);

  td = document.createElement("td");
  td.id = valueId;
  td.className = "setting-btn-val";
  td.style.color = getTheme().settingBtn.valText;
  td.innerHTML = value;
  tr.appendChild(td);

  tbody.appendChild(tr);
  table.appendChild(tbody);
  div.appendChild(table);
  return div;
};
