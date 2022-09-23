import { getTheme } from "../../themes/themeProvider";

export const ContentTitle = (
  text = "title",
  color = getTheme().contentTitleText
) => {
  let div = document.createElement("div");
  let span = document.createElement("span");

  div.className = "content-title";
  span.innerHTML = text;
  span.style.color = color;
  div.appendChild(span);
  return div;
};
