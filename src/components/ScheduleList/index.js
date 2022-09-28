export const ScheduleList = (
  props = [{ w: [], time: "", area: [] }],
  removeHandler = function (index = 0) {}
) => {
  let div_root = document.createElement("div");
  div_root.id = "sche_list";
  for (let i = 0; i < props.length; i++) {
    let div_time = document.createElement("div");
    let div_container = document.createElement("div");
    let div_schedule = document.createElement("div");
    let table_area = document.createElement("table");
    let table_week = document.createElement("table");
    let tbody_area = document.createElement("tbody");
    let tbody_week = document.createElement("tbody");
    let td_remove = document.createElement("td");
    let span_time = document.createElement("span");

    let data_week = props[i].w;
    let data_time = props[i].time;
    let data_area = props[i].area;

    // 之後改為i18n
    let weeks = ["一", "二", "三", "四", "五", "六", "日"];

    // 排程表 - 刪除按鈕
    td_remove.innerHTML = "X";
    td_remove.className = "schedule-remove";
    td_remove.onclick = (e) => {
      // 之後改為i18n
      let result = confirm("確認是否刪除排程？");
      if (result) {
        let index = getChildElementIndex(
          e.target.parentElement.parentElement.parentElement
        );
        let r = props.length + 1 - index;
        index = index + (r - index) - 2;
        console.log(index);
        removeHandler(index);
      }
    };
    tbody_week.appendChild(td_remove);

    // 排程表 - 星期
    for (let j = 0; j < 7; j++) {
      let input = document.createElement("input");
      let span_week = document.createElement("span");
      let lable = document.createElement("label");
      let td_week = document.createElement("td");

      input.type = "checkbox";
      input.disabled = true;

      // 將啟動週設為選取狀態
      if (data_week.length > 0 && data_week[0] == j + 1) {
        data_week.shift();
        input.checked = true;
      }

      span_week.innerText = weeks[j];

      lable.appendChild(input);
      lable.appendChild(span_week);
      td_week.appendChild(lable);
      tbody_week.appendChild(td_week);
    }

    table_week.className = "schedule-week";
    table_week.appendChild(tbody_week);

    // 排程表 - 啟動時間
    span_time.innerText = data_time;
    div_time.className = "schedule-time";
    div_time.appendChild(span_time);

    // 排程表 - 各區時間
    div_container.className = "schedule-container";
    div_container.appendChild(div_time);

    // 各區啟動狀態
    let tr_area = document.createElement("tr");
    for (let j = 0; j < data_area.length; j++) {
      let td_area = document.createElement("td");

      if (data_area[j] > 0) {
        td_area.className = "schedule-exec";
      } else {
        td_area.className = "schedule-close";
      }
      // 之後改為 i18n
      td_area.innerText = `${j + 1}區`;
      tr_area.appendChild(td_area);
    }

    // 各區時間狀態
    let tr_time = document.createElement("tr");
    tr_time.style.height = "4rem";
    for (let j = 0; j < data_area.length; j++) {
      let td_time = document.createElement("td");
      if (data_area[j] > 0) {
        td_time.className = "schedule-exec";
      } else {
        td_time.className = "schedule-close";
      }

      td_time.innerText = data_area[j];
      tr_time.appendChild(td_time);
    }

    tbody_area.appendChild(tr_area);
    tbody_area.appendChild(tr_time);

    table_area.className = "schedule-area";
    table_area.appendChild(tbody_area);
    div_container.appendChild(table_area);

    div_schedule.className = "schedule";
    div_schedule.appendChild(table_week);
    div_schedule.appendChild(div_container);

    // 將每次產生的排程表加入 root div 中
    div_root.appendChild(div_schedule);
  }
  return div_root;
};

// 取得子物件的index
function getChildElementIndex(node) {
  console.log(node);
  return Array.prototype.indexOf.call(node.parentElement.children, node);
}
