import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Sobre from './pages/sobre';
import Contato from './pages/contato';
import RecuperarSenha from './pages/recuperar_senha';
import Agendamento from './pages/agendamento';
import Agendamento2 from './pages/agendamento2';
import Agendamento3 from './pages/agendamento3';
import Agendamento4 from './pages/agendamento4';
import Manager_employee from './pages/manager_employee';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/recuperar_senha" element={<RecuperarSenha />} />
          <Route path="/agendamento" element={<Agendamento />} />
          <Route path="/agendamento2" element={<Agendamento2 />} />
          <Route path="/agendamento3" element={<Agendamento3 />} />
          <Route path="/agendamento4" element={<Agendamento4 />} />
          <Route path="/backoffice/manager-employee" element={<Manager_employee />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
