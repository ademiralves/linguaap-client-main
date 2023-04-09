import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { Wrapper, Background, InputContainer, ButtonContainer } from './style';
import background from '../../../assets/images/background-login.png';
import logo from '../../../assets/images/logo.png';

import Card from '../../../components/Card';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Footer from '../../../components/Footer';

const AddComentarios = () => {
  // user
    const [comentario, setComentario] = useState('');

    const location  = useLocation();
    const {state} = location;

    const navigate = useNavigate();

    const handleToSaveAula = async () => {
      const data = {
        comentario: comentario,
      }
  
      /*const response = await saveAula(data, state.cursoId);
      
      console.log(response);

      if(response.data) {
        navigate(`/aulas/curso/${state.cursoId}`);
        return;
      }*/
  
      alert('Aula já cadastrada!');
    }
    return (
        <>
          <Wrapper>
            <Background image={background}/>
            <Card width='300px' height='auto' noShadow borderRadius='0px'>
              <Wrapper>
                  <InputContainer>
                      <Input placeholder='Comentario' value={comentario} onChange={e => setComentario(e.target.value)} />
                      <img src={logo} width={160} height={61} alt="logo" />
                  </InputContainer>
              </Wrapper>
            </Card>
          </Wrapper>
          <Wrapper>
            <ButtonContainer>
                <Button type="button" onClick={handleToSaveAula}>Postar Comentario</Button>
            </ButtonContainer>
          </Wrapper>
          <Footer />
        </>
    )
}

export default AddComentarios;