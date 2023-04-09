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

import { updateCurso } from '../../../services/resources/cursos';

const UpdateCurso = () => {

  const location  = useLocation();
  const {state} = location;

  const [tituloCurso, setTituloCurso] = useState(state.tituloCurso);
  const [descricaoCurso, setDescricaoCurso] = useState(state.descricaoCurso);
  const [cursoIconImg, setCursoIconImg] = useState(state.cursoIconImg);
  const [cursoBannerImg, setCursoBannerImg] = useState(state.cursoBannerImg);
  const [categorias, setCategorias] = useState(state.categorias);

  const navigate = useNavigate();

  const handleToUpdate = async () => {
    const cursoUpdate = {
      tituloCurso: tituloCurso,
      descricaoCurso: descricaoCurso,
      cursoIconImg: cursoIconImg,
      cursoBannerImg: cursoBannerImg,
      categorias: categorias,
    }

    const {data} = await updateCurso(cursoUpdate, state.cursoId);
    console.log("Curso atualizado: ", data);
    
    navigate('/cursos');
  }

  return (
      <>
        <Wrapper>
          <Background image={background}/>
          <Card width='300px' height='auto' noShadow borderRadius='0px'>
            <Wrapper>
                <InputContainer>
                    <Input placeholder={tituloCurso} value={tituloCurso} onChange={e => setTituloCurso(e.target.value)} />
                    <Input placeholder={cursoIconImg} value={cursoIconImg} onChange={e => setCursoIconImg(e.target.value)} />
                    <Input placeholder={cursoBannerImg} value={cursoBannerImg} onChange={e => setCursoBannerImg(e.target.value)} />
                    <textarea placeholder={descricaoCurso} value={descricaoCurso} onChange={e => setDescricaoCurso(e.target.value)} />
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

export default UpdateCurso;