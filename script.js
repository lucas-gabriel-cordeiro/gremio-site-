// JavaScript do site do Grêmio

console.log("Site do Grêmio carregado com sucesso!");

const links = document.querySelectorAll("nav a");

links.forEach(function (link) {
  link.addEventListener("click", function () {
    console.log("Você acessou: " + link.textContent);
  });
});
