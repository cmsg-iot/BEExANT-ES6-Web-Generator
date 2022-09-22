import theme, { getTheme } from "../../themes/themeProvider";

export const PageTitle = (
  text = "title",
  color = getTheme().configPageTitleText,
  bg = getTheme().configPageTitleBg
) => {
  let div = document.createElement("div");
  let span = document.createElement("span");
  div.className = "page-title";
  div.style.color = color;
  div.style.backgroundColor = bg;
  span.innerHTML = text;
  div.appendChild(span);
  return div;
};
