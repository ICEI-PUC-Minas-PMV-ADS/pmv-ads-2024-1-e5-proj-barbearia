import React, { useState } from 'react';
import axios from 'axios';
import apiUrl from '../services/ApiConfig';

const ManagerReport = () => {
    const [dataSelecionada, setDataSelecionada] = useState("");

    const handleDateChange = (event) => {
        setDataSelecionada(event.target.value);
    };

    return (
        <div className="manager-funcionarios-area">
            <h1 className="manager-titulo">Relatórios</h1>
            <div className='agenda-data-area'>
                <input className="drop-agenda"
                    type="month" 
                    id="mesAno" 
                    name="mesAno" 
                    value={dataSelecionada} 
                    onChange={handleDateChange} 
                />
            </div>

            <div className='estoque-area'>
                <div className='bloco-agn-relatorios'>
                   <h2 className='titulo-agn-relatorio'>Agendamentos</h2>
                   <div className='filtro-relatorios'>
                        <div className='tit-filtro-relatorios'><p className='tit-filtro' >Profissional</p></div>
                        <div className='tit-filtro-relatorios'><p className='tit-filtro' style={{color:'#77D353'}}>Confirmados</p></div>
                        <div className='tit-filtro-relatorios'><p className='tit-filtro' style={{color:'#F95F62'}}>Cancelados</p></div>
                   </div>

                   <div className='dados-relatorios-area' >
                    <div className='dados-relatorios-unt'>
                        <div className='dados-agn-relatorios'>
                            <p className='tit-filtro'>Profissional 1</p>
                        </div>

                        <div className='dados-agn-relatorios'>
                            <p className='tit-filtro'>18</p>
                        </div>

                        <div className='dados-agn-relatorios'>
                            <p className='tit-filtro'>3</p>
                        </div>
                    </div>

                    <div className='dados-relatorios-unt'>
                        <div className='dados-agn-relatorios'>
                            <p className='tit-filtro'>Profissional 2</p>
                        </div>

                        <div className='dados-agn-relatorios'>
                            <p className='tit-filtro'>27</p>
                        </div>

                        <div className='dados-agn-relatorios'>
                            <p className='tit-filtro'>2</p>
                        </div>
                    </div>

                    <div className='dados-relatorios-unt'>
                        <div className='dados-agn-relatorios'>
                            <p className='tit-filtro'>Profissional 3</p>
                        </div>

                        <div className='dados-agn-relatorios'>
                            <p className='tit-filtro'>22</p>
                        </div>

                        <div className='dados-agn-relatorios'>
                            <p className='tit-filtro'>5</p>
                        </div>
                    </div>
                        
                   </div>
                
                </div>

                <div className='bloco-agn-relatorios'>
                   <h2 className='titulo-agn-relatorio'>Valores estimados por serviço</h2>
                   <div className='filtro-relatorios'>
                        <div className='tit-filtro-relatorios'><p className='tit-filtro' >Serviço</p></div>
                        <div className='tit-filtro-relatorios'><p className='tit-filtro'>Quantidade</p></div>
                        <div className='tit-filtro-relatorios'><p className='tit-filtro'>Valor</p></div>
                   </div>

                   <div className='dados-relatorios-area' >
                    <div className='dados-relatorios-unt'>
                        <div className='dados-agn-relatorios'>
                            <p className='tit-filtro'>Corte</p>
                        </div>

                        <div className='dados-agn-relatorios'>
                            <p className='tit-filtro'>37</p>
                        </div>

                        <div className='dados-agn-relatorios'>
                            <p className='tit-filtro'>R$1.110,00</p>
                        </div>
                    </div>

                    <div className='dados-relatorios-unt'>
                        <div className='dados-agn-relatorios'>
                            <p className='tit-filtro'>Corte + Barba</p>
                        </div>

                        <div className='dados-agn-relatorios'>
                            <p className='tit-filtro'>21</p>
                        </div>

                        <div className='dados-agn-relatorios'>
                            <p className='tit-filtro'>R$945,00</p>
                        </div>
                    </div>

                    <div className='dados-relatorios-unt'>
                        <div className='dados-agn-relatorios'>
                            <p className='tit-filtro'>Pézinho</p>
                        </div>

                        <div className='dados-agn-relatorios'>
                            <p className='tit-filtro'>9</p>
                        </div>

                        <div className='dados-agn-relatorios'>
                            <p className='tit-filtro'>R$135,00</p>
                        </div>
                    </div>
                        
                   </div>
                
                </div>

            </div>
        </div>
    );
};

export default ManagerReport;
