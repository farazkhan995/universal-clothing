import styled from 'styled-components';

export const Name = styled.span`

`;
export const Price = styled.span`

`;


export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;

  ${Name},
  ${Price}{
    font-size: 16px;
  }

`;


export const CartItemContainer = styled.div`
    width: 100%;
    display: flex;
    height: 80px;
    margin-bottom: 15px;
  
    img {
      width: 30%;
    }
`;
