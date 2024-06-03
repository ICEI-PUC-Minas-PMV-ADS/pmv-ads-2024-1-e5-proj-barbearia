import React, { useState } from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useUser } from '../UserContext';
import Manager_employee from './manager_employee';
import ManagerSchedule from './manager_schedule';
import ManagerStock from './manager_stock';
import ManagerReport from './manager_report';
import ManagerHistory from './manager_history';

const Backoffice = () => {
  const { name } = useUser();
  const [activeComponent, setActiveComponent] = useState('ManagerSchedule');

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

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'Manager_employee':
        return <Manager_employee />;
      case 'ManagerSchedule':
        return <ManagerSchedule />;
      case 'ManagerStock':
        return <ManagerStock />;
      case 'ManagerReport':
        return <ManagerReport />;
      case 'ManagerHistory':
        return <ManagerHistory />;
      default:
        return <ManagerSchedule />;
    }
  };

  return (
    <>
      <header className='manager-cabecalho'>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" />

        <div className='manager-div-cabecalho'>
          <img className='img-logo-manager' src="/imagens/logo.png" alt="logomarca vintage barbearia" />
        </div>

        <div className='manager-div-cabecalho'>
          <p>Bem vindo, {name}</p>
        </div>
        <div className='manager-div-cabecalho'>
          <p className='p-data-manager'>{getCurrentDate()}</p>
        </div>
        <div className='manager-div-cabecalho'>
          <a href="/login" className='last-div-cabe-manager' onClick={handleExitClick}><p>Sair</p><i className="bi bi-box-arrow-right exit-button" style={{ fontSize: '2rem' }}></i></a>
        </div>
      </header>

      <main className='main-manager'>
        <nav className='navbar-manager'>
          <ul className='menu-manager'>
            <li onClick={() => setActiveComponent('ManagerSchedule')}><i className="bi bi-journal-bookmark-fill"></i> Agenda</li>
            <li onClick={() => setActiveComponent('Manager_employee')}><i className="bi bi-people-fill"></i> Gerenciar funcionarios</li>
            <li onClick={() => setActiveComponent('ManagerStock')}><i className="bi bi-archive-fill"></i> Estoque</li>
            <li onClick={() => setActiveComponent('ManagerReport')}><i className="bi bi-file-bar-graph-fill"></i> Relatórios</li>
            <li onClick={() => setActiveComponent('ManagerHistory')}><i className="bi bi-clock-history"></i> Histórico de agendamentos</li>
          </ul>
        </nav>

        <div className='conteudo-manager-area'>
          {renderActiveComponent()}
        </div>
      </main>
    </>
  );
};

export default Backoffice;
