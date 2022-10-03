import { Button } from "../../../components/Button";
import { ConfigButton } from "../../../components/ConfigButton";
import { ContentTitle } from "../../../components/ContentTitle";
import { Row } from "../../../components/Row";

let fohenPage = document.createElement("div");
let row1 = Row();
let row2 = Row();
let page = fohenPage;

page.id = "page_fohen";
page.classList.add("fade-in-500ms");

page.appendChild(ContentTitle("焚風保護設定"));

row1.appendChild(Button("foehn_flag", "primary", "md", "啟用"));

page.appendChild(row1);

page.appendChild(
  ConfigButton(
    "custom_foehn_Temp",
    "空氣溫度上限",
    "custom_foehn_Temp_val",
    "-"
  )
);
page.appendChild(
  ConfigButton("custom_foehn_Hum", "相對濕度下限", "custom_foehn_Hum_val", "-")
);
page.appendChild(
  ConfigButton("custom_foehn_OpT", "每站循環噴灑", "custom_foehn_OpT_val", "-")
);

row2.appendChild(Button("foehn_advance", "warning", "md", "進階設定"));

page.appendChild(row2);

export default fohenPage;
