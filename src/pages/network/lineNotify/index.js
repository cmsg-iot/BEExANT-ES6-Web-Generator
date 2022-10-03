import { Button } from "../../../components/Button";
import { ConfigButton } from "../../../components/ConfigButton";
import { Row } from "../../../components/Row";

let lineNotifyPage = document.createElement("div");
let page = lineNotifyPage;

let row = Row();
page.classList.add("fade-in-500ms");

page.appendChild(
  ConfigButton(
    "btn_set_line_token",
    "目前使用Token名稱",
    "current_line_token",
    "---",
    () => {
      let t = prompt(
        "切換使用的 Token 名稱\n1. 溫室一號\n2. 果園一號\n3. 庭院一號"
      );
    }
  )
);

row.appendChild(
  Button("btn_remove_line_token", "danger", "md", "刪除Token", () => {
    let t = prompt(
      "輸入 Token 名稱以刪除 Token\n1. 溫室一號\n2. 果園一號\n3. 庭院一號"
    );
  })
);
row.appendChild(
  Button("btn_add_line_token", "primary", "md", "新增Token", () => {
    let t = prompt("輸入 LineNotify Token:");
    if (!t) return;
    let n = prompt("為此 Token 命名:");
    if (!n) return;

    alert("Token 名稱: " + n + "\nToken: " + t);
  })
);

page.appendChild(row);

export default lineNotifyPage;
