import { Button } from "../../../components/Button";
import { ConfigButton } from "../../../components/ConfigButton";
import { ContentTitle } from "../../../components/ContentTitle";
import { Row } from "../../../components/Row";

let httpPage = document.createElement("div");
let page = httpPage;

let row1 = Row();
let row2 = Row();
page.classList.add("fade-in-500ms");

row1.appendChild(Button("http_flag", "primary", "md", "啟用"));

page.appendChild(row1);

page.appendChild(
  ConfigButton(
    "btn_set_http_address",
    "HTTP傳送位址",
    "http_address",
    "https://example.com",
    () => {
      let a = prompt(
        "設定HTTP傳送位址：",
        document.getElementById("http_address").innerText
      );
    }
  )
);

page.appendChild(ContentTitle("HTTP Header設定"));

page.appendChild(
  ConfigButton("", "Authorization形式", "http_auth_type", "Bearer")
);

page.appendChild(
  ConfigButton(
    "btn_set_http_auth_token",
    "目前使用Token名稱",
    "http_auth_token",
    "溫室一號",
    () => {
      let t = prompt(
        "切換使用的 Token 名稱\n1. 溫室一號\n2. 果園一號\n3. 庭院一號"
      );
    }
  )
);

row2.appendChild(
  Button("btn_remove_http_token", "danger", "md", "刪除Token", () => {
    let t = prompt(
      "輸入 Token 名稱以刪除 Token\n1. 溫室一號\n2. 果園一號\n3. 庭院一號"
    );
  })
);
row2.appendChild(
  Button("btn_add_http_token", "primary", "md", "新增Token", () => {
    let t = prompt("輸入 HTTP Token:");
    if (!t) return;
    let n = prompt("為此 Token 命名:");
    if (!n) return;

    alert("Token 名稱: " + n + "\nToken: " + t);
  })
);

page.appendChild(row2);

page.appendChild(ContentTitle("發送週期設定"));

page.appendChild(
  ConfigButton("btn_set_http_cycle", "週期", "http_cycle", "二、四、六", () => {
    let t = prompt("設定發送週期:");
  })
);

page.appendChild(
  ConfigButton("btn_set_http_step", "發送間隔(秒)", "http_step", "60", () => {
    let t = prompt("設定發送間隔(秒):");
  })
);

export default httpPage;
