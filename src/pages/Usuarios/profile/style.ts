import styled from 'styled-components';

export const HomeBackground = styled.main`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
`

export const BodyContainer = styled.main`
  width: 90%;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 255px;
  > div {
    flex: 1;
    & > div {
      margin-bottom: 20px;
    }
    &:nth-child(2) {
      display: flex;
      justify-content: flex-end;
    }
  }
`
export const Wrapper = styled.main`
    position: relative;
    display: flex;
    padding: 5px;
    justify-content: center;
    background: gray;
`

export const InputContainer = styled.div`
   margin-top: 67px;
   width: 90%;
   flex: 1;
   display: flex;
   flex-direction: column;
`

export const Greetings = styled.div`
  margin: 20px;
  display: flex;
  width: 100%;
  justify-content: center;
  h3 {
    font-size: 40px;
    color: blue;
  }
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