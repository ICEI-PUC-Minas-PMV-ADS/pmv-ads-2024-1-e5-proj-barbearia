import React from 'react';
import Rodape from './rodape';
import Cabecalho from './cabecalho';

const Homepage = () => {
    return (
        <div>
            <Cabecalho />
            <div className="hpConteudo">
                <div className="hpArea1">
                    <div className="hpArea1a">
                        <h1 className='hpTexto'>Confira nossos serviços <br></br> e agende um horário!</h1>
                        <a href="/agendamento" className="hpBotao">Agende seu horário!</a>
                    </div>
                    <div className="hpArea1b">

                    </div>

                </div>

                <div className="hpAreaExtra">
                    <p className='hpTexto2'>VOCÊ ENCONTRA AQUI</p>
                </div>

                <div className="hpArea2">
                    <img src="/imagens/locao.png" alt="Loção pós barba" className="image" />
                    <img src="/imagens/pomada.png" alt="Pomada modeladora" className="image" />
                    <img src="/imagens/minoxidil.png" alt="Minoxidil" className="image" />
                    <img src="/imagens/shampoo.png" alt="Shampoo p/ cabelo e barba" className="image" />
                </div>

                <div className="hpAreaExtra2">
                    <h1 className="textoProd"> LOÇÃO PÓS BARBA</h1>
                    <h1 className="textoProd"> POMADA<br></br>MODELADORA</h1>
                    <h1 className="textoProd"> MINOXIDIL</h1>
                    <h1 className="textoProd"> SHAMPOO P/<br></br>CABELO E BARBA</h1>

                </div>

                <div className="hpArea3">

                </div>


            </div>
            <Rodape />
        </div>

    );
};

export default Homepage;