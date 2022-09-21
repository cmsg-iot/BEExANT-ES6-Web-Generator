let terminalPage = document.createElement("div");
terminalPage.id = "page_terminal";
terminalPage.classList.add("fade-in-500ms");

let title = document.createElement("h1");

title.innerHTML = "Terminal Page";
title.style = "text-align: center;color:#fff;";
title.addEventListener("click", () => {
  alert("This is Terminal Page.");
});

terminalPage.appendChild(title);

export default terminalPage;
