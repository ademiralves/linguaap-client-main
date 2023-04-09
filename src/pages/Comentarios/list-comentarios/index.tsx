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

import { Comentario } from './Comentario';
import AddComentarios from '../add-comentarios';

interface Comentarios {
  comentarioId: number,
  comentario: string,
  username: string,
  nome: string,
  sobrenome: string,
}


const ListCurso = () => {
  const [cursos, setCursos] = useState<Comentarios[]>([]);
  
  const {user, getCurrentUser} =  useAuth();

  const getAllCursos = async () => {
    const {data} = await allCursosInstructor();
    console.log(data);
    //setCursos(data);
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
                <AddComentarios></AddComentarios>
                <div>
                    <Card noShadow width="90%">
                      <InlineTitle>
                      <h2 className="h2">Comentarios</h2>
                      </InlineTitle>
                      <CursoContainer>
                        {cursos.map(comentario => <Comentario {...comentario}/>)}
                      </CursoContainer>
                   </Card>
                </div>
            </BodyContainer>
            <Footer />
    </HomeBackground>
  )
}

export default ListCurso