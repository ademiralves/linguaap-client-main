import { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

import { HomeBackground, BodyContainer, Greetings, Wrapper, InputContainer, ButtonContainer } from './style';

import Card from "../../../components/Card";
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import logo from '../../../assets/images/logo.png';
import useAuth from '../../../hooks/userAuth';
import { updateProfile } from '../../../services/resources/usuarios';

const Profile = () => {
  
  const {user, getCurrentUser} =  useAuth();
  const navigate = useNavigate();
  const [nome, setname] = useState(user.nome);
  const [sobrenome, setLastname] = useState(user.sobrenome);
  const [username, setUsername] = useState(user.username);
  const [cpf, setCpf] = useState(user.cpf);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [dtNascimento, setDtNascimento] = useState(user.dtNascimento);

  useEffect(() => {
    getCurrentUser();
  }, [])

  if(!user) {
    return null;
  }

  const handleToUpdate = async () => {
    const usuarioUpdate = {
      usuarioId: user.usuarioId,
      username: username,
      nome: nome,
      sobrenome: sobrenome,
      email: email,
      password: password,
      cpf: cpf,
      dtNascimento: dtNascimento,
      perfis: user.perfis,
    }

    const {data} = await updateProfile(usuarioUpdate);
    console.log("Perfil atualizado: ", data);
    
    navigate('/home');
  }

  return (
    <HomeBackground>
      <Header />
      <Greetings>
        <h3 className='greetings'>Bem vindo(a) {user.nome} {user.sobrenome}</h3>
      </Greetings>
      <BodyContainer>
          <Card width='300px' height='auto' noShadow borderRadius='0px'>
            <Wrapper>
                  <InputContainer>
                      <Input placeholder={nome} value={nome} onChange={e => setname(e.target.value)} />
                      <Input placeholder={sobrenome} value={sobrenome} onChange={e => setLastname(e.target.value)} />
                      <Input placeholder={cpf} value={cpf} onChange={e => setCpf(e.target.value)} />
                      <Input placeholder={email}  value={email} onChange={e => setEmail(e.target.value)} />
                      <Input placeholder={username} value={username} onChange={e => setUsername(e.target.value)} />
                      <Input disabled placeholder={password} value={password} onChange={e => setPassword(e.target.value)} />
                      <Input disabled placeholder={dtNascimento} value={dtNascimento} onChange={e => setDtNascimento(e.target.value)} />
                
                      <img src={logo} width={160} height={61} alt="logo" />
                  </InputContainer>
            </Wrapper>
          </Card>
        </BodyContainer>
        <Wrapper>
          <ButtonContainer>
              <Button type="button" onClick={handleToUpdate}>Atualizar</Button>
              <p> Deseja cancelar a operação? <Link to="/usuarios">Retorne para a lista</Link></p>
          </ButtonContainer>
        </Wrapper>
            <Footer />
    </HomeBackground>
  )
}

export default Profile;