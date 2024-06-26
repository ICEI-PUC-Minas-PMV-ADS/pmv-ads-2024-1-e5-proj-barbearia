import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Homepage from './pages/homepage';
import Sobre from './pages/sobre';
import Contato from './pages/contato';
import RecuperarSenha from './pages/recuperar_senha';
import Agendamento from './pages/agendamento';
import Agendamento2 from './pages/agendamento2';
import Agendamento3 from './pages/agendamento3';
import Agendamento4 from './pages/agendamento4';
import PrivateRoute from './PrivateRoute'; 
import { UserProvider} from './UserContext';
import Backoffice from './pages/backoffice';

function App() {

  return (
    <UserProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recuperar_senha" element={<RecuperarSenha />} />
        <Route path="/agendamento" element={<Agendamento />} />
        <Route path="/agendamento2/:serviceName" element={<Agendamento2 />} />
        <Route path="/agendamento3/:serviceName/:employeeId" element={<Agendamento3 />} />
        <Route path="/agendamento4/:serviceName/:employeeId/:date/:hour" element={<Agendamento4 />} />
        <Route path="/backoffice" element={<PrivateRoute/>}>
        <Route path="/backoffice" element={<Backoffice />} />
        </Route>
      </Routes>
    </Router>
    </UserProvider>
  );
}

export default App;
