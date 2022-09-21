export const pageTitle = (text = "title", color = "#fff", bg = "#A4A4A4") => {
  let div = document.createElement("div");
  let span = document.createElement("span");
  div.className = "page-title";
  div.style.color = color;
  div.style.backgroundColor = bg;
  span.innerHTML = text;
  div.appendChild(span);
  return div;
};
