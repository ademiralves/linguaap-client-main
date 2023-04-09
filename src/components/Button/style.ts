import styled from 'styled-components';


/*
    Css misturado com javascript (ou typescript), isso é Styled Component.
    Crie um component estilizado, não tendo a necessidade escrever um arquivo css ou sass
*/

export const ButtonContainer = styled.button`
    width: 100%;
    height: 60px;
    color: black;
    background: white;
    border: 1px solid black;
    border-radius: 10px;
    padding: 5px;
    margin-bottom: 20px;
    display:flex;
    justify-content: center;
    align-items: center;
    z-index: 5000;
    &:hover {
        filter: opacity(0.8)
    }
    &:disabled {
        filter: opacity(0.4)
    }
    
`