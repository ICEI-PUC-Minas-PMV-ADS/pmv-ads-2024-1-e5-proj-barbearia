import React, { useEffect, useState } from 'react';
import axios from 'axios';
import apiUrl from '../services/ApiConfig';
import Swal from 'sweetalert2';

function Dropdown({ folgaSelecionada, setFolgaSelecionada, isOpen, setIsOpen, folgas, handlefolgaClick }) {
    return (
        <div className="dropdown">
            <button onClick={() => setIsOpen(!isOpen)} className="btn-dropdown">{folgaSelecionada} <i className="bi bi-arrow-down-short"></i></button>
            {isOpen && (
                <div className="dropdown-folga">
                    {folgas.map((folga) => (
                        <a key={folga} href="#" onClick={() => handlefolgaClick(folga)}>
                            {folga}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}

const Manager = () => {
    const [data, setData] = useState(null);
    const [folgaSelecionada, setFolgaSelecionada] = useState('Nenhum');
    const [isOpen, setIsOpen] = useState(false);
    
    const [newEmployee, setNewEmployee] = useState({
        name: '',
        surname: '',
        email: '',
        password: ''
    });
    const [updateDataEmployee, setUpdateDataEmployee] = useState({
        name: '',
        surname: '',
        email: '',
        day_off: '',
    });

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

    useEffect(() => {
        fetchData();
    }, []);

    const folgas = ['Nenhum', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

    const handlefolgaClick = (folga) => {
        setFolgaSelecionada(folga);
        setIsOpen(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEmployee({
            ...newEmployee,
            [name]: value
        });
    };

    const handleRegister = async () => {
        try {
            const response = await axios.post(`${apiUrl}/register`, newEmployee);
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Sucesso!",
                showConfirmButton: false,
                timer: 1500
            });
            setTimeout(() => {
                fetchData();
            }, 1500);
        } catch (error) {
            Swal.fire({
                title: 'Erro',
                text: error.response.data.message,
                icon: 'error',
                confirmButtonText: 'Fechar'
            });
        }
    };

    const updateUser = (e) => {
        const { name, value } = e.target;
        setUpdateDataEmployee({
            ...updateDataEmployee,
            [name]: value
        });
    };

    const updateEmployee = async () => {
        try {
            const response = await axios.post(`${apiUrl}/manager/employee/update/11`, updateDataEmployee);
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Sucesso!",
                showConfirmButton: false,
                timer: 1500
            });
            setTimeout(() => {
                fetchData();
            }, 1500);
        } catch (error) {
            Swal.fire({
                title: 'Erro',
                text: error.response.data.message,
                icon: 'error',
                confirmButtonText: 'Fechar'
            });
        }
    };

    const disableEmployee = async (employeeId) => {
        try {
            const token = localStorage.getItem('bearerToken');
            const response = await axios.patch(
                `${apiUrl}/manager/employee/disable/${employeeId}`, 
                null,
                {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                }
            );
            console.log(response.data);
            fetchData();
        } catch (error) {
            Swal.fire({
                title: 'Erro',
                text: error.response.data.message,
                icon: 'error',
                confirmButtonText: 'Fechar'
            });
        }
    };

    return (
        <div className="manager-funcionarios-area">
            <h1 className="manager-titulo">Gerenciar funcionarios</h1>

            <div className='manager-employer-area'>
            {data && data.map(item => (
    <div className="opc-funcionario-manager" key={item.id}>
        <p className='texto-lista-funcionario'>{item.name} {item.surname}</p>
        <label htmlFor="editar-funcionario"><i className="bi bi-pencil-square btn-editar-funcionario"></i></label>
        <input type="checkbox" id="editar-funcionario"></input>

        <div className='modal-editar-funcionario'>
            <div className='modal-area'>
                <div className='modal-cab'>
                    <p>Editar Funcionário</p> <label htmlFor="editar-funcionario"><i className="bi bi-x btn-fechar"></i></label>
                </div>

                <div className='modal-main'>
                    <div className='status-area'> 
                        <p>Status: Ativo</p>
                    </div> 
                    <p>Nome</p>
                    <input type='name' name='name' value={item.name}></input>

                    <p>Sobrenome</p>
                    <input type='surname' name='surname' value={item.surname}></input>

                    <p>E-mail</p>
                    <input type='email' name='email' value={item.email}></input>

                    <p>Folga</p>
                    <Dropdown
                        folgaSelecionada={folgaSelecionada}
                        setFolgaSelecionada={setFolgaSelecionada}
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        folgas={folgas}
                        handlefolgaClick={handlefolgaClick}
                    />
                </div>

                <div className='modal-footer'>
                    <label htmlFor="editar-funcionario"><a className='btn-cancelar-modal' onClick={() => disableEmployee(item.id)}>Inativar</a></label>
                    <label htmlFor="editar-funcionario"><a className='btn-confirmar-modal' onClick={updateEmployee}>Salvar</a></label>
                </div>
            </div>
        </div>
    </div>
))}

                <div className='botao-area-employee'>
                    <label htmlFor="incluir-funcionario" className="btn-incluir">
                        +
                    </label>
                    <input type="checkbox" id="incluir-funcionario"></input>

                    <div className='modal-incluir-funcionario'>
                        <div className='modal-area'>
                            <div className='modal-cab'>
                                <p>Incluir Funcionário</p> <label htmlFor="incluir-funcionario"><i className="bi bi-x btn-fechar"></i></label>
                            </div>

                            <div className='modal-main'>
                                <p>Nome</p>
                                <input type='name' name='name' value={newEmployee.name} onChange={handleInputChange}></input>

                                <p>Sobrenome</p>
                                <input type='surname' name='surname' value={newEmployee.surname} onChange={handleInputChange}></input>

                                <p>E-mail</p>
                                <input type='email' name='email' value={newEmployee.email} onChange={handleInputChange}></input>

                                <p>Defina uma senha</p>
                                <input type='password' name='password' value={newEmployee.password} onChange={handleInputChange}></input>
                            </div>

                            <div className='modal-footer'>
                                <label htmlFor="incluir-funcionario"><a className='btn-cancelar-modal'>Cancelar</a></label>
                                <label htmlFor="incluir-funcionario"><a className='btn-confirmar-modal' onClick={handleRegister}>Confirmar</a></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Manager;
