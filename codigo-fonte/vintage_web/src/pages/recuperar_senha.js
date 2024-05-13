import React, { useContext,useState, useEffect } from 'react';
import apiUrl from '../services/ApiConfig';
import axios from 'axios';
import Swal from 'sweetalert2';

const RecuperarSenha = () => {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [sendNewPassowrd, setSendNewPassowrd] = useState(false);
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${apiUrl}/recovery/password`, { email });
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Token enviado!',
        showConfirmButton: false,
        timer: 1500
      });
    setShowTokenInput(true);
    setEmailSent(true);
    } catch (error) {
      Swal.fire({
        title: 'Erro',
        text: error,
        icon: 'error',
        confirmButtonText: 'Fechar'
      });
    }
  };

  const validateToken = async () => {
    try {
      const response = await axios.post(`${apiUrl}/recovery/check-token`, { email, token });
      console.log(response.data);
      if(response.data.status == 'Sucesso') {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Token válido!',
          showConfirmButton: false,
          timer: 1500
        });
      setShowPasswordInput(true)
      setEmailSent(false)
      } else {
        Swal.fire({
          title: 'Erro',
          text: 'Não possui conta para este e-mail ou o token não é válido',
          icon: 'error',
          confirmButtonText: 'Fechar'
        });
      }
      
    } catch (error) {
      Swal.fire({
        title: 'Erro',
        text: 'Não possui conta para este e-mail ou o token não é válido',
        icon: 'error',
        confirmButtonText: 'Fechar'
      });
    }
  };

  const changePassword = async () => {
    const response = await axios.post(`${apiUrl}/recovery/new-password`, { email, password, password_confirmation });
    
    if(response.data.message === 'sucesso') {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Senha alterada com sucesso!',
        showConfirmButton: false,
        timer: 1500
      });
      setTimeout(() => {
        window.location.href = '/login';
      }, 1500);
    }
    else {
      Swal.fire({
        title: 'Erro',
        text: response.data.message,
        icon: 'error',
        confirmButtonText: 'Fechar'
      });
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
            <a href="/login"><i className="bi bi-arrow-left-short" style={{ fontSize: '3rem' }}></i></a>
          </div>
          <div className='box-login-logo'>
            <img className='logo-login' src="/imagens/logo.png" alt="logomarca vintage barbearia"/>
          </div>
          <p style={{fontWeight:'bold', color:'#343F4B'}}>Esqueci minha senha</p>
          <p style={{ color: '#343F4B', marginTop: '20px', width: '100%;', textAlign: 'center' }}>Insira seu e-mail utilizado no cadastro para que possamos enviar um código de recuperação</p>
          <div className='Input-login-area'>
            <input style={{ marginTop: '5%' }} className='Input-login' type="text" value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder='E-mail'></input>
            {showTokenInput && (
              <input 
                type="text" 
                value={token} 
                onChange={(e) => setToken(e.target.value)} 
                placeholder="Informe o token recebido"
                className='Input-login'
              />
            )}
            {showPasswordInput && (
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Informe a nova senha"
                className='Input-login'
              />
            )}
            {showPasswordInput && (
              <input 
                  type="password" 
                  value={password_confirmation} 
                  onChange={(e) => setPasswordConfirmation(e.target.value)} 
                  placeholder="Confirme a nova senha"
                  className='Input-login'
              />
            )}
            <button 
              style={{ marginTop: '10%' }} 
              className='Botao-Login' 
              onClick={() => {
                if (emailSent) {
                  validateToken();
                } else if (showPasswordInput) {
                  changePassword();
                } else {
                  handleLogin();
                }
              }}
            >
              {emailSent ? 'Validar' : 'Enviar'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecuperarSenha;