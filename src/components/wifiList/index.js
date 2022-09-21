export const wifiList = (id = "") => {
  let ul = document.createElement("ul");
  ul.id = id;
  ul.className = "wifi-list";
  return ul;
};
