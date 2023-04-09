import { CardContainer } from './style';

interface CardProps {
    width?: string,
    children?: React.ReactNode,
    height?: string,
    borderRadius?: string,
    noShadow?: boolean
}

/*
  Neste componente, será possivel passar valores. Esse valores poderão vir de forma dinâmica ou nâo.
  A interface CardProps possui os valores que o Card poderá receber.
*/

const Card = ({
    children,
    width='100%',
    height='auto',
    borderRadius='20px',
    noShadow = false,
    }: CardProps) => {
    return (
        <CardContainer width={width} height={height} borderRadius={borderRadius} noShadow={noShadow}>
            {children}
        </CardContainer>
    )
}

export default Card;