import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 33rem;
  height: 30rem;
  min-width: 280px;
  background-color: var(--whitest);
  box-shadow: 0px 4px 3px 1px rgb(0 0 0 / 5%);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;

  &:hover{
    box-shadow: 0px 5px 4px 1px rgb(0 0 0 / 5%);
  }
`;

export const ImgBg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  z-index: 0;
  position: absolute;
  width: 100%;
  height: 18rem;
  background-color: var(--img-bg);

  img {
    height: 100%;
  }
`;

export const CardCont = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  width: 82%;
  height: 13.5rem;
  background-color: var(--whitest);
  bottom: 0;

  div:last-of-type {
    padding: 0 0 1.2rem 0;
  }

  h3,
  h4,
  h5 {
    color: var(--black);
  }

  h3 {
    font-size: 1.8rem;
    font-weight: 600;
  }

  h4 {
    font-size: 1.4rem;
    font-weight: 600;
  }

  h5 {
    font-size: 1.4rem;
    font-weight: 600;
  }
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.7rem;
`;

export const Button = styled.button`
  width: 48%;
  height: 3.5rem;
  align-items: center;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--black);
  transition: all 0.3s;
  cursor: pointer;

  background-color: var(--pink);
  border: 1px solid var(--pink);

  &:hover {
    border: 1px solid var(--pink-hover);
    background-color: var(--pink-hover);
  }
`;

export const OutlineButton = styled(Button)`
  background-color: transparent;
  border: 1px solid var(--pink);

  &:hover {
    border: 1px solid var(--pink);
    background-color: var(--pink);
  }
`;
