import React, { useContext,useState, useEffect } from 'react';
import { login } from '../services/auth.services' 
import UserContext from '../UserContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); 
  const { signed, setSigned, setId, setName, setSurname, acess_token, setAccessToken } = useContext(UserContext);

  const handleLogin = async () => {
    try {
      const response = await login({ email: email, password: password }); 
      if (response.acess_token) { 
        setAccessToken(response.acess_token);
        setSigned(true);
        const bearerToken = response.acess_token;
        localStorage.setItem("bearerToken", bearerToken);
        setMessage('Login realizado com sucesso!');
      } else {
        setMessage(response.message);
        console.log('Login falhou', response.message);
      }
    } catch (error) {
      
      setMessage('Erro ao fazer login. Tente novamente mais tarde.');
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <div>
      <div>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"/>
      </div>
      <div className='bodyLogin'>
        <div className='Box-login'>
          <div id="seta-para-voltar">
            <a href="/contato"><i className="bi bi-arrow-left-short" style={{ fontSize: '8rem' }}></i></a>
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
