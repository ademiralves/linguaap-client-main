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

import { updateAula } from '../../../services/resources/aulas';

const UpdateAula = () => {

  const location  = useLocation();
  const {state} = location;

  const [tituloAula, setTituloAula] = useState(state.tituloAula);
  const [descricaoAula, setDescricaoAula] = useState(state.descricaoAula);
  const [aulaVideoUrl, setAulaVideoUrl] = useState(state.aulaVideoUrl);

  const navigate = useNavigate();

  const handleToUpdate = async () => {
    const aulaUpdate = {
      tituloAula: tituloAula,
      descricaoAula: descricaoAula,
      aulaVideoUrl: aulaVideoUrl,
    }

    const {data} = await updateAula(aulaUpdate, state.cursoId, state.aulaId);
    console.log("Aula atualizada: ", data);
    
    navigate(`/aulas/curso/${state.cursoId}`);
  }

  return (
      <>
        <Wrapper>
          <Background image={background}/>
          <Card width='300px' height='auto' noShadow borderRadius='0px'>
            <Wrapper>
                <InputContainer>
                    <Input placeholder={tituloAula} value={tituloAula} onChange={e => setTituloAula(e.target.value)} />
                    <Input placeholder={aulaVideoUrl} value={aulaVideoUrl} onChange={e => setAulaVideoUrl(e.target.value)} />
                    <textarea placeholder={descricaoAula} value={descricaoAula} onChange={e => setDescricaoAula(e.target.value)} />
                    <img src={logo} width={160} height={61} alt="logo" />
                </InputContainer>
            </Wrapper>
          </Card>
        </Wrapper>
        <Wrapper>
          <ButtonContainer>
              <Button type="button" onClick={handleToUpdate}>Atualizar</Button>
              <p> Deseja cancelar a operação? <Link to="/cursos">Retorne para a lista</Link></p>
          </ButtonContainer>
        </Wrapper>
        <Footer />
    </>
  );
}

export default UpdateAula;