let systemPage = document.createElement("div");
systemPage.id = "page_system";
systemPage.classList.add("fade-in-500ms");

let title = document.createElement("h1");

title.innerHTML = "System Page";
title.style = "text-align: center;color:#fff;";
title.addEventListener("click", () => {
  alert("This is System Page.");
});

systemPage.appendChild(title);

export default systemPage;
