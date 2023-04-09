import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { Wrapper, Background, InputContainer, ButtonContainer } from './style';
import background from '../../../assets/images/background-login.png';
import logo from '../../../assets/images/logo.png';

import Card from '../../../components/Card';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Footer from '../../../components/Footer';
import { saveAula } from '../../../services/resources/aulas';

const AddAula = () => {
  // user
    const [tituloAula, setTituloAula] = useState('');
    const [descricaoAula, setDescricaoAula] = useState('');
    const [aulaVideoUrl, setAulaVideoUrl] = useState('');

    const location  = useLocation();
    const {state} = location;

    const navigate = useNavigate();

    const handleToSaveAula = async () => {
      const data = {
        tituloAula: tituloAula,
        descricaoAula: descricaoAula,
        aulaVideoUrl: aulaVideoUrl,
      }
  
      const response = await saveAula(data, state.cursoId);
      
      console.log(response);

      if(response.data) {
        navigate(`/aulas/curso/${state.cursoId}`);
        return;
      }
  
      alert('Aula já cadastrada!');
    }
    return (
        <>
          <Wrapper>
            <Background image={background}/>
            <Card width='300px' height='auto' noShadow borderRadius='0px'>
              <Wrapper>
                  <InputContainer>
                      <Input placeholder='Titulo da aula' value={tituloAula} onChange={e => setTituloAula(e.target.value)} />
                      <Input placeholder='URL do video da aula' value={aulaVideoUrl} onChange={e => setAulaVideoUrl(e.target.value)} />
                      <textarea placeholder='Descrição da Aula' value={descricaoAula} onChange={e => setDescricaoAula(e.target.value)} />
                      <img src={logo} width={160} height={61} alt="logo" />
                  </InputContainer>
              </Wrapper>
            </Card>
          </Wrapper>
          <Wrapper>
            <ButtonContainer>
                <Button type="button" onClick={handleToSaveAula}>Cadastrar</Button>
                <p> Deseja cancelar a operação? <Link to="/cursos">Retorne para a lista de cursos</Link></p>
            </ButtonContainer>
          </Wrapper>
          <Footer />
        </>
    )
}

export default AddAula;