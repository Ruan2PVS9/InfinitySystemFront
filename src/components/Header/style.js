import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 17rem;
  background-color: var(--pink-bg);
  display: flex;
  justify-content: center;
  padding: 0.7rem 0;
  position: fixed;
  box-shadow: 0 4px 3px rgb(0 0 0 / 11%);
  z-index: 1;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  height: 10rem;
`;

export const SmallRow = styled(Row)`
  padding: 0 5%;
  gap: 10%;
  justify-content: flex-start;
  height: 6.3rem;
  align-items: flex-end;
`;

export const Content = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export const Icon = styled.img`
  width: 10rem;
`;

export const Link = styled.a`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  gap: 1rem;
  color: var(--black);

  img {
    width: 2.2rem;
  }
`;

export const SmallLink = styled(Link)`
  font-size: 1.5rem;
  gap: 0.3rem;
  color: var(--black);

  img {
    width: 2.5rem;
  }
`;

export const Cart = styled.button`
  background-color: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 4rem;
  }
`;

export const CloseBtn = styled.button`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
  margin-bottom: 0.7rem;
  color: var(--color-header);
  font-size: 2.4rem;
  cursor: pointer;
  position: relative;
  transition: all 0.3s;

  &:hover {
    color: var(--pink);
  }
`;