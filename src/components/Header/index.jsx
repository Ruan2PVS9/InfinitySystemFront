import { useState } from "react";
import { Search } from "../Search/index";
import { Drawer } from "../Drawer/index";
import { Wrapper, Content, Row, Icon, Link, Cart, CloseBtn } from "./style";

export const Header = () => {
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
            <Search />
            <Link>
              <img src="/icons/User.svg" alt="" />
              Entrar / Cadastrar
            </Link>
            <Cart onClick={() => ToggleCart()}>
              <img src="/icons/Cart.svg" alt="" />
            </Cart>
          </Row>
        </Content>
      </Wrapper>
    </>
  );
};
