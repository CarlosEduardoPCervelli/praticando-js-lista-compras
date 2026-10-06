# Lista de Compras Interativa

Input de texto + botão "Adicionar", lista de itens com botão "Remover" e
opção de marcar como "comprado" (clicando no texto, que fica riscado).
Tudo em JavaScript puro manipulando o DOM — sem framework e sem back-end.
Os dados ficam só na memória da página: se recarregar, a lista some.

## Como funciona

- `adicionarItem()`: lê o valor do input, ignora se estiver vazio, cria um
  novo `<li>` e adiciona na lista (`listaItens.appendChild`). Também limpa
  o input depois de adicionar.
- `criarElementoItem(texto)`: monta o `<li>` com:
  - um `<span>` com o texto do item — clicar nele chama
    `classList.toggle("item-comprado")`, que é o que risca o texto via CSS;
  - um `<button>` de remover — clicar nele chama `li.remove()`, tirando o
    item da lista.
- O botão "Adicionar" tem um `addEventListener("click", ...)`, e o input
  também escuta `keydown` pra permitir adicionar apertando **Enter**.

## Como ver

Basta abrir `index.html` direto no navegador.

## Possíveis melhorias futuras
- Salvar a lista no `localStorage` pra não perder ao recarregar a página.
- Adicionar um contador de "itens pendentes" no topo.
- Impedir itens duplicados na lista.
