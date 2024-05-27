import React, { useEffect, useState } from 'react';
import axios from 'axios';
import apiUrl from '../services/ApiConfig';


function Dropdown({ barbeiroSelecionado, setBarbeiroSelecionado, isOpen, setIsOpen, barbeiros, handlebarbeiroClick }) {
    return (
        <>
            <button onClick={() => setIsOpen(!isOpen)} className="drop-agenda">{barbeiroSelecionado} <i class="bi bi-arrow-down-short"></i></button>
            {isOpen && (
                <div className="barbeiros-dropdown">
                    {barbeiros.map((barbeiro) => (
                        <a key={barbeiro} href="#" onClick={() => handlebarbeiroClick(barbeiro)}>
                            {barbeiro}
                        </a>
                    ))}
                </div>
            )}
        
    </>
    );
}

const ManagerSchedule = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('bearerToken');
                const response = await axios.get(`${apiUrl}/manager/employee`, {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                });
                setData(response.data);
                console.log(response);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
                console.log(error);
            }
        };

        fetchData();
    }, []);

    const [barbeiroSelecionado, setBarbeiroSelecionado] = useState('Vitor Hugo');
    const [isOpen, setIsOpen] = useState(false);
    const barbeiros = ['Vitor', 'Gabriel', 'Guilherme'];

    const handlebarbeiroClick = (barbeiros) => {
        setBarbeiroSelecionado(barbeiros);
        setIsOpen(false);
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
              </div>
            
            <div className='agenda-area'>
              
                <input type='date' className='data-agenda'></input>

                <div className='filtros-agn-area'>
                    
                    <div className='div-filtro-agn'><p>Nome</p></div>
                    <div className='div-filtro-agn'><p>E-mail</p></div>
                    <div className='div-filtro-agn'><p>Telefone</p></div>
                    <div className='div-filtro-agn'><p>Horário</p></div>
                    <div className='div-filtro-agn'><p>Status</p></div>
                    <div className='div-filtro-agn'><p>Cancelar</p></div>
                </div>

                <div className='agendamento-unt'>
                    <div className='div-agn-txt'><p>Gabriel</p></div>
                    <div className='div-agn-txt'><p>email@yahoo.com.br</p></div>
                    <div className='div-agn-txt'><p>(31)99862-2514</p></div>
                    <div className='div-agn-txt'><p>09:00</p></div>
                    <div className='div-agn-txt' ><p>Confirmado</p></div>
                    <div className='div-agn-txt'><label htmlFor="alterar-agendamento" >
                <i className="bi bi-pencil-fill btn-editar-agn"></i></label>
                <input type="checkbox" id="alterar-agendamento"></input>
                <div className='modal-alterar-agendamento'>
                    <div className='modal-area-agn'>
                            <div className='modal-cab-agn'>
                            <p>Deseja cancelar o agendamento?</p> 
                            </div>

    
                        <div className='modal-foo-agn'>
                            <label htmlFor="alterar-agendamento"><a className='btn-cancelar-modal'>Cancelar</a></label>
                            <label htmlFor="alterar-agendamento"><a className='btn-confirmar-modal'>Confirmar</a></label>
                        </div>

                        
                    </div>
                </div></div>
                </div>

              
               
            </div>
        </div>
    );
};

export default ManagerSchedule;
