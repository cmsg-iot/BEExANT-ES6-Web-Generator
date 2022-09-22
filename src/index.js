// 優先載入參數配置檔
import config from "./configs/config";
import { setLocalStorage } from "./configs/loader";
setLocalStorage(config);

// 載入頁面檔
import { mainContainer } from "./pages";

try {
  document.getElementById("root").appendChild(mainContainer);
} catch (error) {
  console.error(error);
}
