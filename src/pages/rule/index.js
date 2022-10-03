import { PageTitle } from "../../components/PageTitle";
import { Tabs } from "../../components/Tabs";
import fohenPage from "./fohen";
import motorPage from "./motor";
import ruleOverviewPage from "./overview";
import scheduleAddPage from "./scheduleAdd";
import scheduleShowPage from "./scheduleShow";
import sensorPage from "./sensor";
import soilPage from "./soil";

let rulePage = document.createElement("div");
let page = rulePage;
page.id = "page_rule";

let subPages = [
  { title: "設定一覽", pageElement: ruleOverviewPage, default: true },
  { title: "排程清單", pageElement: scheduleShowPage },
  { title: "新增排程", pageElement: scheduleAddPage },
  { title: "感測器", pageElement: sensorPage },
  { title: "土壤調控", pageElement: soilPage },
  { title: "焚風保護", pageElement: fohenPage },
  { title: "馬達保護", pageElement: motorPage },
];

page.id = "page_rule";
page.classList.add("fade-in-500ms");

page.appendChild(PageTitle("📝 條件設定"));

page.appendChild(Tabs("tabs_rule", subPages));

export default rulePage;
