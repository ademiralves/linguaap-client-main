import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { CursoContainer, HomeBackground, BodyContainer, Greetings, InlineTitle } from './style';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import useAuth from '../../../hooks/userAuth';

import { allCursosInstructor } from '../../../services/resources/cursos';
import { FiSave } from 'react-icons/fi'

import Card from '../../../components/Card';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { Item } from './Item';

interface Cursos {
  cursoId: number,
  tituloCurso: string,
  descricaoCurso: string,
  cursoIconImg: string,
  cursoBannerImg: string,
  categorias: string[];
}


const ListCurso = () => {
  const [cursos, setCursos] = useState<Cursos[]>([]);
  
  const {user, getCurrentUser} =  useAuth();

  const getAllCursos = async () => {
    const {data} = await allCursosInstructor();
    console.log(data);
    setCursos(data);
  }

  useEffect(() => {
    getCurrentUser();
    getAllCursos();
  }, [])

  if(!user) {
    return null;
  }
  
  return (
    <HomeBackground>
      <Header />
      <Greetings>
        <h3 className='greetings'>Bem vindo(a) {user.nome} {user.sobrenome}</h3>
      </Greetings>
      <BodyContainer>
                <p><Link to="/cursos/add">Clique aqui para cadastrar</Link>um novo curso.</p>
                <div>
                    <Card noShadow width="90%">
                      <InlineTitle>
                      <h2 className="h2">Seus cursos</h2>
                      </InlineTitle>
                      <CursoContainer>
                        {cursos.map(curso => <Item {...curso}/>)}
                      </CursoContainer>
                   </Card>
                </div>
            </BodyContainer>
            <Footer />
    </HomeBackground>
  )
}

export default ListCurso