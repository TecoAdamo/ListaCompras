let itens = [];
let continuar = "s";

const AdicionarItens = () => {
  while (continuar == "s") {
    itens.push(prompt('Adicione itens para compra na sua lista: '));
    continuar = prompt('Deseja adicionar outros produtos? s / n: ');
    if (continuar == "n") {
      console.log('Aqui está sua lista de compras');
      for (let i = 0; i < itens.length; i++) {
        console.log("Seus produtos: " + itens[i]);
      }
    }
  }
  ExcluirItens(itens);
}

function ExcluirItens(itens) {
  let excluir = prompt('Deseja excluir algum produto da lista? s/ n: ');
  if (excluir == "s") {
    let ItemExcluir = prompt('Qual item deseja excluir? ');
    let indice = itens.indexOf(ItemExcluir);

    if (indice !== -1) {
      itens.splice(indice, 1);
      console.log('Item ' + ItemExcluir + ' removido da lista!');
    } else {
      console.log(`Seu item ${ItemExcluir} não foi encontrado na lista.`);
    }
  }
}

AdicionarItens();