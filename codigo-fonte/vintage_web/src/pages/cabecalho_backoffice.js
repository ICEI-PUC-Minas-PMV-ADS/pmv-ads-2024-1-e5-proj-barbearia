import React from 'react';
import '../cabecalho_backoffice.css';
import apiUrl from '../services/ApiConfig';
import axios from 'axios';
import { useUser } from '../UserContext';

const Cabecalho_backoffice = () => {
  const {signed, setSigned,name,setName, email, surname} = useUser();


  return (
    <header className='navbar'>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"/>
      <div className="menu-items">
        <a href='#' className='header-main'>
          <img className='img-logo' src="/imagens/logo.png" alt="logomarca vintage barbearia"/>
        </a>

        <p id="msg-welcome">Seja bem vindo, {name}</p>

        <a href="/sobre" id="exit"><i class="bi bi-box-arrow-right" style={{ fontSize: '3rem' }}></i></a>
      </div>

    </header>
  );
};

export default Cabecalho_backoffice;