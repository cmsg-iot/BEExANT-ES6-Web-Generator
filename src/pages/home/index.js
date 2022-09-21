let homePage = document.createElement("div");
homePage.id = "page_home";
homePage.classList.add("fade-in-500ms");

let title = document.createElement("h1");

title.innerHTML = "Home Page";
title.style = "text-align: center;color:#fff;";
title.addEventListener("click", () => {
  alert("This is Home Page.");
});

homePage.appendChild(title);

export default homePage;
