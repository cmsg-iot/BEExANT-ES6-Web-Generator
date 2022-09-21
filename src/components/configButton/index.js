export const configButton = (
  btnId = "",
  title = "",
  valueId = "",
  value = "",
  clickEvent = function () {}
) => {
  let div = document.createElement("div");
  let table = document.createElement("table");
  let tbody = document.createElement("tbody");
  let tr = document.createElement("tr");
  let td = document.createElement("td");
  div.id = btnId;
  div.className = "setting-btn";
  div.addEventListener("click", clickEvent);
  td.className = "setting-btn-title 132";
  td.innerText = title;
  tr.appendChild(td);
  td = document.createElement("td");
  td.id = valueId;
  td.className = "setting-btn-val";
  td.innerHTML = value;
  tr.appendChild(td);
  tbody.appendChild(tr);
  table.appendChild(tbody);
  div.appendChild(table);
  return div;
};
