import { BannerDiv, Column, Title, Left, SmallLink } from "./style";

export const Footer = () => {
  return (
    <BannerDiv id="footer">
      <div>
        <Column>
          <Title>
            <h1>Sobre Nós</h1>
            <hr />
          </Title>
          <Left>
          Somos uma empresa que usa a aromaterapia, um técnica natural para estimular diferentes áreas do cérebro, e proporcionar o bem-estar e fortalecer defesas do corpo.          </Left>
        </Column>
        <Column>
          <Title>
            <h1>Atendimento</h1>
            <hr />
          </Title>
          <ul>
            <li>Telefone: (99) 9999-9999</li>
            <li>WhatsApp: (99) 99999-9999</li>
            <li>E-Mail: atendimento@infinityaromas.com.br</li>
          </ul>
        </Column>
        <Column>
          <Title>
            <h1>Redes Sociais</h1>
            <hr />
          </Title>
          <Left>
            <SmallLink href="https://www.facebook.com">
              <i className="fab fa-facebook-square"></i>
            </SmallLink>
            <SmallLink href="https://www.instagram.com">
              <i className="fab fa-instagram"></i>
            </SmallLink>
            <SmallLink href="http://api.whatsapp.com">
              <i className="fab fa-whatsapp"></i>
            </SmallLink>
            <SmallLink href="mailto: ">
              <i className="fas fa-envelope"></i>
            </SmallLink>
          </Left>
        </Column>
      </div>
    </BannerDiv>
  );
};


