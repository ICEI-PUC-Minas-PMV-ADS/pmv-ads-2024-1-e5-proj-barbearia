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
                        <img src="/imagens/corteHp.png" alt="cortes" className="corteHp" />
                    </div>

                </div>

                <div className="hpAreaExtra">
                    <p className='hpTexto2'>VOCÊ ENCONTRA AQUI</p>
                </div>

                <div className="hpArea2">
                    <div className="prod1">
                        <img src="/imagens/locao.png" alt="Loção pós barba" className="product-image" />
                        <p className="textoProd"> LOÇÃO PÓS BARBA</p>
                    </div>

                    <div className="prod1">
                        <img src="/imagens/gel-tiger.png" alt="Gel p/ cabelo" className="product-image" />
                        <p className="textoProd"> GEL P/ CABELO</p>
                    </div>

                    <div className="prod1">
                        <img src="/imagens/minoxidil.png" alt="Minoxidil" className="product-image" />
                        <p className="textoProd"> MINOXIDIL</p>
                    </div>

                    <div className="prod1">
                        <img src="/imagens/shampoo.png" alt="Shampoo p/ cabelo e barba" className="product-image" />
                        <p className="textoProd"> SHAMPOO P/<br></br>CABELO E BARBA</p>
                    </div>
                </div>

                <div className="hpArea3">
                    <div className='areaTexto3'>
                        <p className='textoRoupas'>TAMBÉM TEMOS UM VESTUÁRIO <br></br> DIVERSO DE ROUPAS, <br></br>
                            VENHA CONFERIR EM NOSSA BARBEARIA! </p>
                    </div>
                    <div className='prod2'>
                        <img src="/imagens/hpBermudas.png" alt="Bermudas" className="product-image2" />
                    </div>
                </div>
            </div>
            <Rodape />
        </div>

    );
};

export default Homepage;