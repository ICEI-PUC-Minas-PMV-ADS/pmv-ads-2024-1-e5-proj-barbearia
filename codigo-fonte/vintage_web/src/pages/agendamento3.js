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

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Gambá');
        const response = await axios.get(`${apiUrl}/schedule/workload`);
        setHorarios(response.data);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    };

    fetchData();
  }, []);

  const handleButtonClick = (horario, index) => {
    console.log("Botão clicado:", index);
    setBotaoClicado(index);
    setAgendamentoSelecionado(horario);
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
          <input className='input-data' type='date' value={agendamentoSelecionado?.date} onChange={(e) => setAgendamentoSelecionado({ ...agendamentoSelecionado, date: e.target.value })}></input>

          <div className='div-horarios'>
            {horarios.length === 0 ? (
              <div id="loading">Carregando...</div>
            ) : (
              horarios.map((horario, index) => (
                <button onClick={() => handleButtonClick(horario, index)} key={index} className='agendamentos-horarios' style={{ backgroundColor: botaoClicado === index ? 'grey' : '' }}>{horario.hour}</button>
              ))
            )}
          </div>
          {agendamentoSelecionado && agendamentoSelecionado.date && agendamentoSelecionado.hour && ( // Verifica se a data e o horário foram selecionados antes de renderizar o botão de próximo
            <div className="botao-prosseguir">
              <Link to={`/agendamento4/${serviceName}/${employeeId}/${agendamentoSelecionado.date} ${agendamentoSelecionado.hour}`}>
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
