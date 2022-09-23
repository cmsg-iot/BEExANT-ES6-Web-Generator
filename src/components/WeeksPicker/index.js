export const WeeksPicker = (id = "") => {
  let div_root = document.createElement("div");
  let table = document.createElement("table");
  let tbody = document.createElement("tbody");
  let tr = document.createElement("tr");
  let td = document.createElement("td");
  let week = ["一", "二", "三", "四", "五", "六", "日"];

  div_root.className = "schedule-week-select";

  // 之後修改為i18n
  td.innerText = "週";

  let flag = true;
  td.addEventListener("click", () => {
    for (let i = 0; i < 7; i++) {
      document.getElementById(id + "_w" + (i + 1)).checked = flag;
    }
    flag = !flag;
  });

  tr.appendChild(td);

  for (let i = 0; i < 7; i++) {
    td = document.createElement("td");
    let label = document.createElement("label");
    let input = document.createElement("input");
    let span = document.createElement("span");
    input.type = "checkbox";
    input.name = "w" + (i + 1);
    input.id = id + "_" + input.name;
    span.className = "transition-colors";
    span.innerText = week[i];

    label.appendChild(input);
    label.appendChild(span);
    td.appendChild(label);
    tr.append(td);
  }

  tbody.appendChild(tr);
  table.appendChild(tbody);
  div_root.appendChild(table);
  return div_root;
};
