import { useNavigate } from 'react-router-dom';

import useAuth from '../../hooks/userAuth';

import { HeaderContainer, HeaderWrapper, UserInfo } from './style';
import UserCircle from '../UserCircle';

import logo from '../../assets/images/logo.png';


/*
  Será buscado o nome e o sobrenome do usuario logado, então usando o método substr será colocado
  as iniciais desse usuario logado na onde ficará a imagem do usuario futuramente.
*/

const Header = () => {
   
    const navigate = useNavigate();
    const { user } = useAuth();

    const initials = user.nome.substr(0,1)+user.sobrenome.substr(0,1);

    const handleLogoff = () => {
        navigate('/signin')
    }

    return (
        <HeaderContainer>
            <HeaderWrapper>
                <img src={logo} width={172} height={61} alt="logo" />
                <UserInfo>
                  <UserCircle initials={initials} />
                  <div>
                      <p>Olá, <span className="primary-color font-bold">{user.username}</span></p>
                      <strong>{user.cpf}</strong><br/>
                      <a href="#" onClick={handleLogoff}>Sair</a>
                  </div>
                </UserInfo>
            </HeaderWrapper>
        </HeaderContainer>
    )
}

export default Header