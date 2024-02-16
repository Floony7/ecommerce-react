import styled from 'styled-components';

export const Button = styled.button`
    margin-top: 0.3rem;
    border-radius: 3px;
    padding: 0.6rem;
    border: 1px solid hsl(200, 60%, 70%);
    background-color: hsl(150, 50%, 50%);
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color .3s ease-in-out;

    &:hover {
        background-color: hsl(150, 60%, 60%);
    }
`;