import React from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Manager_employee from './manager_employee';
import { useUser } from '../UserContext';



const Plataforma = () => {

    const {name} = useUser();

  
    const getCurrentDate = () => {
      const currentDate = new Date();
      const formattedDate = format(currentDate, "EEEE, dd 'de' MMMM 'de' yyyy", { locale: ptBR });
      return formattedDate;
    };

    const handleExitClick = () => {
      localStorage.removeItem('bearerToken');
      localStorage.removeItem('Id');
      localStorage.removeItem('name');
      localStorage.removeItem('surname');
      localStorage.removeItem('email');
    };

  return (
    <>
    <header className='manager-cabecalho'>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"/>
      


      <div className='manager-div-cabecalho'>
      <img className='img-logo-manager' src="/imagens/logo.png" alt="logomarca vintage barbearia"/>
      </div>

      <div className='manager-div-cabecalho'>
      <p>Bem vindo, {name}</p>
      </div>
      <div className='manager-div-cabecalho'>
        <p className='p-data-manager'>{getCurrentDate()}</p>
      </div>
      <div className='manager-div-cabecalho'>
      <a href="/login" className='last-div-cabe-manager' onClick={handleExitClick}><p>Sair</p><i class="bi bi-box-arrow-right exit-button" style={{ fontSize: '2rem' }}></i></a>
      </div>
    </header>

    <main className='main-manager'>
    <nav className='navbar-manager'> 
      <ul class='menu-manager'>
        <li><i class="bi bi-people-fill"></i> Gerenciar funcionarios</li>
        <li><i class="bi bi-journal-bookmark-fill"></i> Agenda</li>
        <li><i class="bi bi-archive-fill"></i> Estoque</li>
        <li><i class="bi bi-file-bar-graph-fill"></i> Relatórios</li>
        <li><i class="bi bi-clock-history"></i> Histórico de agendamentos</li>
      </ul>
    </nav>

    <div className='conteudo-manager-area'> 
      <Manager_employee/>
    </div>
    </main>
    </>



)};

export default Plataforma;
