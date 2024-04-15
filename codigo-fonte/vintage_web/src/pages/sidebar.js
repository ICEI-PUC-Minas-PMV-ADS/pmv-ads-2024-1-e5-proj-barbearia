import React from 'react';
import '../sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><i class="bi bi-people-fill"></i> Gerenciar funcionarios</li>
        <li><i class="bi bi-journal-bookmark-fill"></i> Agenda</li>
        <li><i class="bi bi-archive-fill"></i> Estoque</li>
        <li><i class="bi bi-file-bar-graph-fill"></i> Relatórios</li>
        <li><i class="bi bi-clock-history"></i> Histórico de agendamentos</li>
      </ul>
    </div>
  );
};

export default Sidebar;
