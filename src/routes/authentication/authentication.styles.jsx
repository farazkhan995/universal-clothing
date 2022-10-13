import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    width: auto;
    margin: 30px auto;

    @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    }
`;
