import React, { useEffect, useState } from 'react';
import axios from 'axios';
import apiUrl from '../services/ApiConfig';
import Swal from 'sweetalert2';

function Dropdown({ barbeiroSelecionado, setBarbeiroSelecionado, isOpen, setIsOpen, barbeiros, handlebarbeiroClick }) {
    return (
        <>
            <button onClick={() => setIsOpen(!isOpen)} className="drop-agenda">
                {barbeiroSelecionado.name} <i className="bi bi-arrow-down-short"></i>
            </button>
            {isOpen && (
                <div className="barbeiros-dropdown">
                    {barbeiros.map((barbeiro) => (
                        <a key={barbeiro.id} href="#" onClick={() => handlebarbeiroClick(barbeiro)}>
                            {barbeiro.name}
                        </a>
                    ))}
                </div>
            )}
        </>
    );
}

const ManagerSchedule = () => {
    const [barbeiros, setBarbeiros] = useState([{ id: null, name: 'Todos os barbeiros' }]);
    const [barbeiroSelecionado, setBarbeiroSelecionado] = useState(barbeiros[0]);
    const [isOpen, setIsOpen] = useState(false);
    const [schedules, setSchedules] = useState(null);
    const [dataSelecionada, setDataSelecionada] = useState(null);
    const [checkedIndexes, setCheckedIndexes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('bearerToken');
                const response = await axios.get(`${apiUrl}/manager/employee`, {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                });
                setBarbeiros([{ id: null, name: 'Todos os barbeiros' }, ...response.data]);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
                console.log(error);
            }
        };

        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const token = localStorage.getItem('bearerToken');
            let url = `${apiUrl}/schedule/get-schedule`;

            if (barbeiroSelecionado.id === null && dataSelecionada !== null) {
                url += `/none/${dataSelecionada}`;
            } else if (barbeiroSelecionado.id !== null) {
                url += `/${barbeiroSelecionado.id}`;
                if (dataSelecionada !== null) {
                    url += `/${dataSelecionada}`;
                }
            }

            const response = await axios.get(url, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });
            setSchedules(response.data);
            console.log('Agendamentos:', response);
        } catch (error) {
            console.error('Erro ao buscar agendamentos:', error);
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [barbeiroSelecionado, dataSelecionada]);

    const handlebarbeiroClick = (barbeiro) => {
        setBarbeiroSelecionado(barbeiro);
        setIsOpen(false);
    };

    const handleDateChange = (event) => {
        setDataSelecionada(event.target.value);
    };

    const handleCancelAppointment = async (appointmentId, index) => {
        try {
            const token = localStorage.getItem('bearerToken');
            await axios.post(`${apiUrl}/schedule/cancel-appointment/${appointmentId}`, {}, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });
            fetchData();
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Sucesso!",
                showConfirmButton: false,
                timer: 1500
            });
            setCheckedIndexes([]);
        } catch (error) {
            Swal.fire({
                title: 'Erro',
                text: error.response.data.message,
                icon: 'error',
                confirmButtonText: 'Fechar'
            });
            setCheckedIndexes([]);
        }
    };    

    const handleCheckboxChange = (index) => {
    if (checkedIndexes.includes(index)) {
        setCheckedIndexes(checkedIndexes.filter(i => i !== index));
    } else {
        setCheckedIndexes([index]);
    }
};


    const isChecked = (index) => {
        return checkedIndexes.includes(index);
    };

    return (
        <div className="manager-funcionarios-area">
            <h1 className="manager-titulo">Agenda</h1>
            
            <div className='agenda-data-area'>
                <Dropdown
                    barbeiroSelecionado={barbeiroSelecionado}
                    setBarbeiroSelecionado={setBarbeiroSelecionado}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    barbeiros={barbeiros}
                    handlebarbeiroClick={handlebarbeiroClick}
                />
                <input type='date' className='data-agenda' onChange={handleDateChange} />
            </div>
            
            <div className='agenda-area'>
                <div className='filtros-agn-area'>
                    <div className='div-filtro-agn'><p>Nome</p></div>
                    <div className='div-filtro-agn'><p>E-mail</p></div>
                    <div className='div-filtro-agn'><p>Telefone</p></div>
                    <div className='div-filtro-agn'><p>Horário</p></div>
                    <div className='div-filtro-agn'><p>Status</p></div>
                    <div className='div-filtro-agn'><p>Cancelar</p></div>
                </div>

                { schedules && schedules.map((schedule, index) => (
                    <div key={index} className='agendamento-unt'>
                        <div className='div-agn-txt'><p>{schedule.name}</p></div>
                        <div className='div-agn-txt'><p>{schedule.email}</p></div>
                        <div className='div-agn-txt'><p>{schedule.telefone}</p></div>
                        <div className='div-agn-txt'><p>{schedule.hour}</p></div>
                        <div className='div-agn-txt'><p>{schedule.status === 1 ? 'Confirmado' : 'Cancelado' }</p></div>
                        <div className='div-agn-txt'>
                            <label htmlFor={`alterar-agendamento-${index}`}>
                                <i className="bi bi-pencil-fill btn-editar-agn"></i>
                            </label>
                            <input type="checkbox" id={`alterar-agendamento-${index}`} onChange={() => handleCheckboxChange(index)} checked={isChecked(index)} style={{ display: 'none' }}></input>
                            <div className='modal-alterar-agendamento' style={{ display: isChecked(index) ? 'block' : 'none' }}>
                                <div className='modal-area-agn'>
                                    <div className='modal-cab-agn'>
                                        <p>Deseja cancelar o agendamento?</p> 
                                    </div>
                                    <div className='modal-foo-agn'>
                                        <a className='btn-cancelar-modal' onClick={() => handleCheckboxChange(index)}>Não</a>
                                        <a className='btn-confirmar-modal' onClick={() => handleCancelAppointment(schedule.id)}>Sim</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default ManagerSchedule;
