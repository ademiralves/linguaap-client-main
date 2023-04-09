import styled, {css} from 'styled-components';

/*
    O card poderá receber alguns valores de forma dinâmica ou não.
*/

export const CardContainer = styled.div<{
    width: string;
    height: string;
    noShadow: boolean;
    borderRadius: string;
}>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background: #6BB9C3;
    ${props => !props.noShadow && css`
       box-shadow: 5px 4px 6px rgba(0, 0, 0, 0.25);
    `}
    border-radius: ${(props) => props.borderRadius};
    padding: 20px;
    display:flex;
    align-items: center;
    flex-direction: column;
    z-index: 5000;
`