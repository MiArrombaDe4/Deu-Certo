import { perfis } from "./dados.js";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const perfil = perfis.find(p => p.id === id);

const conteudo = document.getElementById("conteudo");
const avatar = document.getElementById("avatar");

avatar.src = perfil.imagens.avatar;

window.mostrarTela = function(tela) {

  if (tela === "perfil") {
    conteudo.innerHTML = `
      <div class="tela">
        <div class="info-box">
          <h2>${perfil.nome}</h2>
          <p>Nível: ${perfil.stats.nivel}</p>
          <p>Clientes: ${perfil.stats.clientes}</p>
        </div>

        <img src="${perfil.imagens.perfil}" class="personagem">
      </div>
    `;
  }

 if (tela === "roupas") {
  conteudo.innerHTML = `
    <div class="roupas-box">
      ${perfil.roupas.map(r => `<img src="${r}">`).join("")}
    </div>

    <div class="roupa-info">
      <strong>Default Outfit</strong>
      <p>Roupa padrão de ${perfil.nome}.</p>

      <button class="btn-variacoes">Variações</button>
    </div>

    <img src="${perfil.imagens.perfil}" class="personagem">
  `;
}
};

// inicia na tela perfil
mostrarTela("perfil");
