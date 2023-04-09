import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Wrapper, Background, InputContainer, ButtonContainer } from './style';
import background from '../../../assets/images/background-login.png';
import logo from '../../../assets/images/logo.png';

import Card from '../../../components/Card';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Footer from '../../../components/Footer';
import { saveCurso } from '../../../services/resources/cursos';

const AddCurso = () => {
  // user
    const [tituloCurso, setTituloCurso] = useState('');
    const [descricaoCurso, setDescricaoCurso] = useState('');
    const [cursoIconImg, setCursoIconImg] = useState('');
    const [cursoBannerImg, setCursoBannerImg] = useState('');
    const [categorias, setCategorias] = useState([]);

    const navigate = useNavigate();

    const handleToSaveCurso = async () => {
      const data = {
        tituloCurso: tituloCurso,
        descricaoCurso: descricaoCurso,
        cursoIconImg: cursoIconImg,
        cursoBannerImg: cursoBannerImg,
        categorias: categorias,
      }
  
      const response = await saveCurso(data);
      
      console.log(response);

      if(response.data) {
        navigate('/cursos');
        return;
      }
  
      alert('Curso já cadastrado!');
    }
    return (
        <>
          <Wrapper>
            <Background image={background}/>
            <Card width='300px' height='auto' noShadow borderRadius='0px'>
              <Wrapper>
                  <InputContainer>
                      <Input placeholder='Titulo do Curso' value={tituloCurso} onChange={e => setTituloCurso(e.target.value)} />
                      <Input placeholder='URL do Icone do curso' value={cursoIconImg} onChange={e => setCursoIconImg(e.target.value)} />
                      <Input placeholder='URL do Banner do curso' value={cursoBannerImg} onChange={e => setCursoBannerImg(e.target.value)} />
                      <textarea placeholder='Descrição do Curso' value={descricaoCurso} onChange={e => setDescricaoCurso(e.target.value)} />
                      <img src={logo} width={160} height={61} alt="logo" />
                  </InputContainer>
              </Wrapper>
            </Card>
          </Wrapper>
          <Wrapper>
            <ButtonContainer>
                <Button type="button" onClick={handleToSaveCurso}>Cadastrar</Button>
                <p> Deseja cancelar a operação? <Link to="/cursos">Retorne para a lista</Link></p>
            </ButtonContainer>
          </Wrapper>
          <Footer />
        </>
    )
}

export default AddCurso;