import React from 'react';

const Agendamento4 = () => {

  return (
    <div className='body-agendamento'>
      <div>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" />
      </div>
      <div className='cab-agendamento'>
        <div className='cabecalho-agendamento'>
          <a href="/agendamento3">
            <i className="bi bi-arrow-left-short" style={{ fontSize: '2rem' }}></i>
          </a>
          <h2>Passo 4 de 4</h2>
          <h1>Concluir Agendamento</h1>

        </div>
        <div className='cabecalho-logo'>
          <img className='logo-agendamento' src="/imagens/logo.png" alt="logomarca vintage barbearia" />

        </div>
      </div>
      <div className='conteudo-agendamento-div'>
        <div className='conteudo-agendamento'>
          <div className='concluir-agn-div'>
            <p className='input-data'>Informe seus dados</p>
          </div>
            <div className='input-concluir-area'>
                <input type='Name' placeholder='Nome'></input>
                <input type='phone' placeholder='Telefone'></input>
                <input type='email' placeholder='E-mail'></input>
            </div>

            <div className='agn-btn-area'>
              <button className='btn-cancelar'>Cancelar</button>
              <button className='btn-confirmar'>Confirmar</button>
            </div>

        </div>
      </div>
    </div>

  );
};

export default Agendamento4;
