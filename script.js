// Lista de compras interativa — tudo em memória, sem back-end.
// Os itens somem se a página for recarregada (é só prática de DOM).

const inputItem = document.getElementById("input-item");
const botaoAdicionar = document.getElementById("botao-adicionar");
const listaItens = document.getElementById("lista-itens");

botaoAdicionar.addEventListener("click", adicionarItem);

// Também permite adicionar apertando Enter no input, não só clicando no botão
inputItem.addEventListener("keydown", (evento) => {
  if (evento.key === "Enter") {
    adicionarItem();
  }
});

function adicionarItem() {
  const texto = inputItem.value.trim();

  if (texto === "") {
    return; // não adiciona item vazio
  }

  const itemLi = criarElementoItem(texto);
  listaItens.appendChild(itemLi);

  inputItem.value = "";
  inputItem.focus();
}

function criarElementoItem(texto) {
  const li = document.createElement("li");
  li.className = "item";

  const span = document.createElement("span");
  span.className = "item-texto";
  span.textContent = texto;
  // clicar no texto marca/desmarca como comprado
  span.addEventListener("click", () => {
    li.classList.toggle("item-comprado");
  });

  const botaoRemover = document.createElement("button");
  botaoRemover.className = "botao-remover";
  botaoRemover.textContent = "Remover";
  botaoRemover.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(botaoRemover);

  return li;
}
