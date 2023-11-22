import React from 'react';

const Exercicio1 = () => {
  const nome = 'React';

  return (
    <div>
      <h1>Exercicio 1</h1>
      <p>Este é o exercicio 1</p>
      <p>{`Olá, meu nome é ${nome}`}</p>
      {nome === 'React' ? <p>Olá, meu nome é React</p> : null}
    </div>
  );
};

export default Exercicio1;