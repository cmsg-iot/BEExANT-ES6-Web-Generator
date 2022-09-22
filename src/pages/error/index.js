import { Button } from "../../components/Button";

let errorPage = document.createElement("div");
let page = errorPage;

page.id = "page_error";
page.style = "text-align: center;";
page.classList.add("fade-in-500ms");

let title = document.createElement("h1");
let button = document.createElement("button");

title.innerHTML = "404 Not Found!";
title.style = "text-align: center;color:#fff;";
page.appendChild(title);

page.appendChild(
  Button("btn_back_home", "danger", "md", "返回主畫面", () => {
    location.hash = "#home";
  })
);

export default errorPage;
