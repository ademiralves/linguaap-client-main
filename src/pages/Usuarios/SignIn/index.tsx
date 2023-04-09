import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import useAuth from '../../../hooks/userAuth';

import {Wrapper, Background, InputContainer, ButtonContainer} from './style';
import background from '../../../assets/images/background-login.png';
import logo from '../../../assets/images/logo.png';

import Card from '../../../components/Card';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Footer from '../../../components/Footer';

const SignIn = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { userSignIn } = useAuth();

    const handleToSignIn = async () => {
        const data = {
          login, 
          password
        }
    
        const response = await userSignIn(data);
        console.log(response);
        if(response.username) {
          
          console.log("Usuario logado!");
          navigate('/home');
          return;
        }
    
        alert('Usuario ou senha inválida');
    }

    return (
        <>
            <Wrapper>
                <Background image={background}/>
                <Card width="403px" height="auto">
                    <img src={logo} width={172} height={61} alt="logo TQI" />

                    <InputContainer>
                        <Input placeholder='Email ou Username' value={login} onChange={e => setLogin(e.target.value)} />
                        <Input placeholder='Senha' value={password} onChange={e => setPassword(e.target.value)}  type="password" />
                    </InputContainer>

                    <ButtonContainer>
                        <Button type="button" onClick={handleToSignIn}>Entrar</Button>
                        <p>Ainda não tem cadastro? <Link to="/signup">Cadastre-se Já</Link></p>
                    </ButtonContainer>
                </Card>
            </Wrapper>
            <Footer />
        </>
    )
}

export default SignIn;