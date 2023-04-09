import { useLocation, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import Card from "../../../components/Card";
import Header from '../../../components/Header';
import Button from '../../../components/Button';
import { BodyContainer, HomeBackground } from './style';

import { FiDelete } from 'react-icons/fi'
import { deleteCurso } from '../../../services/resources/cursos';

const DeleteCurso= () => {
  const location  = useLocation();
  const {state} = location;
  const navigate = useNavigate();

  const handleToList = () => {
    navigate('/cursos');
  }

  const handleToDelete = async () => {
    const {data} = await deleteCurso(state.cursoId);
    console.log("Curso excluido: ", data);
    
    navigate('/cursos');
  }

  return (
    <HomeBackground>
      <Header />
      <BodyContainer>
        <div>
          <a href="#" onClick={handleToList}>
            <FiArrowLeft size={25} color='#888' />
            <span>   Voltar para o Inicio</span> 
          </a>
          <Card width='403px' height='auto'>
            <h2>Cod.: {state.cursoId}</h2>
            <h3>Titulo do Curso: {state.tituloCurso}</h3>
          </Card>
          <Button type="button" onClick={handleToDelete}>
              <FiDelete size={24}/>
          </Button>
        </div>
      </BodyContainer>
    </HomeBackground>
  );
}

export default DeleteCurso;