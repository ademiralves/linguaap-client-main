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