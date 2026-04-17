const app = document.getElementById("app");

for (let i = 1; i <= 8; i++) {
  const item = document.createElement("div");
  item.className = "link";
  item.textContent = "Chain Link " + i;
  app.appendChild(item);
}
