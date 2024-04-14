import React from 'react';

const Agendamento3 = () => {

  return (
    <div className='body-agendamento'>
      <div>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" />
      </div>
      <div className='cab-agendamento'>
        <div className='cabecalho-agendamento'>
          <a href="/agendamento2">
            <i className="bi bi-arrow-left-short" style={{ fontSize: '2rem' }}></i>
          </a>
          <h2>Passo 3 de 4</h2>
          <h1>Selecionar Horário</h1>

        </div>
        <div className='cabecalho-logo'>
          <img className='logo-agendamento' src="/imagens/logo.png" alt="logomarca vintage barbearia" />

        </div>
      </div>
      <div className='conteudo-agendamento-div'>
        <div className='conteudo-agendamento'>
            <input className='input-data' type='date'></input>

            <div className='div-horarios'>
              <ul className='agendamentos-horarios'>
                <li>
                  08:00
                </li>

                <li>
                  09:00
                </li>

                <li>
                  10:00
                </li>

                <li>
                  11:00
                </li>

                <li>
                  12:00
                </li>

                <li>
                  13:00
                </li>

                <li>
                  14:00
                </li>

                <li>
                  15:00
                </li>

                <li>
                  16:00
                </li>

                <li>
                  17:00
                </li>

                <li>
                  18:00
                </li>

                <li>
                  19:00
                </li>

                <li>
                  20:00
                </li>
              </ul>

            </div>

        </div>
      </div>
    </div>

  );
};

export default Agendamento3;
