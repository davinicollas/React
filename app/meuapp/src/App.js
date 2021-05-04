import React from 'react';
const titulo = <h1>esse e um titulo</h1>;
const App = () => {
  const nome = Math.random();
  const ativo = true;
  function mostrarNome(sobrenome) {
    return 'davi' + sobrenome;
  }
  const carro = {
    marca: 'ford',
    rodas: '4',
  };
  const estiloh1 = {
    color: 'red',
    fontSize: '2rem',
  };
  return (
    <>
      {titulo}
      <p>
        {true ? 'adsdsa' : 'dssada'}-{10}
        {mostrarNome('nicollas')}
      </p>
      <p style={estiloh1}>{new Date().getFullYear()}</p>
      <p>{carro.marca}</p>
      <p>{carro.rodas}</p>
      <p className={ativo ? 'ativo' : 'inativo'}>{nome * 100}</p>
    </>
  );
};

export default App;
