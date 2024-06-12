import React, { useEffect, useState } from 'react';
import apiUrl from '../services/ApiConfig';
import Swal from 'sweetalert2';

const ManagerStock = () => {
  const [products, setProducts] = useState([]);
  const [checkedIndexes, setCheckedIndexes] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    value: '',
    units: ''
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetch(`${apiUrl}/products/get-products`)
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Erro ao buscar os produtos:', error));
  };

  const handleCheckboxChange = (index) => {
    if (checkedIndexes.includes(index)) {
      setCheckedIndexes(checkedIndexes.filter(i => i !== index));
    } else {
      setCheckedIndexes([index]);
    }
  };

  const closeModal = () => {
    setShowAddModal(false);
  };

  const handleDelete = (productId) => {
    fetch(`${apiUrl}/products/delete/${productId}`, {
      method: 'DELETE'
    })
    .then(() => {
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Sucesso!",
            showConfirmButton: false,
            timer: 1500
        });
      fetchProducts();
    })
    .catch(error => {
        Swal.fire({
            title: 'Erro',
            text: 'Erro para deletar produto',
            icon: 'error',
            confirmButtonText: 'Fechar'
        });
        console.error('Erro ao cadastrar o produto:', error);
    });    
  };

  const handleAddProduct = () => {
    fetch(`${apiUrl}/products/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
    .then(response => response.json())
    .then(data => {
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Sucesso!",
            showConfirmButton: false,
            timer: 1500
        });
      fetchProducts();
      setShowAddModal(false);
      // Limpar os campos do formulário
      setNewProduct({
        name: '',
        value: '',
        units: ''
      });
    })
    .catch(error => {
        Swal.fire({
            title: 'Erro',
            text: 'Erro para cadastrar produto',
            icon: 'error',
            confirmButtonText: 'Fechar'
        });
        console.error('Erro ao cadastrar o produto:', error);
    });    
  };

  const handleSaveProduct = (productId) => {
    const updatedProduct = {
      name: document.querySelector(`input[name="name_${productId}"]`).value,
      value: document.querySelector(`input[name="value_${productId}"]`).value,
      units: document.querySelector(`input[name="units_${productId}"]`).value
    };

    fetch(`${apiUrl}/products/update/${productId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProduct),
    })
    .then(response => response.json())
    .then(data => {
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Produto atualizado com sucesso!",
            showConfirmButton: false,
            timer: 1500
        });
        fetchProducts();
        closeModal();
    })
    .catch(error => {
        Swal.fire({
            title: 'Erro',
            text: 'Erro ao atualizar o produto',
            icon: 'error',
            confirmButtonText: 'Fechar'
        });
        console.error('Erro ao atualizar o produto:', error);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="manager-funcionarios-area">
      <h1 className="manager-titulo">Gerenciar Estoque</h1>
      <div className='botao-area-employee'>
        <label htmlFor="incluir-produto" className="btn-incluir" onClick={() => setShowAddModal(true)}> + </label>
        <input type="checkbox" id="incluir-produto"></input>
        <div className='modal-incluir-funcionario' style={{ display: showAddModal ? 'block' : 'none' }}>
          <div className='modal-area'>
            <div className='modal-cab'>
              <p>Incluir Produto</p>
              <label htmlFor="incluir-produto" onClick={closeModal}>
                <i className="bi bi-x btn-fechar"></i>
              </label>
            </div>
            <div className='modal-main main-produto'>
              <p>Nome</p>
              <input type='text' name='name' value={newProduct.name} onChange={handleChange}></input>
              <p>Valor</p>
              <input type='number' name='value' value={newProduct.value} onChange={handleChange}></input>
              <p>Quantidade</p>
              <input type='number' name='units' value={newProduct.units} onChange={handleChange}></input>
            </div>
            <div className='modal-footer'>
              <label htmlFor="incluir-produto" onClick={closeModal}>
                <a className='btn-cancelar-modal'>Cancelar</a>
              </label>
              <label htmlFor="incluir-produto">
                <a className='btn-confirmar-modal' onClick={handleAddProduct}>Confirmar</a>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className='estoque-area'>
        <div className='estoque-filtro'>
          <div className='filtro-unt'><p>Produto</p></div>
          <div className='filtro-unt'><p>Valor</p></div>
          <div className='filtro-unt'><p>Quantidade</p></div>
          <div className='filtro-unt'><p>Editar</p></div>
        </div>
        <div className='produtos-estoque-area'>
        {products.map((product, index) => (
        <div className='produto-estoque' key={product.id}>
          <div className='produto-unt'><p>{product.name}</p></div>
          <div className='produto-unt'><p>R${product.value}</p></div>
          <div className='produto-unt'><p>{product.units}</p></div>
          <div className='produto-unt'>
            <label htmlFor={`alterar-agendamento-${index}`}>
              <i className="bi bi-pencil-fill btn-editar-agn"></i>
            </label>
            <input type="checkbox" id={`alterar-agendamento-${index}`} onChange={() => handleCheckboxChange(index)} checked={checkedIndexes.includes(index)} style={{ display: 'none' }} />
            <div className='modal-alterar-agendamento' style={{ display: checkedIndexes.includes(index) ? 'block' : 'none' }}>
              <div className='modal-area'>
                <div className='modal-cab'>
                  <p>Editar Produto</p>
                  <label htmlFor={`alterar-agendamento-${index}`} onClick={() => closeModal()}>
                    <i className="bi bi-x btn-fechar"></i>
                  </label>
                </div>
                <div className='modal-main main-produto'>
                  <p>Nome</p>
                  <input type='text' name={`name_${product.id}`} defaultValue={product.name}></input>
                  <p>Valor</p>
                  <input type='number' name={`value_${product.id}`} defaultValue={product.value}></input>
                  <p>Quantidade</p>
                  <input type='number' name={`units_${product.id}`} defaultValue={product.units}></input>
                </div>
                <div className='modal-footer'>
                  <label htmlFor={`alterar-agendamento-${index}`} onClick={() => closeModal()}>
                    <a className='btn-cancelar-modal' onClick={() => handleDelete(product.id)}>Excluir</a>
                  </label>
                  <label htmlFor={`alterar-agendamento-${index}`} onClick={() => handleSaveProduct(product.id)}>
                    <a className='btn-confirmar-modal'>Salvar</a>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
        </div>
      </div>
    </div>
  );
};

export default ManagerStock;
