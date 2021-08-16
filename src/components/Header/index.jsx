import { Search } from "../Search/index";
import {
  Wrapper,
  Content,
  Row,
  Icon,
  Link,
  Cart,
} from "./style";

export const Header = () => {
  return (
    <>
      <Wrapper>
        <Content>
          <Row>
            <Icon src="/icons/Logo.svg" />
            <Search />
            <Link>
              <img src="/icons/User.svg" alt="" />
              Entrar / Cadastrar
            </Link>
            <Cart>
              <img src="/icons/Cart.svg" alt="" />
            </Cart>
          </Row>
        </Content>
      </Wrapper>
    </>
  );
};
