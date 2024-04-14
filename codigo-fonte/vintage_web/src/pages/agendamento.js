import React from 'react';

const Agendamento = () => {

  return (
    <div className='body-agendamento'>

      <div className='cab-agendamento'>
        <div className='cabecalho-agendamento'>
          <h2>Passo 1 de 4</h2>
          <h1>Selecionar Serviço</h1>

        </div>
        <div className='cabecalho-logo'>
          <img className='logo-agendamento' src="/imagens/logo.png" alt="logomarca vintage barbearia" />

        </div>
      </div>
    <div className='conteudo-agendamento-div'>
      <div className='conteudo-agendamento'>
          <div className='filtros-agendamento'>
            <button className='opc-filtro'>Barba</button>
            <button className='opc-filtro-selecionado'>Cabelo</button>
            <button className='opc-filtro'>Química</button>
            <button className='opc-filtro'>Estética</button>
          </div>

          <div className='servicos-agendamento'> 
            <ul>
              <li className='servico-div'>
                <p className='servico-titulo-agn'>Corte</p>
                <p>40 min. - R$30,00</p>
              </li>

              <li className='servico-div'>
                <p className='servico-titulo-agn'>Corte com Luzes</p>
                <p>40 min. - R$30,00</p>
              </li>

              <li className='servico-div'>
                <p className='servico-titulo-agn'>Corte + Alisamento</p>
                <p>40 min. - R$30,00</p>
              </li>

              <li className='servico-div'>
                <p className='servico-titulo-agn'>Corte + Pigmentação</p>
                <p>40 min. - R$30,00</p>
              </li>
            </ul>
          </div>
      </div>
      </div>
    </div>
  );
};

export default Agendamento;
