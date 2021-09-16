import React,{useState} from "react";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Search } from "../../components/Search";

import {Welcome, Body,Content, Aside, Namebutton, Contentchildren, Form, Input, Log } from "./style";
import { getLocalData } from "../../LocalStorage/LocalStorage";

export const Profile = () =>{
    const user = getLocalData('user')
    const [conta, setConta]= useState(true)
    const [pedido, setPedido]= useState(false)

    const toggleConta =()=>{
        setConta(true)
        setPedido(false)
    }
    const togglePedido =()=>{
        setConta(false)
        setPedido(true)
    }
    const [email,setEmail ]= useState('')
    const [usuario,setUsuario ]= useState('')
    const [cpf,setCpf]= useState('')
    const [telefone,setTelefone]= useState('')
    const [nascimento,setNascimento ]= useState('')
    
    
    const handleSubmit =async(e)=>{
      e.preventDefault();
    
    }
    return (
        <>
            <Header>
                <Welcome>Seja Bem Vindo! {user.username} </Welcome>
            </Header>
            <Body>
                <Content>
                    <Aside>
                        <Namebutton onClick={()=>toggleConta()} active={conta}>Conta</Namebutton>
                        <Namebutton onClick={()=>togglePedido()} active={pedido}>Pedidos</Namebutton>
                    </Aside>
                    <Contentchildren active={conta} >
                        <Form onSubmit={(e)=>handleSubmit(e)}>
                            <Input
                            type="text"
                            value={user.email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            required
                            />
                            
                            <Input 
                            type="text"
                            value={user.username}
                            onChange={(e) => setUsuario(e.target.value)}
                            placeholder="usuario"
                            required
                            />

                            <Input 
                            type="text"
                            value={user.cpf}
                            onChange={(e) => setCpf(e.target.value)}
                            placeholder="CPF"
                            required
                            maxLength={11}
                            />
                            <Input 
                            type="text"
                            value={user.telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                            placeholder="Telefone"
                            required
                            maxLength={11}
                            />
                            Nascimento
                            <Input 
                            type="date"
                            value={user.birth}
                            onChange={(e) => setNascimento(e.target.value)}
                            placeholder="Nascimento"
                            required
                            />
                            
                            <Log type="submit">Enviar</Log>
                        </Form>
                    </Contentchildren>
                    <Contentchildren active={pedido}>
                        
                    </Contentchildren>
                </Content>
            </Body>
            <Footer/>
        </>
    );
}