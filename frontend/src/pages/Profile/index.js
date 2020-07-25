import React, { useState, useEffect } from 'react'
import { FiPower, FiTrash2 } from 'react-icons/fi'
import { Container } from './styles';
import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api';

export default function SignIn() {
  const [products, setProducts] = useState([]);

  const companyId = localStorage.getItem('companyId');
  const companyName = localStorage.getItem('companyName');

  const history = useHistory();

  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: companyId
      }
    }).then(response => {
      setProducts(response.data);
    })
  }, [companyId])

  async function handleDeleteProduct(id) {
    try {
      await api.delete(`products/${id}`, {
        headers: {
          Authorization: companyId,
        }
      });

      setProducts(products.filter(product => product.id !== id))
    } catch(err) {
      alert('Erro ao deletar caso, tente novamente!')
    }
  }

  function handlLogout() {
    localStorage.clear();

    history.push('/');
  }

  return (
    <Container>
      <header>
        <span>Bem vindo! {companyName} </span>

        <Link className="button" to="/products/new">
          Cadastrar novo produto
        </Link>

        <button onClick={handlLogout} type="button">
          <FiPower size={18} color="#6159E6"/>
        </button>
      </header>

      <h1>Produtos cadastrados</h1>

      <ul>
        {products.map(product => (
          <li key={product.id}>
            <strong>Produto:</strong>
            <p>{product.name}</p>

            <strong>Descrição</strong>
            <p>{product.description}</p>

            <strong>Valor</strong>
            <p>{Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL'}).format(product.value)}</p>

            <strong>Quantidade</strong>
            <p>{product.quantity}</p>

            <button onClick={() => {handleDeleteProduct(product.id)}} type="button">
              <FiTrash2 size={20} color="#a8a8b3"/>
            </button>
          </li>
        ))}
      </ul>


    </Container>
  )
}