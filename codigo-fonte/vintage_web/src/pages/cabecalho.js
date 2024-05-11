import React from 'react';

const Cabecalho = () => {
  return (
    <header className='homepageCabecalho'>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"/>

      <div className='hp-menu-mobile'>
      <label for="menu-mobile">
      <i class="bi bi-list icon-menu-mobile"></i>
      </label>
      <input type="checkbox" id="menu-mobile"></input>           
        <div className='area-menu-mobile'>
        <label for="menu-mobile">
        <i class="bi bi-x icon-menu-mobile icon-fechar"></i>
      </label>
      <input type="checkbox" id="menu-mobile"></input>

      <a href='/agendamento' className='HomepageMenu'>
          <img className='homepageIcone1' src="/imagens/agenda-icon.png" alt="agendamentos"/>
          <p className='textoMenu'>Agendamentos</p>
        </a>

        <a href='/sobre' className='HomepageMenu'>
          <img className='homepageIcone' src="/imagens/sobre-icon.png" alt="sobre"/>
          <p className='textoMenu'>Quem somos</p>
          </a>

          <a href='/contato'className='HomepageMenu'>
          <img className='homepageIcone' src="/imagens/contato-icon.png" alt="contato"/>
          <p className='textoMenu'>Contato</p>
        </a>

        <a href='/login' className='HomepageMenu'>
          <img className='homepageIcone' src="/imagens/cadeado-icon.png" alt="área restrita"/>
          <p  className='textoMenu'>Área Restrita</p>
        </a>

        </div>
      <a href='/' className='hp-logo-mobile'>
          <img className='homepageLogo' src="/imagens/logo.png" alt="logomarca vintage barbearia"/>
        </a>
      </div>
      
      <div className="HomepageMenuArea">
        <a href='/agendamento' className='HomepageMenu'>
          <img className='homepageIcone1' src="/imagens/agenda-icon.png" alt="agendamentos"/>
          <p className='textoMenu'>Agendamentos</p>
        </a>

        <a href='/sobre' className='HomepageMenu'>
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
        <a href='/login' className='HomepageMenu'>
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