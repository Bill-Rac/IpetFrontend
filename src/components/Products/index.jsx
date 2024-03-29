import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Products({ heading, data }) {
  function handleAddToCart(product) {
    console.log(`Producto "${product.name}" añadido al carrito`);
  }

  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductsWrapper>
        <ProductWrapper>
          {data.map((product, index) => (
            <ProductCard key={index}>
              <Link to={`/producto/${product.id}`}>
                <ProductImg src={product.img} alt={product.alt} />
              </Link>
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <AddToCartWrapper>
                  <AddToCartButton onClick={() => handleAddToCart(product)}>
                    Añadir al carrito
                  </AddToCartButton>
                </AddToCartWrapper>
              </ProductInfo>
            </ProductCard>
          ))}
        </ProductWrapper>
      </ProductsWrapper>
    </ProductsContainer>
  );
}

export default Products;

const ProductsContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  background: #fefefe;
  color: #15151d;
`;

const ProductsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  max-width: 1620px;
`;

const ProductCard = styled.div`
  margin: 1rem;
  width: 300px;
  background-color: #d9d9d9;
  border-radius: 10%;
`;

const ProductImg = styled.img`
  height: 300px;
  width: 100%;
  border-radius: 10%;
  border-bottom: 5px solid transparent;
  border-image: linear-gradient(90deg, #7052ff -1.01%, #d06aff 100%) 1;
`;

const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: start;
  margin-bottom: 10px;
`;

const ProductTitle = styled.h2`
  font-weight: 500;
  font-size: 1rem;
  margin: 0;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  text-align: center;
`;

const AddToCartWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;

const AddToCartButton = styled.button`
  background-color: #7052ff;
  color: #fefefe;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  align-self: center;
`;
