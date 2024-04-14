import React from 'react';

const Agendamento2 = () => {

  return (
    <div className='body-agendamento'>
      <div>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"/>
      </div>
      <div className='cab-agendamento'>
        <div className='cabecalho-agendamento'>
          <a href="/agendamento">
          <i className="bi bi-arrow-left-short" style={{ fontSize: '2rem' }}></i>
          </a>
          <h2>Passo 2 de 4</h2>
          <h1>Selecionar Profissional</h1>

        </div>
        <div className='cabecalho-logo'>
          <img className='logo-agendamento' src="/imagens/logo.png" alt="logomarca vintage barbearia" />

        </div>
      </div>
    <div className='conteudo-agendamento-div'>
      <div className='conteudo-agendamento'>
          <div className='div-profissional'>
          <div className='conteudo-profissional'>
            <i class="bi bi-person"></i>
            <p>Vitor Hugo</p>
          </div>
          </div>

          <div className='div-profissional'>
          <div className='conteudo-profissional'>
            <i class="bi bi-person"></i>
            <p>Profissional 2</p>
          </div>
          </div>

          <div className='div-profissional'>
          <div className='conteudo-profissional'>
            <i class="bi bi-person"></i>
            <p>Profissional 3</p>
          </div>
          </div>
          
          </div>
      </div>
      </div>
    
  );
};

export default Agendamento2;
