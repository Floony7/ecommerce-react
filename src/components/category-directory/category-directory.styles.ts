import styled from 'styled-components';

export const CategoriesContainer = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(40vh, auto);
    gap: 0;
    margin-top: 2rem;
`;