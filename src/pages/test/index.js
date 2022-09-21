import { button } from "../../components/button";
import { configButton } from "../../components/configButton";
import { pageTitle } from "../../components/pageTitle";

let testPage = document.createElement("div");
let page = testPage;

page.id = "page_test";
page.classList.add("fade-in-500ms");

page.appendChild(pageTitle("🔧 測試頁面"));

page.appendChild(
  configButton("btn-1", "btn-1", "v-1", 1, () => alert("This is btn-1."))
);
page.appendChild(configButton("btn-2", "btn-2", "v-2", 2));
page.appendChild(configButton("btn-3", "btn-3", "v-3", 3));
page.appendChild(configButton("btn-4", "btn-4", "v-4", 4));
page.appendChild(configButton("btn-5", "btn-5", "v-5", 5));
page.appendChild(configButton());

page.appendChild(button("d-1", "default", "sm", "d-sm"));
page.appendChild(button("d-2", "default", "md", "d-md"));
page.appendChild(button("d-3", "default", "lg", "d-lg"));

page.appendChild(button("p-1", "primary", "sm", "p-sm"));
page.appendChild(button("p-2", "primary", "md", "p-md"));
page.appendChild(button("p-3", "primary", "lg", "p-lg"));

page.appendChild(button("s-1", "success", "sm", "s-sm"));
page.appendChild(button("s-2", "success", "md", "s-md"));
page.appendChild(button("s-3", "success", "lg", "s-lg"));

page.appendChild(button("w-1", "warning", "sm", "w-sm"));
page.appendChild(button("w-2", "warning", "md", "w-md"));
page.appendChild(button("w-3", "warning", "lg", "w-lg"));

page.appendChild(button("dan-1", "danger", "sm", "dan-sm"));
page.appendChild(button("dan-2", "danger", "md", "dan-md"));
page.appendChild(button("dan-3", "danger", "lg", "dan-lg"));

export default testPage;
