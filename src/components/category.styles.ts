import styled from 'styled-components';

export const CategoriesContainer = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 2rem;
`;

export const CategoryCard = styled.div`
    min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid hsl(200, 80%, 30%);
    margin: 0 8px 16px;
    overflow: hidden;

    &:hover {
        cursor: pointer;
    }
`;

export const CategoryImage = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
`;

export const CategoryBody = styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: white;
    opacity: 0.7;
    position: absolute;

    h2 {
      font-weight: bold;
      margin: 0 6px 0;
      font-size: 22px;
      color: #4a4a4a;
    }

    p {
      font-weight: lighter;
      font-size: 16px;
    }
`;