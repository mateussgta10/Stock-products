import React, {useState} from 'react'
import { FiLogIn } from 'react-icons/fi'
import { Container, Form } from './styles';
import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api';

import backImg from '../../assets/back.png'

export default function SignIn() {
  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin (e) {
    e.preventDefault();

    try {
      const response = await api.post('sessions', { id });

      localStorage.setItem('companyId', id);
      localStorage.setItem( 'companyName', response.data.name);

      history.push('/profile');
    } catch (err) {
      alert('Falha no login, tente novamente')
    }
  }

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <div>Seja bem vindo!</div>

        <form>
          <h1>Faça seu login</h1>

          <input 
            placeholder="Seu ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />

          <button className="button" type="submit">Entrar</button>

          <Link to="/signup">
            <FiLogIn size={16} color="#F0F0FF"/>
            Não tenho cadastro
          </Link>
        </form>
      </Form>

      <img src={backImg} alt="Back"/>
    </Container>
  )
}