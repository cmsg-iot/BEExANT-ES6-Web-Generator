import { Button } from "../../../components/Button";
import { ConfigButton } from "../../../components/ConfigButton";
import { ContentTitle } from "../../../components/ContentTitle";
import { Row } from "../../../components/Row";

let motorPage = document.createElement("div");
let row1 = Row();
let row2 = Row();
let page = motorPage;

page.id = "page_motor";
page.classList.add("fade-in-500ms");

page.appendChild(ContentTitle("馬達保護設定"));

row1.appendChild(Button("motor_flag", "primary", "md", "啟用"));

page.appendChild(row1);

page.appendChild(
  ConfigButton(
    "custom_Pump_IL_Stop",
    "進水壓小於時停止",
    "custom_Pump_IL_Stop_val",
    "-"
  )
);
page.appendChild(
  ConfigButton(
    "custom_Pump_IL_Start",
    "進水壓大於時執行事件",
    "custom_Pump_IL_Start_val",
    "-"
  )
);
page.appendChild(
  ConfigButton(
    "custom_Pump_IL_Start_Act_ID",
    "事件ID",
    "custom_Pump_IL_Start_Act_ID_val",
    "-"
  )
);

row2.appendChild(Button("motor_advance", "warning", "md", "進階設定"));
page.appendChild(row2);

export default motorPage;
