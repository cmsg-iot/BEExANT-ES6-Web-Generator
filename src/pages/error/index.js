let errorPage = document.createElement("div");
errorPage.id = "page_error";
errorPage.style = "text-align: center;";
errorPage.classList.add("fade-in-500ms");

let title = document.createElement("h1");
let button = document.createElement("button");

title.innerHTML = "404 Not Found!";
title.style = "text-align: center;color:#fff;";

button.innerHTML = "返回主畫面";
button.className = "btn-basic danger btn-md";
button.addEventListener("click", () => {
  location.hash = "#home";
});

errorPage.appendChild(title);
errorPage.appendChild(button);

export default errorPage;
