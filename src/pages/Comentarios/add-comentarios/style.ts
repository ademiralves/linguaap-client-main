import styled from 'styled-components';

export const Wrapper = styled.main`
    position: relative;
    display: flex;
    padding: 5px;
    justify-content: center;
    background: gray;
`


export const Background = styled.div<{image: any}>`
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    height: 50vh;
    background-image: url(${(props => props.image)});
    background-size: contain;
    z-index: 1;
`

export const InputContainer = styled.div`
   margin-top: 67px;
   width: 90%;
   flex: 1;
   display: flex;
   flex-direction: column;
`

export const ButtonContainer = styled.div`
   width: 50%;
   margin-top: 20px;
   margin-bottom: 5px;
   padding: 10px;
   display: flex;
   align-items: center;
   flex-direction: column;
   p{
       font-size: 0.75rem;
       font-weight: 400;
       color: black;
 
      a {
       font-size: 1rem;
       font-weight: 700;
      }
   }
`