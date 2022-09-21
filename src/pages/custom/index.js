let customPage = document.createElement("div");
customPage.id = "page_custom";
customPage.classList.add("fade-in-500ms");

let title = document.createElement("h1");

title.innerHTML = "Custom Page";
title.style = "text-align: center;color:#fff;";
title.addEventListener("click", () => {
  alert("This is Custom Page.");
});

customPage.appendChild(title);

export default customPage;
