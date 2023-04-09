import { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import Card from "../../../components/Card";
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Footer from '../../../components/Footer';

import { Wrapper, Background, InputContainer, ButtonContainer } from './style';
import background from '../../../assets/images/background-login.png';
import logo from '../../../assets/images/logo.png';
import { updateUser } from '../../../services/resources/usuarios';

const UpdateUsuario = () => {

  const location  = useLocation();
  const {state} = location;

  const [nome, setname] = useState(state.nome);
  const [sobrenome, setLastname] = useState(state.sobrenome);
  const [username, setUsername] = useState(state.username);
  const [cpf, setCpf] = useState(state.cpf);
  const [email, setEmail] = useState(state.email);
  const [password, setPassword] = useState(state.password);
  const [dtNascimento, setDtNascimento] = useState(state.dtNascimento);
  const [perfis, setPerfis] = useState(state.perfis);

  const navigate = useNavigate();

  const handleToUpdate = async () => {
    const usuarioUpdate = {
      username: username,
      nome: nome,
      sobrenome: sobrenome,
      email: email,
      password: password,
      cpf: cpf,
      perfis: perfis,
      dtNascimento: dtNascimento,
    }

    const {data} = await updateUser(state.usuarioId, usuarioUpdate);
    console.log("Usuario atualizado: ", data);
    
    navigate('/usuarios');
  }

  return (
      <>
        <Wrapper>
          <Background image={background}/>
          <Card width='300px' height='auto' noShadow borderRadius='0px'>
            <Wrapper>
                  <InputContainer>
                      <h3>{state.usuarioId}</h3>
                      <Input placeholder={nome} value={nome} onChange={e => setname(e.target.value)} />
                      <Input placeholder={sobrenome} value={sobrenome} onChange={e => setLastname(e.target.value)} />
                      <Input placeholder={cpf} value={cpf} onChange={e => setCpf(e.target.value)} />
                      <Input placeholder={email}  value={email} onChange={e => setEmail(e.target.value)} />
                      <Input placeholder={username} value={username} onChange={e => setUsername(e.target.value)} />
                      <Input placeholder={password} value={password} onChange={e => setPassword(e.target.value)} disabled />
                      <Input placeholder={dtNascimento} value={dtNascimento} onChange={e => setDtNascimento(e.target.value)} disabled />
                      <Input placeholder={perfis} value={perfis} onChange={e => setPerfis(e.target.value)} disabled />
                      <img src={logo} width={160} height={61} alt="logo" />
                  </InputContainer>
            </Wrapper>
          </Card>
        </Wrapper>
        <Wrapper>
          <ButtonContainer>
              <Button type="button" onClick={handleToUpdate}>Atualizar</Button>
              <p> Deseja cancelar a operação? <Link to="/usuarios">Retorne para a lista</Link></p>
          </ButtonContainer>
        </Wrapper>
        <Footer />
    </>
  );
}

export default UpdateUsuario;