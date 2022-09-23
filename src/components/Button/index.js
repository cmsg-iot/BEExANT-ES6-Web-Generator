export const Button = (
  id = "",
  type = "default",
  size = "md",
  value = "",
  clickEvent = function () {}
) => {
  let button = document.createElement("button");
  let className = ["btn-basic"];

  className.push(type);
  className.push("btn-" + size);

  button.id = id;
  button.className = className.join(" ");
  button.innerHTML = value;

  // 新增點擊事件
  button.addEventListener("click", clickEvent);
  return button;
};
