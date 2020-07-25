import React, { useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { Container, Content, Form } from './styles';
import api from '../../services/api';

import { Link, useHistory } from 'react-router-dom'

export default function SignIn() {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ whatsapp, setWhatsapp ] = useState('');
  const [ city, setCity ] = useState('');
  const [ uf, setUf ] = useState('');

  const history = useHistory();

  async function handleSignUp(e) {
    e.preventDefault();

    const data = ({
      name,
      email,
      whatsapp,
      city,
      uf
    });

    try {
      const response =  await api.post('companies', data);

      alert(`Seu id é ${response.data.id}`)

      history.push('/');
    } catch (err) {
      alert('Error no cadastro, tente novamente')
    }
  }

  return (
    <Container>
      <Content>
        <section>
          {/* <div>Logo</div> */}

          <h1>Cadastro</h1>

          <p>Faça seu cadastro</p>

          <Link to="/">
            <FiArrowLeft size={16} color="#6159E6"/>
              Volta para login
          </Link>
        </section>

        <Form onSubmit={handleSignUp}>
          <input 
            placeholder="Nome da empresa"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input 
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input 
            placeholder="Whatsapp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />

          <div>
            <input
              placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input 
              placeholder="UF" 
              value={uf}
              onChange={e => setUf(e.target.value)}
              style={{width: 80}}
            />
          </div>

          <button type="submit" className="button">Cadastrar</button>
        </Form>
      </Content>
    </Container>
  )
}