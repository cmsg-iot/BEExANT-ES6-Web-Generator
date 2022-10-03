import { ConfigButton } from "../../../components/ConfigButton";
import { ContentTitle } from "../../../components/ContentTitle";

let sensorPage = document.createElement("div");
let page = sensorPage;

page.id = "page_sensor";
page.classList.add("fade-in-500ms");

page.appendChild(ContentTitle("進水水壓計校正"));
page.appendChild(
  ConfigButton("custom_ILWPSH", "位移", "custom_ILWPSH_val", "-")
);
page.appendChild(ConfigButton("custom_ILWPR", "比例", "custom_ILWPR_val", "-"));

page.appendChild(ContentTitle("出水水壓計校正"));
page.appendChild(
  ConfigButton("custom_OLWPSH", "位移", "custom_OLWPSH_val", "-")
);
page.appendChild(ConfigButton("custom_OLWPR", "比例", "custom_OLWPR_val", "-"));

page.appendChild(ContentTitle("土壤水分校正"));
page.appendChild(ConfigButton("custom_SMZero", "0%", "custom_SMZero_val", "-"));
page.appendChild(
  ConfigButton("custom_SMFull", "100%", "custom_SMFull_val", "-")
);

export default sensorPage;
