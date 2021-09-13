import { useState } from "react";
import { Drawer } from "../Drawer/index";
import { Wrapper, Content, Row, Icon, Sign, Cart, CloseBtn } from "./style";

export const Header = (props) => {
  const [cart, setCart] = useState(false);
  const ToggleCart = () => setCart(!cart);
  return (
    <>
    <Drawer active={cart}>
        <CloseBtn onClick={() => ToggleCart()}>
          <i className="fas fa-times"></i>
        </CloseBtn>
      </Drawer>
      <Wrapper>
        <Content>
          <Row>
            <Icon src="/icons/Logo.svg" />
            {props.children}
            <Sign to ="/signin">
              <img src="/icons/User.svg" alt="" />
              Entrar / Cadastrar
            </Sign>
            <Cart onClick={() => ToggleCart()}>
              <img src="/icons/Cart.svg" alt="" />
            </Cart>
          </Row>
        </Content>
      </Wrapper>
    </>
  );
};
