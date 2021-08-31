import React from "react";
import { Header } from "../../components/Header/index";
import { Card } from "../../components/Card/index";
import { Footer } from "../../components/Footer/index"

import {
  Content,
  Body,
  Banner,
  Wave,
  Title,
  CardContainer,
  Column,
  Row
} from "./style";

export const Products = () => {
  return (
    <>
      <Header />
      <Body>
        <Content>
          <Banner>
            <img src="/Banner.jpg" alt=""></img>
            <Wave>
              <img src="/Wave.svg" alt=""></img>
            </Wave>
          </Banner>
          <Title>
            <h1>Produtos</h1>
            <hr />
          </Title>
          <Row>
              <Card
                product_id="1"
                name="Aroma Ambiente"
                description="Aroma de Morango"
                price="11,00"
              />
              <Card
                product_id="2"
                name="Aroma Ambiente..."
                description="Aroma de Morango"
                price="12,00"
              />
              <Card
                product_id="3"
                name="Aroma Ambiente"
                description="Aroma de Banana"
                price="13,00"
              />
              <Card
                product_id="4"
                name="Aroma Ambiente..."
                description="Aroma de Morango"
                price="14,00"
              />
              <Card
                product_id="1"
                name="Aroma Ambiente"
                description="Aroma de Morango"
                price="11,00"
              />
              <Card
                product_id="2"
                name="Aroma Ambiente..."
                description="Aroma de Morango"
                price="12,00"
              />
              <Card
                product_id="3"
                name="Aroma Ambiente"
                description="Aroma de Banana"
                price="13,00"
              />
              <Card
                product_id="5"
                name="Aroma Ambiente..."
                description="Aroma de Morango"
                price="14,00"
              />
            </Row>
        </Content>
        <Footer/>
      </Body>
    </>
  );
};
