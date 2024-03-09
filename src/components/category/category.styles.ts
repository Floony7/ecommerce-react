import styled from 'styled-components';

export const CategoryCard = styled.div`
    min-width: 30%;
    min-height: 240px;
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
    width: 250px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--clr-magenta);
    color: white;
    background-color: hsla(270, 50%, 30%, 50%);
    position: absolute;

    h3 {
      font-weight: bold;
      margin: 0;
      font-size: 22px;
      padding: 0;
    }

    p {
      font-weight: lighter;
      font-size: 16px;
      padding: 0;
      margin-top: 0;
    }
`;