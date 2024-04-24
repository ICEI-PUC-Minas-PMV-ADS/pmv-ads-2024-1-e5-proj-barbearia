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
                  <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModalCenter">
                    Incluir Funcionário
                  </button>
                </div>

                  
                  <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLongTitle">Cadastro de Funcionário</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          ...
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
                          <button type="button" class="btn btn-success">Cadastrar</button>
                        </div>
                      </div>
                    </div>
                  </div>

          </div>
      
    
    
  );
};

export default Manager;
