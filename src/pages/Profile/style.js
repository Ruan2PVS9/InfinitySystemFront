import styled from "styled-components";


export const Welcome = styled.h3`
display: flex;
justify-content: center;
align-items: center;

`
export const Body = styled.div`
width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  height: 100%;
  flex-direction: column; 
`;
export const Content= styled.div`
  width: 80%;
  background-color: var(--white);
  display: flex;
  
  min-height: 100vh;
  height: 100%;
  text-align: center;
  position: relative;
  padding-top: 17rem;
`;
export const Aside= styled.aside`
   background-color : var(--pink-bg) ;
   margin:3rem;
   border-radius: 25px;

   width: 18vw;
   height: 30vh;



`

export const Namebutton= styled.button`
display: block;
background-color: ${props=>props.active?'var(--pink-hover)':'transparent'};


`
export const Contentchildren= styled.div`
    display:  ${props=>props.active?'initial':'none'};
    

`
export const Form = styled.form`
  width: 25rem;
  display: flex;
  gap: 3rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%; 
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


