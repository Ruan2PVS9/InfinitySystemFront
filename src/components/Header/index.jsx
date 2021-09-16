import { useState } from "react";
import { Drawer } from "../Drawer/index";
import { Wrapper, Content, Row, Icon, Sign, Cart, CloseBtn,Signout } from "./style";
import { useSession } from "../../hooks/useSession";


export const Header = (props) => {
  const [cart, setCart] = useState(false);
  const ToggleCart = () => setCart(!cart);
  const {onGoingSession ,isItLogged , LogOut} = useSession();   const isLogged = isItLogged();
  const user = onGoingSession()
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
            <Sign to ={isLogged?'/profile':"/signin"}>
              <img src="/icons/User.svg" alt="" />
              {isLogged?(user.username):('Entrar / Cadastrar')}
            </Sign>
              {isLogged?(<Signout onClick={() => LogOut()}>Sair</Signout>):('')}
              {/* <Signout onClick={() => LogOut()}>Sair</Signout> */}
            <Cart onClick={() => ToggleCart()}>
              <img src="/icons/Cart.svg" alt="" />
            </Cart>
          </Row>
        </Content>
      </Wrapper>
    </>
  );
};
