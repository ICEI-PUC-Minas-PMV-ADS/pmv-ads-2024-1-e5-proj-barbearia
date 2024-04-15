import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar';
import Cabecalho_backoffice from './cabecalho_backoffice';
import '../manager_employee.css';
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
    <div>
        <div>
            <Cabecalho_backoffice/>
        </div>
        <div>
            <Sidebar />
        </div>
        <div>
          <div class="card">
            <h1 class="title_page">Gerenciar funcionarios</h1>
            {data && data.map(item => (
            <div id="showEmployee" key={item.id}>
              <h2 id="content_page">{item.name}</h2>
              <a href="#" id="icon"><i className="bi bi-book-half"></i></a>
            </div>
            ))}
          </div>
      </div>
    </div>
    
  );
};

export default Manager;
