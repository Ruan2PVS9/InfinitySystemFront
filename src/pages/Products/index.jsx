import React,{useState,useEffect} from "react";
import { Header } from "../../components/Header/index";
import { Card } from "../../components/Card/index";
import { Footer } from "../../components/Footer/index"
import { Search } from "../../components/Search";
import { useProducts } from "../../hooks/useProducts";
import {
  Content,
  Body,
  Banner,
  Wave,
  Title,
  // CardContainer,
  // Column,
  Row
} from "./style";


export const Products = () => {
  const [search, setSearch]= useState('')
  const {fetchProducts, listProducts } = useProducts()
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const Produtos=listProducts()
  console.log(Produtos)


  return (
    <>
      <Header>
      <Search 
        onChange={(event) => setSearch(event.target.value)}
      />
      </Header>
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
          {Produtos &&
              Produtos.filter(
                ({ name }) =>
                  name.toLowerCase()?.indexOf(search.toLowerCase()) > -1
              ).map((produto) => (
                <Card
                  key={produto.id}
                  id={produto.id}
                  img={produto.image}
                  name={produto.name}
                  price={produto.preco}
                  quantidade='1'
                >
                </Card>
              ))}
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
