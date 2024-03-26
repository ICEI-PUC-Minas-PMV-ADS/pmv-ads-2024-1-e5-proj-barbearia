import React from 'react';

const Login = () => {
  return (

    <div className='bodyLogin'>
        
        <div className='Box-login'>

            <div className='box-login-logo'>
            <img className='logo-login' src="/imagens/logo.png" alt="logomarca vintage barbearia"/>
            </div>

            <p style={{fontWeight:'bold', color:'#343F4B'}}> Insira suas credenciais de acesso</p>

            <div className='Input-login-area'>
                <input className='Input-login' type="text" id="meuInput" name="nome" placeholder='E-mail'></input>
                <input className='Input-login' type="password" id="meuInput" name="password" placeholder='Senha'></input>

                <a href=''>
                    <p style={{color:'#C4A674', border: 'none', fontSize:'13px', fontWeight:'bold', marginTop:'20px', marginBottom:'20px' }}>Esqueci Minha Senha</p>
                </a>

                <button className='Botao-Login'>Entrar</button>
            </div>



        </div>

    </div>
    
  );
};

export default Login;