export const contentTitle = (text = "title", color = "#fff") => {
  let div = document.createElement("div");
  let span = document.createElement("span");

  div.className = "content-title";
  span.innerHTML = text;
  span.style.color = color;
  div.appendChild(span);
  return div;
};
