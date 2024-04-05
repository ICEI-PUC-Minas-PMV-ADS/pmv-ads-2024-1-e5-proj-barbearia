import React from 'react';

const Cabecalho = () => {
  return (
    <header className='homepageCabecalho'>
      
      <div className="HomepageMenuArea">
        <a href='#' className='HomepageMenu'>
          <img className='homepageIcone1' src="/imagens/agenda-icon.png" alt="agendamentos"/>
          <p className='textoMenu'>Agendamentos</p>
        </a>

        <a href='/sobre'className='HomepageMenu'>
          <img className='homepageIcone' src="/imagens/sobre-icon.png" alt="sobre"/>
          <p className='textoMenu'>Quem somos</p>
        </a>
        <a href='/' className='HomepageMenu'>
          <img className='homepageLogo' src="/imagens/logo.png" alt="logomarca vintage barbearia"/>
        </a>
        <a href='/contato'className='HomepageMenu'>
          <img className='homepageIcone' src="/imagens/contato-icon.png" alt="contato"/>
          <p className='textoMenu'>Contato</p>
        </a>
        <a href='#' className='HomepageMenu'>
          <img className='homepageIcone' src="/imagens/cadeado-icon.png" alt="área restrita"/>
          <p  className='textoMenu'>Área Restrita</p>
        </a>
      </div>

      <div className='homepage-subCabecalho'>
          <marquee direction="right">
          Aberto de Segunda à Sábado das 09h às 19h
          </marquee>
      </div>

    </header>
  );
};

export default Cabecalho;