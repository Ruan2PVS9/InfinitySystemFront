import React from "react";
import { Body, Conteiner ,Icon, Log, Form, Input, Arrow, InputDiv} from "./style";



export const Signin = () => {
    
    return (
        <>
        <Body>
          <Conteiner>
            <Arrow to="/">
                <i className="fas fa-caret-left"></i>
            </Arrow>
            <Icon src="/icons/Logo.svg" />
            <Form >
                <Input
                type="text"
                value="username"
                placeholder="Usuário"
                />
                <InputDiv>
                <Input
                    value="Password"
                    placeholder="Senha"
                />
                </InputDiv>
                <Log type="submit">Entrar</Log>
            </Form>
          </Conteiner>
        </Body>
      </>
    );
  };