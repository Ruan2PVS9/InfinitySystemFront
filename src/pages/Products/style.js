import styled from "styled-components";

export const Content = styled.div`
  width: 80%;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: center;
  position: relative;
  padding-top: 17rem;
`;

export const Body = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  height: 100%;
  flex-direction: column; 
`;

export const Banner = styled.div`
  width: 100%;
  position: relative;

  img {
    width: 100%;
  }
`;

export const Wave = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0rem;

  img {
    width: 100%;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: fit-content;
  margin: 0 auto;

  h1 {
    margin-top: 2vh;
    font-size: 2.4rem;
    font-weight: 400;
    color: var(--black);
  }

  hr {
    width: 100%;
    height: 1px;
    background-color: var(--pink);
  }
`;

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  margin: 3rem 0;

  &:not(:first-of-type){
    margin: 0;
    margin-bottom: 3rem;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  padding: 1rem 2rem;
  min-height:30rem;
`;