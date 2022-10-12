import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled(Link)`
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;

    &:hover {
      color: rgb(145, 138, 138);
    }
`;

export const Preview = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
`;

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;


