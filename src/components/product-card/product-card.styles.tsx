import styled from "styled-components";

export const ProductContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: 85%;
    object-fit: cover;
    margin-bottom: 5px;
  }

  &:hover {
    img {
      opacity: 0.8;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  width: 10%;
`;

export const Button = styled.button`
  margin-top: 0.3rem;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.5rem;
  letter-spacing: 1pt;
  border-radius: 3px;
  padding: 1rem 0.6rem;
  border: 1px solid var(--clr-magenta);
  color: white;
  background-color: hsla(270, 50%, 30%, 70%);
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  top: 200px;
  left: 10%;
  position: absolute;
  width: 80%;

  &:hover {
    background-color: hsl(270, 60%, 60%);
  }
`;
