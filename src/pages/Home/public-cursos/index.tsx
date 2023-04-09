import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { CursoContainer, HomeBackground, BodyContainer, InlineTitle } from './style';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import { allCursos } from '../../../services/resources/cursos';

import Card from '../../../components/Card';

import { Curso } from './Curso';

interface Cursos {
  cursoId: number,
  tituloCurso: string,
  descricaoCurso: string,
  cursoIconImg: string,
  cursoBannerImg: string,
  categorias: string[];
}


const PublicCurso = () => {
  const [cursos, setCursos] = useState<Cursos[]>([]);
  
  const getAllCursos = async () => {
    const {data} = await allCursos();
    console.log(data);
    setCursos(data);
  }

  useEffect(() => {
    getAllCursos();
  }, [])
  
  return (
    <HomeBackground>
      <Header />
      <BodyContainer>
                <div>
                    <Card noShadow width="90%">
                      <InlineTitle>
                      <h2 className="h2">Cursos</h2>
                      </InlineTitle>
                      <CursoContainer>
                        {cursos.map(curso => <Curso {...curso}/>)}
                      </CursoContainer>
                   </Card>
                </div>
            </BodyContainer>
            <Footer />
    </HomeBackground>
  )
}

export default PublicCurso