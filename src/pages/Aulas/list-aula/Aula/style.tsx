import styled from 'styled-components';

export const AulaItemContainer = styled.div`
    display: flex;
    width: 100%;
    &:hover {
      transform: translateY(-2px);
      color: gray;
    }
`

export const AulaItemInfo = styled.div`
    p{
        margin-bottom: 2px;
    }
`


export const AulaItemImage = styled.div`
    width: 60px;
    height: 60px;
    margin-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: gray;
    border-radius: 10px;
    margin-bottom: 20px;
    Button {
        &:hover {
            transform: translateY(-2px);
            color: gray;
            cursor: pointer;
        }
    }
`;

export const AulaButton = styled.div`
    width: 60px;
    height: 60px;
    margin-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: gray;
    border-radius: 10px;
    margin-bottom: 20px;
`;
