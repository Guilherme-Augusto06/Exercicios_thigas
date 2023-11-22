import React from 'react';

const ClienteComponent = ({ cliente, idade, compras, ativa }) => {
  // Calcular o total de gastos usando map e reduce
  const totalGastos = compras
    .map((compra) => parseFloat(compra.preco.replace('R$', '').trim()))
    .reduce((acc, preco) => acc + preco, 0);

  // Determinar a cor do texto com base na situação
  const corTexto = ativa ? 'green' : 'red';

  // Determinar a mensagem de alerta se o gasto for maior que 10000
  const mensagemAlerta =
    totalGastos > 10000 ? <p style={{ color: 'red' }}>Você está gastando muito!</p> : null;

  return (
    <div>
      <h2>Nome: {cliente}</h2>
      <p>Idade: {idade}</p>
      <p>
        Situação: <span style={{ color: corTexto }}>{ativa ? 'Ativa' : 'Inativa'}</span>
      </p>
      <p>Total Gasto: R$ {totalGastos}</p>
      {mensagemAlerta}
    </div>
  );
};

// Exemplo de uso com os dados fornecidos
const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

// Exemplo de uso do componente
const App = () => (
  <div>
    <ClienteComponent {...luana} />
    <ClienteComponent {...mario} />
  </div>
);

export default App;
