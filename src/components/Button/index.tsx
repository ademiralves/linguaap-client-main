import { ButtonHTMLAttributes } from 'react';
import { ButtonContainer } from './style';


/*
  Esse botão poderá ser usado em varias partes do projeto, sendo considerado um
  boilerplate. Esse botão já tem um estilo determinado, sendo assim os botões derivado desse
  botão devem seguir um padrão; isso pode ser ruim!
*/

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <ButtonContainer {...props}>
            {props.children}
        </ButtonContainer>
    )
}

export default Button;