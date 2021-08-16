import styled from "styled-components";

export const BannerDiv = styled.div`
    width: 100%;
    height: 22rem;
    background-color: var(--pink-bg);
    padding-top: 5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5%;
  }
`;

export const Adress = styled.div`
  width: 100%;
  padding-bottom: 1rem;
  /* position: absolute; */
  bottom: 0;

  span {
    font-size: 13px;
    color: var(--black);
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align: left;
  color: var(--white);
  width: 30rem;

  ul {
    font-size: 1.4rem;
    align-items: center;
    justify-self: left;
    text-align: left;
    color: var(--black);
  }
`;

export const Title = styled.div`
  width: 100%;
  gap: 1rem;
  margin-bottom: 1rem;

  h1 {
    font-size: 1.8rem;
    font-weight: 400;
    color: var(--black);
  }

  hr {
    width: 43%;
    height: 1px;
    background-color: var(--purple);
  }
`;

export const Left = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  text-align: justify;
  line-break: auto;

  font-size: 1.4rem;
  align-items: center;
  justify-self: left;

  color:var(--black)
`;

export const SmallLink = styled.a`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--black);
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: #FF94AB;
  }
`;


