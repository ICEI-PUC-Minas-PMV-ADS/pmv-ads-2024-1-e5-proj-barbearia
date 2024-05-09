import axios from 'axios';
import apiUrl from './ApiConfig';

export const login = async (param) => {

  console.log(param);

  try {
    const response = await axios.post(`${apiUrl}/login`, param);
    const user = response.data;
    return user;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data || 'Erro ao realizar a requisição.';
    } else {
      return 'Ocorreu um erro ao realizar a requisição.';
    }
  }
};

export const GetDadosUser = async (param) => {

  console.log(param);

  try {
    const response = await axios.get(`${apiUrl}/manager/employee`);
    const user = response.data;
    return user;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data || 'Erro ao realizar a requisição.';
    } else {
      return 'Ocorreu um erro ao realizar a requisição.';
    }
  }
};
