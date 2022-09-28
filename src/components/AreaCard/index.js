export const AreaCard = (id = "", num = 6, maxTime = 30) => {
  let div_root = document.createElement("div");

  div_root.id = id;
  div_root.className = "area-card";

  for (let i = 0; i < num; i++) {
    let div_block = document.createElement("div");
    let title = document.createElement("div");
    let select = document.createElement("select");

    div_block.className = "area-card-block";

    // 之後更改為i18n
    title.innerText = i + 1 + "區";

    select.id = div_root.id + "_" + (i + 1);
    select.className = "area-card-select";

    for (let j = 0; j < maxTime + 1; j++) {
      let op = document.createElement("option");
      op.innerText = j;
      select.appendChild(op);
    }

    div_block.appendChild(title);
    div_block.appendChild(select);
    div_root.appendChild(div_block);
  }

  return div_root;
};
