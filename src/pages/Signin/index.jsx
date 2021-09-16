
import React,{useState} from "react";
import { Body, Conteiner ,Icon, Log, Form, Input, Arrow, InputDiv, Signup} from "./style";
import { useSession } from "../../hooks/useSession";
import { toast } from "react-toastify";

export const Signin = () => {

const ToastErro = () =>
toast.warn("Conta Não Encontrada", {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
});
    const [senha,setSenha ]= useState('')
    const [usuario,setUsuario ]= useState('')
    const {CreateSession, onGoingSession}=useSession()
    const handleSubmit =async(e)=>{
      e.preventDefault();
      if (!(await CreateSession(usuario, senha)))ToastErro();
      
    }
    return (
        <>
        <Body>
          <Conteiner>
            <Arrow to="/">
                <i className="fas fa-caret-left"></i>
            </Arrow>
            <Icon src="/icons/Logo.svg" />
            <Form onSubmit={(e)=>handleSubmit(e)}>
                <Input
                type="text"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                placeholder="Email"
                required
                />
                <InputDiv>
                <Input type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    placeholder="Senha"
                    required
                />
                </InputDiv>
                <Log type="submit">Entrar</Log>
                <Signup to="/signup">
                Cadastre-se
            </Signup>
            </Form>
           
          </Conteiner>
        </Body>
      </>
    );
  };