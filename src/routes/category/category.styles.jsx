import styled from 'styled-components';

export const CategoryTitle = styled.h2`
    font-size: 38px;
    margin-bottom: 25px;
    text-align: center;
`;

export const CategoryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 50px;

    @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    align-items: center;
    margin: auto;
  }
`;

