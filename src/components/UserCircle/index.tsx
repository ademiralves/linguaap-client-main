import { CircleContainer } from './style';

/*
  Responsavel por desenhar um circulo onde ficará as iniciais do usuarios, futuramente deverá
  substituido pela imagem do usuário, mas para usuarios que não possui foto poderá manter esse
  desenho com as inicias do usuario logado.
*/

interface UserInfo {
    initials: string;
}

const UserCircle = ({initials}: UserInfo) => {
    return (
        <CircleContainer>
            {initials}    
        </CircleContainer>
    )
}

export default UserCircle;