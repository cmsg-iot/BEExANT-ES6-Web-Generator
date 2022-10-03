import { Button } from "../../components/Button";
import { ConfigButton } from "../../components/ConfigButton";
import { PageTitle } from "../../components/PageTitle";
import { Tabs } from "../../components/Tabs";

let testPage = document.createElement("div");
let page = testPage;

page.id = "page_test";
page.classList.add("fade-in-500ms");

page.appendChild(PageTitle("🔧 測試頁面"));

page.appendChild(
  ConfigButton("btn-1", "btn-1", "v-1", 1, () => alert("This is btn-1."))
);
page.appendChild(ConfigButton("btn-2", "btn-2", "v-2", 2));
page.appendChild(ConfigButton("btn-3", "btn-3", "v-3", 3));
page.appendChild(ConfigButton("btn-4", "btn-4", "v-4", 4));
page.appendChild(ConfigButton("btn-5", "btn-5", "v-5", 5));
page.appendChild(ConfigButton());

page.appendChild(Button("d-1", "default", "sm", "d-sm"));
page.appendChild(Button("d-2", "default", "md", "d-md"));
page.appendChild(Button("d-3", "default", "lg", "d-lg"));

page.appendChild(Button("p-1", "primary", "sm", "p-sm"));
page.appendChild(Button("p-2", "primary", "md", "p-md"));
page.appendChild(Button("p-3", "primary", "lg", "p-lg"));

page.appendChild(Button("s-1", "success", "sm", "s-sm"));
page.appendChild(Button("s-2", "success", "md", "s-md"));
page.appendChild(Button("s-3", "success", "lg", "s-lg"));

page.appendChild(Button("w-1", "warning", "sm", "w-sm"));
page.appendChild(Button("w-2", "warning", "md", "w-md"));
page.appendChild(Button("w-3", "warning", "lg", "w-lg"));

page.appendChild(Button("dan-1", "danger", "sm", "dan-sm"));
page.appendChild(Button("dan-2", "danger", "md", "dan-md"));
page.appendChild(Button("dan-3", "danger", "lg", "dan-lg"));

try {
  page.appendChild(Tabs());
} catch (error) {
  console.error(error);
}

export default testPage;
