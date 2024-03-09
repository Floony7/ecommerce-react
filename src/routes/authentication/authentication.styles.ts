import styled from 'styled-components';

export const AuthenticationSection = styled.section`
    display: flex;
    justify-content: space-between;
    max-width: 960px;
    margin: 2rem auto;

    @media (max-width: 920px) {
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;

    * {
        width: 90%;
    }
  }

`;