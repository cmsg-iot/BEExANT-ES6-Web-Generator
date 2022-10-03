import { AreaCard } from "../../../components/AreaCard";
import { Button } from "../../../components/Button";
import { Row } from "../../../components/Row";
import { TimerPicker } from "../../../components/TimePicker";
import { WeeksPicker } from "../../../components/WeeksPicker";

let scheduleAddPage = document.createElement("div");
let page = scheduleAddPage;

let stations = 6;

page.id = "page_schedule_add";
page.classList.add("fade-in-500ms");

page.appendChild(WeeksPicker("sche_add_weeks"));

page.appendChild(TimerPicker("sche_add_time"));

page.appendChild(AreaCard("sche_add_area", stations, 60));

let row = Row();

row.appendChild(
  Button("btn_schedule_clear", "danger", "md", "清除", initialParams)
);

row.appendChild(
  Button("btn_schedule_add", "primary", "md", "確認", addSchedule)
);

page.appendChild(row);

// 之後由controller提供
function initialParams() {
  for (let i = 0; i < 7; i++) {
    document.getElementById(`sche_add_weeks_w${i + 1}`).checked = false;
  }
  document.getElementById("sche_add_time").value = "";
  for (let i = 0; i < stations; i++) {
    document.getElementById(`sche_add_area_${i + 1}`).selectedIndex = 0;
  }
}

// 之後由controller提供，需先更新排程判斷有無重複相同的排程
function addSchedule() {
  let week = "";

  // 將選中的星期加入week中
  for (let i = 0; i < 7; i++) {
    if (document.getElementById(`sche_add_weeks_w${i + 1}`).checked) {
      week += i + 1;
    }
  }

  if (week === "") {
    alert("至少選擇一個星期");
    return;
  }

  // 排程啟動時間
  let time = document.getElementById("sche_add_time").value;
  if (time === "") {
    alert("請選擇啟動時間");
    return;
  }

  // 各區啟動時間
  let area = [];
  for (let j = 0; j < stations; j++) {
    area.push(`ST${j + 1}:` + getOptionValue(`sche_add_area_${j + 1}`));
  }
  if (
    area.filter((t) => t.split(":")[1] > 0 && t.split(":")[1] <= 30).length < 1
  ) {
    alert("每站不可超過30分鐘");
    return;
  }
  alert(week + "\n" + time + "\n" + area);
}

function getOptionValue(id) {
  return document.getElementById(id).options[
    document.getElementById(id).selectedIndex
  ].value;
}

export default scheduleAddPage;
