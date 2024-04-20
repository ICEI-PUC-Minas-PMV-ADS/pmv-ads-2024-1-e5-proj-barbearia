import React from 'react';

const Rodape = () => {
  return (
    <footer className="rodapeTotal" >

      <div className="rodapeConteudo">
        <img className='rodapeLogo' src="/imagens/logo.png" alt="logomarca vintage barbearia" />
        <a href="/homepage"></a>
      </div>

      <div className="rodapeTexto1">

        <p> <a href="/agendamento" className="agendBotao">Agendamentos</a> </p>
        <p> <a href="/sobre" className="sobreBotao">Quem somos</a> </p>
        <p> <a href="/contato" className="contatoBotao">Contato</a> </p>
        <p> <a href="/" className="servicosBotao">Serviços</a> </p>
      </div>

      <div className="rodapeTexto2">

        <p> Acompanhe nossas <br></br> redes Sociais</p>

        <img className='rodapeIcon' src="/imagens/insta-icon.png" alt="instagram" />
        <img className='rodapeIcon' src="/imagens/ytb-icon.png" alt="youtube" />
        <img className='rodapeIcon' src="/imagens/face-icon.png" alt="facebook" />

      </div>

      <div className="rodapeTexto3">

        <h1 className='rodapeTitulo'> Endereço </h1>
        <p> Rua Joaquim Teixeira dos Anjos 299<br></br> Bairro Taquaril<br></br> Belo Horizonte-MG </p>

      </div>

      <div className="rodapeTexto4">

        <h1 className='rodapeTitulo2'> Aceitamos </h1>

        <img className='rodapeIcon2' src="/imagens/cartao-icon.png" alt="cartao" />
        <img className='rodapeIcon3' src="/imagens/pix-icon.png" alt="pix" />

      </div>

    </footer>
  );
};

export default Rodape;