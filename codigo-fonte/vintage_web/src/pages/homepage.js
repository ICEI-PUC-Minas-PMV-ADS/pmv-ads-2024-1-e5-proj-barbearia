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
                    </div>
                    <div className="hpArea1b">

                    </div>

                </div>

                <div className="hpAreaExtra">
                    <p className='hpTexto2'>VOCÊ ENCONTRA AQUI</p>
                </div>

                <div className="hpArea2">

                </div>

                <div className="hpArea3">

                </div>


            </div>
            <Rodape />
        </div>

    );
};

export default Homepage;