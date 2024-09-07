interface Produto {
    nome: string;
    tipo: string;
    valor: number;
}
  
function exibirInformacoes(produto: Produto): string {
    return `O produto ${produto.nome} é do tipo ${produto.tipo} no valor de ${produto.valor}.`;
}
  
const produto1: Produto = {
    nome: "Paçoca",
    tipo: "doce",
    valor: 2
};

const produto2: Produto = {
    nome: "Arroz",
    tipo: "Grão",
    valor: 20
};
  
console.log(exibirInformacoes(produto1));
console.log(exibirInformacoes(produto2));
  