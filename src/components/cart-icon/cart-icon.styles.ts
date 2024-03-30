import styled from 'styled-components';
import { BsBag } from "react-icons/bs";

export const Container = styled.section`
    width: 45px; 
    height: 45px; 
    position: relative; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    cursor: pointer;
`

export const BagIcon = styled(BsBag)`
    color: white;
    width: 2rem; 
    height: 2rem;
`;

export const Counter = styled.span`
color: white;
    position: absolute; 
    font-size: 1rem; 
    font-weight: bold; 
    bottom: 6px;
`;