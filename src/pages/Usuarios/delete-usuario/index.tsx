import { useLocation, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import Card from "../../../components/Card";
import Header from '../../../components/Header';
import Button from '../../../components/Button';
import { BodyContainer, HomeBackground } from './style';

import { FiDelete } from 'react-icons/fi'
import { deleteUser } from '../../../services/resources/usuarios';

const DeleteUsuario = () => {
  const location  = useLocation();
  const {state} = location;
  const navigate = useNavigate();

  const handleToList = () => {
    navigate('/usuarios');
  }

  const handleToDelete = async () => {
    const {data} = await deleteUser(state.usuarioId);
    console.log("Usuario excluido: ", data);
    
    navigate('/usuarios');
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
            <h2>ID: {state.usuarioId}</h2>
            <h2>CPF do usuario: {state.cpf}</h2> 
            <h2>Nome completo do Usuario: {state.nome} {state.sobrenome}</h2>
          </Card>
          <Button type="button" onClick={handleToDelete}>
              <FiDelete size={24}/>
          </Button>
        </div>
      </BodyContainer>
    </HomeBackground>
  );
}

export default DeleteUsuario;