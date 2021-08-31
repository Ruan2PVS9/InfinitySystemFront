import {
  Modal,
  ModalRow,
  ModalEnd,
  ModalContent,
  ModalTotal,
  Buy,
  Orders,
  Trash,
} from "./style";

export const Drawer = (props) => {
  return (
    <>
      <Modal active={props.active}>
        <ModalRow>
          <ModalRow>
            <span>Carrinho de Compras</span>
          </ModalRow>
          {props.children}
          <hr />
        </ModalRow>
        <ModalContent>
          <Orders>
            <img src="icons/products/1.png" alt="" />
            <div className="column">
              <div className="row">
                <span>Nome</span>
                <Trash>
                  <i className="fas fa-trash-alt"></i>
                </Trash>
              </div>
              <div className="row">
                <h6>Quantidade: 1</h6>
                <span>R$ 00,00</span>
              </div>
            </div>
          </Orders>
        </ModalContent>
        <ModalTotal>
          <span>subtotal: </span>
          <h5>R$ 0,00</h5>
          <hr />
        </ModalTotal>
        <ModalEnd>
          <Buy>Comprar Agora</Buy>
          <div className="row">
            <div>
              <i className="fas fa-caret-left"></i> Continuar Comprando
            </div>
            <hr />
            <div>
              Visualizar Carrinho <i className="fas fa-caret-right"></i>
            </div>
          </div>
        </ModalEnd>
      </Modal>
    </>
  );
};
