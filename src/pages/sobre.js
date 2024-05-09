import React from 'react';
import Rodape from './rodape';
import Cabecalho from './cabecalho';

const Sobre = () => {
  return (
    <div>
      <Cabecalho/>
      <div className="sobreConteudo">

        <div className="sobreDb1">
          <div className="sobreLd1">
            <h1 className="sobreTitulo"> QUEM SOMOS </h1>
            <p className="sobreTexto">
              Bem-vindos à Barbearia Vintage, o point dos cortes do momento em BH! Estamos na Rua Joaquim Teixeira dos
              Anjos, 299, no Bairro Taquaril, desde 2017 trazendo o melhor para nossos clientes.<br></br> <br></br>

              Comandada pelo Victor Hugo, a Barbearia Vintage é onde a magia acontece. Nossos profissionais estão prontos
              para te deixar no estilo e dar aquele up no seu visual!<br></br><br></br>

              Vem com a gente e descubra por que somos umas das barbearias preferidas da região.<br></br><br></br>

              Esperamos você!
            </p>
          </div>
          <div className="sobreLd2">
        
          </div>
        </div>
        <div className="sobreDb2">
        </div>

      </div>
      <Rodape/>
    </div>
    
  );
};

export default Sobre;