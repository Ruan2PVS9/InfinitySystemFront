import {
  CardWrapper,
  ImgBg,
  CardCont,
  Row,
  Button,
  OutlineButton,
} from "./style";

export const Card = (props) => {
  // const imagePath = `/icons/products/${props.product_id}.png`
  return (
    <>
      <CardWrapper>
        <ImgBg>
          <img src={props.img} alt=""></img>
        </ImgBg>
        <CardCont>
          <Row>
            <OutlineButton>Detalhes</OutlineButton>
            <Button>Comprar</Button>
          </Row>
          <div>
            <h3>{props.name}</h3>
            <h5>R$ {props.price}</h5>
          </div>
        </CardCont>
      </CardWrapper>
    </>
  );
};