import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import apiUrl from '../services/ApiConfig';

const Agendamento3 = () => {
  const { serviceName } = useParams();
  const { employeeId } = useParams();
  const [horarios, setHorarios] = useState([]);
  const [botaoClicado, setBotaoClicado] = useState(null);
  const [agendamentoSelecionado, setAgendamentoSelecionado] = useState(null);
  const today = new Date().toISOString().split('T')[0];
  const sixDaysFromNow = new Date(Date.now() + 6 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  const currentDate = new Date();
  const currentHour = currentDate.getHours();

  const fetchData = async (date) => {
    try {
      const data = {
        id: employeeId,
        date: date
      };
      const response = await axios.post(`${apiUrl}/schedule/workload`, data);
      const horariosArray = Object.entries(response.data).map(([key, value]) => ({ id: key, hour: value }));
      setHorarios(horariosArray);
    } catch (error) {
      console.error('Erro ao buscar os dados:', error);
    }
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setAgendamentoSelecionado({ date: selectedDate });
    fetchData(selectedDate);
  };

  const handleButtonClick = (horario, index) => {
    setBotaoClicado(index);
    setAgendamentoSelecionado({ ...horario, date: agendamentoSelecionado?.date });
  };

  return (
    <div className='body-agendamento'>
      <div>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" />
      </div>
      <div className='cab-agendamento'>
        <div className='cabecalho-agendamento'>
          <a href={`/agendamento2/${serviceName}`}>
            <i className="bi bi-arrow-left-short" style={{ fontSize: '2rem' }}></i>
          </a>
          <h2>Passo 3 de 4</h2>
          <h1>Selecionar Horário</h1>
        </div>
        <div className='cabecalho-logo'>
          <a href="/sobre"><img className='logo-agendamento' src="/imagens/logo.png" alt="logomarca vintage barbearia" /></a>
        </div>
      </div>
      <div className='conteudo-agendamento-div'>
        <div className='conteudo-agendamento'>
          <input className='input-data' type='date' value={agendamentoSelecionado?.date} onChange={handleDateChange} min={today} max={sixDaysFromNow} />

          {agendamentoSelecionado && agendamentoSelecionado.date && (
            <div className='div-horarios'>
              {horarios.length === 0 ? (
                <div id="loading">Carregando...</div>
              ) : (
                horarios.map((horario, index) => {
                  const selectedDate = new Date(agendamentoSelecionado.date + 'T00:00:00');
                  const currentDateWithoutTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
                  const selectedDateWithoutTime = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate());

                  const isToday = selectedDateWithoutTime.getTime() === currentDateWithoutTime.getTime();
                  
                  const [hours, minutes] = horario && horario.hour ? horario.hour.split(":").map(Number) : [0, 0];

                  if (isToday && hours > currentHour) {
                    return (
                      <button 
                        onClick={() => handleButtonClick(horario, index)} 
                        key={index} 
                        className='agendamentos-horarios' 
                        style={{ backgroundColor: botaoClicado === index ? 'grey' : '' }}
                      >
                        {horario.hour}
                      </button>
                    );
                  } else if (!isToday) {
                    return (
                      <button 
                        onClick={() => handleButtonClick(horario, index)} 
                        key={index} 
                        className='agendamentos-horarios' 
                        style={{ backgroundColor: botaoClicado === index ? 'grey' : '' }}
                      >
                        {horario.hour}
                      </button>
                    );
                  } else {
                    return null;
                  }
                })
              )}
            </div>
          )}
          {agendamentoSelecionado && agendamentoSelecionado.date && agendamentoSelecionado.hour && (
            <div className="botao-prosseguir">
              <Link to={`/agendamento4/${serviceName}/${employeeId}/${agendamentoSelecionado.date}/${parseInt(agendamentoSelecionado.id) + 1}`}>
                <button id="next-page">Próximo</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Agendamento3;
