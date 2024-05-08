import React, { useEffect, useState } from 'react';
import axios from 'axios';
import apiUrl from '../services/ApiConfig';


const Manager = () => {
  
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

  return (
    
    
        
          <div className="manager-funcionarios-area">
           
            <h1 className="manager-titulo">Gerenciar funcionarios</h1>
            {data && data.map(item => (
            <div className="opc-funcionario-manager" key={item.id}>
              <p>{item.name} {item.surname}</p>
              <a href="#"><i className="bi bi-pencil-square"></i></a>
            </div>
            ))}
                <div className='botao-area-employee'>
                  <label for="incluir-funcionario" class="btn-incluir">
                    Incluir Funcionário
                  </label>
                  <input type="checkbox" id="incluir-funcionario"></input>

                  <div className='modal-incluir-funcionario'>
                    <div className='modal-area'>
                      <div className='modal-cab'>
                      <p>Incluir Funcionário</p> <label for="incluir-funcionario"><i class="bi bi-x btn-fechar"></i></label>
                      </div>
                        
                       <div className='modal-main'>
                        <p>Nome</p>
                        <input type='name' name='name'></input>

                        <p>Sobrenome</p>
                        <input type='surname' name='surname'></input>

                        <p>E-mail</p>
                        <input type='email' name='email'></input>

                        <p>Defina uma senha</p>
                        <input type='password' name='password'></input>
                        </div> 

                        <div className='modal-footer'>
                        <label for="incluir-funcionario"><a className='btn-cancelar-modal'>Cancelar</a></label>
                        <label for="incluir-funcionario"><a className='btn-confirmar-modal'>Confirmar</a></label>
                        </div>
                      
                      
                    </div>
                  </div>

                </div>

          </div>
      
    
    
  );
};

export default Manager;
