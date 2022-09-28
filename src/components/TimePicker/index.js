export const TimerPicker = (id = "") => {
  let div_root = document.createElement("div");
  let table = document.createElement("table");
  let tbody = document.createElement("tbody");
  let tr = document.createElement("tr");
  let td = document.createElement("td");
  let input = document.createElement("input");

  div_root.className = "time-picker";

  // 之後更改為i18n
  td.innerText = "時間";
  tr.appendChild(td);
  td = document.createElement("td");
  (input.type = "time"), (input.id = id);
  td.appendChild(input);
  tr.appendChild(td);
  tbody.appendChild(tr);
  table.appendChild(tbody);
  div_root.appendChild(table);
  return div_root;
};
