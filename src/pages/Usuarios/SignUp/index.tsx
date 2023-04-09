import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import useAuth from '../../../hooks/userAuth';

import { Wrapper, Background, InputContainer, ButtonContainer } from './style';
import background from '../../../assets/images/background-login.png';
import logo from '../../../assets/images/logo.png';

import Card from '../../../components/Card';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Footer from '../../../components/Footer';

const SignUp = () => {

    const [nome, setname] = useState('');
    const [sobrenome, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dtNascimento, setDtNascimento] = useState('');

    const perfis = ["ALUNO"];
    const navigate = useNavigate();
    const { userSignUp } = useAuth();
    const handleToSignUp = async () => {
      const data = {
        username: username,
        nome: nome,
        sobrenome: sobrenome,
        email,
        password,
        cpf,
        perfis: perfis,
        dtNascimento: dtNascimento,
      }
  
      const response = await userSignUp(data);
      
      console.log(response);

      if(response.username) {
        navigate('/confirmacao');
        return;
      }
  
      alert('Usuario já cadastrado');
    }
    return (
        <>
          <Wrapper>
            <Background image={background}/>
            <Card width='300px' height='auto' noShadow borderRadius='0px'>
              <Wrapper>
                  <InputContainer>
                      <Input placeholder='Nome' value={nome} onChange={e => setname(e.target.value)} />
                      <Input placeholder='Sobrenome' value={sobrenome} onChange={e => setLastname(e.target.value)} />
                      <Input placeholder='CPF' value={cpf} onChange={e => setCpf(e.target.value)} />
                      <Input placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                      <Input placeholder='Username' value={username} onChange={e => setUsername(e.target.value)} />
                      <Input placeholder='Senha' value={password} onChange={e => setPassword(e.target.value)} type="password" />
                      <Input placeholder='Data de Nascimento' value={dtNascimento} onChange={e => setDtNascimento(e.target.value)} type="datetime-local" />
                      <img src={logo} width={160} height={61} alt="logo" />
                  </InputContainer>
              </Wrapper>
            </Card>
          </Wrapper>
          <Wrapper>
            <ButtonContainer>
                <Button type="button" onClick={handleToSignUp}>Cadastrar-se</Button>
                <p>Já tem uma conta? <Link to="/signin">Entre Já</Link></p>
            </ButtonContainer>
          </Wrapper>
          <Footer />
        </>
    )
}

export default SignUp;