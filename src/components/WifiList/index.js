export const WifiList = (id = "") => {
  let ul = document.createElement("ul");
  ul.id = id;
  ul.className = "wifi-list";
  return ul;
};
