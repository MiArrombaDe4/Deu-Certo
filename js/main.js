import { perfis } from "./dados.js";

const container = document.getElementById("cards");

function renderizar() {
  container.innerHTML = perfis.map(p => `
    <div class="card" onclick="abrirPerfil('${p.id}')">
      <img src="${p.imagens.perfil}">
      <h3>${p.nome}</h3>
      <p>${p.descricao}</p>
    </div>
  `).join("");
}

window.abrirPerfil = function(id) {
  window.location.href = "Perfil.html?id=" + id;
};

renderizar();