import { useNavigate, Link } from 'react-router-dom';

import {Wrapper, Background, ButtonContainer } from './style';
import background from '../../../../assets/images/background-login.png';

import Card from '../../../../components/Card';
import Footer from '../../../../components/Footer';
import Button from '../../../../components/Button';

const Confirmacao = () => {

  const navigate = useNavigate();

  const handleToConfirmacao = () => {
    navigate('/');
  }
  return (
    <>
      <Wrapper>
        <Background image={background} />
        <Card width='403px' height='auto'>
          <h3>Obrigado por se cadastrar!</h3>
          <h6>Para logar em sua conta basta voltar para o inicio</h6>
          <ButtonContainer>
            <Button type="button" onClick={handleToConfirmacao}>Inicio</Button>
          </ButtonContainer>
        </Card>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Confirmacao;