
import React,{useState} from "react";
import { Body, Conteiner ,Icon, Log, Form, Input, Arrow} from "./style";
import { useSession } from "../../hooks/useSession";
import { toast } from "react-toastify";

export const Signup = () => {

const ToastErro = () =>
toast.warn("Email ou usuario ja cadastrados ", {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
});
const ToastSuccess = () =>
toast.success("conta cadastrata yep", {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
});
    const [senha,setSenha ]= useState('')
    const [email,setEmail ]= useState('')
    const [usuario,setUsuario ]= useState('')
    const [cpf,setCpf]= useState('')
    const [telefone,setTelefone]= useState('')
    const [nascimento,setNascimento ]= useState('')
    
    const {AddAccount}=useSession()
    const handleSubmit =async(e)=>{
      e.preventDefault();
      if (!(await AddAccount(email, senha,usuario, cpf,telefone,nascimento))) ToastErro();
      else ToastSuccess()
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                />
                
                <Input type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    placeholder="Senha"
                    required
                />
                
                <Input 
                type="text"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                placeholder="usuario"
                required
                />

                <Input 
                type="text"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                placeholder="CPF"
                required
                maxLength={11}
                />
                <Input 
                type="text"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                placeholder="Telefone"
                required
                maxLength={11}
                />
                Nascimento
                <Input 
                type="date"
                value={nascimento}
                onChange={(e) => setNascimento(e.target.value)}
                placeholder="Nascimento"
                required
                />
                
                <Log type="submit">Cadastrar-se</Log>
            </Form>
          </Conteiner>
        </Body>
      </>
    );
  };