import React, { useState, useEffect } from 'react';
import { login } from '../services/auth.services';
import { useUser } from '../UserContext';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const { signed, id, name, surname, setSigned, setId, setName, setSurname, setEmail: setUserEmail, setAccessToken} = useUser();

  useEffect(() => {
    const bearerToken = localStorage.getItem('bearerToken');
    if (bearerToken) {
      const id = localStorage.getItem('Id');
      const name = localStorage.getItem('name');
      const surname = localStorage.getItem('surname');
      const email = localStorage.getItem('email');

      setSigned(true);
      setId(id);
      setName(name);
      setSurname(surname);
      setEmail(email);
      setAccessToken(bearerToken);
    }
  }, [setSigned, setId, setName, setSurname, setEmail, setAccessToken]);

  

  const handleLogin = async () => {
    try {
      const response = await login({ email: email, password: password });
      console.log(response);
      if (response.acess_token) {
        setSigned(true);
        setId(response.data.id);
        setName(response.data.name);
        setSurname(response.data.surname);
        setUserEmail(response.data.email);
        const bearerToken = response.acess_token;
        localStorage.setItem("bearerToken", bearerToken);
        localStorage.setItem("Id", response.data.id);
        localStorage.setItem("name", response.data.name);
        localStorage.setItem("surname", response.data.surname);
        localStorage.setItem("email", response.data.email);
      } else {
        setMessage(response.message);
        console.log('Login falhou', response.message);
      }
    } catch (error) {
      setMessage('Erro ao fazer login. Tente novamente mais tarde.');
      console.error('Erro ao fazer login:', error);
    }
  };

  if (signed) {
    return <Navigate to="/plataforma"/>;
  }

 
  return (
    <div>
      <div>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"/>
      </div>
      <div className='bodyLogin'>
        <div className='Box-login'>
          <div id="seta-para-voltar">
            <a href="/"><i className="bi bi-arrow-left-short" style={{ fontSize: '3rem' }}></i></a>
          </div>
          <div className='box-login-logo'>
            <img className='logo-login' src="/imagens/logo.png" alt="logomarca vintage barbearia"/>
          </div>
          <p style={{fontWeight:'bold', color:'#343F4B'}}> Insira suas credenciais de acesso</p>
          <div className='Input-login-area'>
            <input className='Input-login' type="text" value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder='E-mail'></input>
            <input className='Input-login' type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" placeholder='Senha'></input>
            <a href='/recuperar_senha'>
              <p style={{color:'#C4A674', border: 'none', fontSize:'13px', fontWeight:'bold', marginTop:'20px', marginBottom:'20px' }}>Esqueci Minha Senha</p>
            </a>
            <button className='Botao-Login' onClick={handleLogin}>Entrar</button> 
            <p>{message} </p> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
