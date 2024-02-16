import styled from 'styled-components';

export const PageWrap = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 400px;
    justify-content: space-evenly;
    gap: 0.25rem;

    input {
        padding: 0.6rem;
        border-radius: 3px;
        border: 1px solid hsl(200, 60%, 70%);

        &:focus {
            outline: 1px solid hsl(200, 70%, 80%);
        }
    }
`;

export const Label = styled.label`
    font-weight: 600;
`;