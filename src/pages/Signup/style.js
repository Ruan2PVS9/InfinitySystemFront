import styled from "styled-components";
import {Link} from "react-router-dom";
export const Body = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-image: url(/Banners/Bg.png);
  background-size: cover;
  background-position: center;
  padding: 5rem 0;
  justify-content:center ;
`;

export const Form = styled.form`
  width: 25rem;
  display: flex;
  gap: 3rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%; 
`;
export const Conteiner = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
position: relative;
width: 60%;
height: 80%;
background-color: var(--white);
`;

export const Icon = styled.img`
  width: 50%;
  height: 50%;
  margin-bottom: 3rem;
`;

export const Log = styled.button`
  font-family: "Poppins", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3.9rem;
  color: var(--black);
  background-color: var(--white);
  border: 2px solid var(--pink);
  padding: 0.8rem;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 1rem;

  &:hover {
    filter: brightness(1.2);
  }
  &:hover,
  &:focus{
      color: var(--pink-red);
  }

`;

export const Input = styled.input`
  font-family: "Poppins", sans-serif;
  display: flex;
  text-align: center;
  width: 100%;
  padding: 0.8rem;
  font-size: 1.6rem;
  color: var(--pink-red);
  background-color: transparent;
  caret-color: var(--pink);
  border-bottom: 2px solid var(--pink);
  transition: all 0.3s;
  font-weight: 300;

  &:hover,
  &:focus {
    background-color: #DDB6B330;
  }
`;

export const Arrow = styled(Link)`
  position: absolute;
   left: 1rem;
  top: 1rem;
  width: fit-content;
  height: fit-content;
  font-size: 4rem;
  color: var(--pink-hover);
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    filter: brightness(1.2);
  }
`;

export const InputDiv = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

