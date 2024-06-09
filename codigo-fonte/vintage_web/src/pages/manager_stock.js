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
                            <div className='produto-unt'> 
                            <label htmlFor="editar-funcionario"><i className="bi bi-pencil-fill btn-editar-agn"></i></label>
                    <input type="checkbox" id="editar-funcionario"></input>

                    <div className='modal-editar-funcionario'>
                        <div className='modal-area'>
                            <div className='modal-cab'>
                                <p>Editar Produto</p> <label htmlFor="editar-funcionario"><i className="bi bi-x btn-fechar"></i></label>
                            </div>

                            <div className='modal-main main-produto'>
                              
                                <p>Título</p>
                                <input type='title' name='title' ></input>

                                <p>Valor</p>
                                <input type='price' name='price' ></input>

                                <p>Quantidade</p>
                                <input type='number' name='number' ></input>
                                
                            </div>

                            <div className='modal-footer'>
                                <label htmlFor="editar-funcionario"><a className='btn-cancelar-modal'>Deletar</a></label>
                                <label htmlFor="editar-funcionario"><a className='btn-confirmar-modal'>Salvar</a></label>
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
                            <p>Incluir Produto</p> <label htmlFor="incluir-funcionario"><i className="bi bi-x btn-fechar"></i></label>
                        </div>

                        <div className='modal-main main-produto'>
                              
                                <p>Título</p>
                                <input type='title' name='title' ></input>

                                <p>Valor</p>
                                <input type='price' name='price' ></input>

                                <p>Quantidade</p>
                                <input type='number' name='number' ></input>
                                
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
