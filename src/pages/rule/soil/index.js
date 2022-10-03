import { Button } from "../../../components/Button";
import { ConfigButton } from "../../../components/ConfigButton";
import { ContentTitle } from "../../../components/ContentTitle";
import { Row } from "../../../components/Row";

let soilPage = document.createElement("div");
let row1 = Row();
let row2 = Row();
let page = soilPage;

page.id = "page_soil";
page.classList.add("fade-in-500ms");

page.appendChild(ContentTitle("土壤濕度控制"));

row1.appendChild(Button("sml_flag", "primary", "md", "啟用"));

page.appendChild(row1);

page.appendChild(
  ConfigButton("custom_SML", "土壤含水下限", "custom_SML_val", "-")
);
page.appendChild(
  ConfigButton("custom_SMLActT", "動作時間", "custom_SMLActT_val", "-")
);

row2.appendChild(Button("sml_advance", "warning", "md", "進階設定"));

page.appendChild(row2);

export default soilPage;
