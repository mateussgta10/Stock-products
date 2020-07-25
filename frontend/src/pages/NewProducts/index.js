import React, {useState} from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { Container, Content, Form } from './styles';


import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api';

export default function NewProducts() {
  const [ name, setName ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ value, setValue ] = useState('');
  const [ quantity, setQuantity ] = useState('');

  const companyId = localStorage.getItem('companyId');

  const history = useHistory();
  
  async function handleNewProduct(e) {
    e.preventDefault();

    const data = {
      name,
      description,
      value,
      quantity
    };

    try {
      await api.post('products', data, {
        headers: {
          Authorization: companyId,
        }
      })

      history.push('/profile');
    } catch (err) {
      alert('Erro ao cadastrar caso, tente novamente.')
    }
  } 

  return (
    <Container>
      <Content>
        <section>
          <div>Logo</div>

          <h1>Cadastro novo produto</h1>

          <p>Descreva o seu produto.</p>

          <Link to="/profile">
            <FiArrowLeft size={16} color="#6159E6"/>
              Volta home
          </Link>
        </section>

        <Form onSubmit={handleNewProduct}>
          <input 
            placeholder="Nome do produto"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <textarea 
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input 
            placeholder="Valor"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <input 
            placeholder="Quantidade"
            value={quantity}
            onChange={e => setQuantity(e.target.value)}
          />

      

          <button type="submit" className="button">Cadastrar</button>
        </Form>
      </Content>
    </Container>
  )
}