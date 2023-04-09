import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { AulaContainer, HomeBackground, BodyContainer, Greetings, InlineTitle } from './style';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import useAuth from '../../../hooks/userAuth';

import { allAulas } from '../../../services/resources/aulas';
import { FiSave } from 'react-icons/fi'

import Card from '../../../components/Card';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { Aula } from './Aula';

interface Aulas {
  aulaId: number,
  tituloAula: string,
  descricaoAula: string,
  aulaVideoUrl: string,
}


const ListAula = () => {
  const [aulas, setAulas] = useState<Aulas[]>([]);
  const location  = useLocation();
  const {state} = location;

  const {user, getCurrentUser} =  useAuth();

  const getAllCursos = async () => {
    const {data} = await allAulas(state.cursoId);
    console.log(data);
    setAulas(data);
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
                <p><a href={`/aulas/add/curso/${state.cursoId}`}>Clique aqui para cadastrar</a>uma nova aula.</p>
                <div>
                    <Card noShadow width="90%">
                      <InlineTitle>
                      <h2 className="h2">Trilha de aula</h2>
                      </InlineTitle>
                      <AulaContainer>
                        {aulas.map(aula => <Aula {...aula}/>)}
                      </AulaContainer>
                   </Card>
                </div>
            </BodyContainer>
            <Footer />
    </HomeBackground>
  )
}

export default ListAula