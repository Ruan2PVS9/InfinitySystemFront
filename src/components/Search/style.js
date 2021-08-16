import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 36%;
  height: 10rem;
  align-items: center;
`;

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  height: 4.5rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  background-color: var(--white);
  border: 1px solid var(--black);
  padding-left: 0.7rem;
  border-radius: 0.4rem;
  color: var(--black);
  font-size: 14px;
  position: absolute;
  top: 0;
  right: 0;
`;

export const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  width: 4.5rem;
  height: 100%;
`;

export const Icon = styled.img`
  width: 2.2rem;
`;
