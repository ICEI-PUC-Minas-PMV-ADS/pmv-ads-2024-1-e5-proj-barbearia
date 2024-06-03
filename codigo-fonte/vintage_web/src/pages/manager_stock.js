import React, { useEffect, useState } from 'react';




const ManagerStock= () => {
    

    return (
        <div className="manager-funcionarios-area">
            <h1 className="manager-titulo">Gerenciar Estoque</h1>

            <div className='estoque-area'>

                    <div className='estoque-filtro'>
                        <div className='filtro-unt'><p>Produto</p></div>
                        <div className='filtro-unt'><p>Valor</p></div>
                        <div className='filtro-unt'><p>Quantidade</p></div>
                        <div className='filtro-unt'><p>Editar</p></div>
                    </div>

                    <div className='produtos-estoque-area'>
                        <div className='produto-estoque'>
                            <div className='produto-unt'> <p>Produto 1</p></div>
                            <div className='produto-unt'> <p>R$18,00</p></div>
                            <div className='produto-unt'> <p>14</p></div>
                            <div className='produto-unt'> <label htmlFor="alterar-agendamento" >
                <i className="bi bi-pencil-fill btn-editar-agn"></i></label>
                <input type="checkbox" id="alterar-agendamento"></input>
                <div className='modal-alterar-agendamento'>
                    <div className='modal-area-agn'>
                            <div className='modal-cab-agn'>
                            <p>Deseja cancelar o agendamento?</p> 
                            </div>

    
                        <div className='modal-foo-agn'>
                            <label htmlFor="alterar-agendamento"><a className='btn-cancelar-modal'>Cancelar</a></label>
                            <label htmlFor="alterar-agendamento"><a className='btn-confirmar-modal'>Confirmar</a></label>
                        </div>

                        
                    </div>
                </div>
                </div>
                        </div>

                        <div className='botao-area-employee'>
                <label htmlFor="incluir-funcionario" className="btn-incluir">
                        +
                </label>
                <input type="checkbox" id="incluir-funcionario"></input>

                <div className='modal-incluir-funcionario'>
                    <div className='modal-area'>
                        <div className='modal-cab'>
                            <p>Incluir Funcionário</p> <label htmlFor="incluir-funcionario"><i className="bi bi-x btn-fechar"></i></label>
                        </div>

                        <div className='modal-main'>
                            <p>Nome</p>
                            <input type='name' name='name'></input>

                            <p>Sobrenome</p>
                            <input type='surname' name='surname'></input>

                            <p>E-mail</p>
                            <input type='email' name='email'></input>

                            <p>Defina uma senha</p>
                            <input type='password' name='password'></input>
                        </div>

                        <div className='modal-footer'>
                            <label htmlFor="incluir-funcionario"><a className='btn-cancelar-modal'>Cancelar</a></label>
                            <label htmlFor="incluir-funcionario"><a className='btn-confirmar-modal'>Confirmar</a></label>
                        </div>
                    </div>
                </div>
            </div>
                    </div>
            
            
            </div>
           
        </div>
    );
};

export default ManagerStock;
