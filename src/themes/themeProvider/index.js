// 主題選擇器
import defalutStyle from "../defalutStyle";
import materialStyle from "../materialStyle";

export const getTheme = () => {
  let selected = localStorage.getItem("theme") || "default";

  switch (selected) {
    case "defalut":
      return defalutStyle;
    case "material":
      return materialStyle;
    default:
      return defalutStyle;
  }
};
