let schedulePage = document.createElement("div");
schedulePage.id = "page_schedule";
schedulePage.classList.add("fade-in-500ms");

let title = document.createElement("h1");

title.innerHTML = "Schedule Page";
title.style = "text-align: center;color:#fff;";
title.addEventListener("click", () => {
  alert("This is Schedule Page.");
});

schedulePage.appendChild(title);

export default schedulePage;
