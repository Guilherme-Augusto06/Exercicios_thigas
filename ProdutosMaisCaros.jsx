import React from 'react';

const Produtos = ({ produtos }) => {
  // Filtrar produtos mais caros que R$ 1500
  const produtosFiltrados = produtos.filter((produto) => {
    const precoNumerico = parseInt(produto.preco.replace('R$', '').trim());
    return precoNumerico > 1500;
  });

  return (
    <div>
      {produtosFiltrados.map((produto) => (
        <div key={produto.id}>
          <h3>{produto.nome}</h3>
          <p>Preço: {produto.preco}</p>
          <ul>
            {produto.cores.map((cor, index) => (
              <li key={index} style={{ backgroundColor: cor, margin: '5px', padding: '5px' }}></li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

// Exemplo de uso com os dados fornecidos
const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];

// Exemplo de uso do componente
const App = () => (
  <div>
    <h2>Produtos Mais Caros que R$ 1500</h2>
    <Produtos produtos={produtos} />
  </div>
);

export default App;
