import React from "react";
import styled from "styled-components";

function Products({ heading, data }) {
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => (
          <ProductCard key={index}>
            <ProductImg src={product.img} alt={product.alt} />
            <ProductInfo>
              <ProductTitle>{product.name}</ProductTitle>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductWrapper>
    </ProductsContainer>
  );
}

export default Products;

const ProductsContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 2rem calc((100vw - 1620px) / 2);
  background: #fefefe;
  color: #15151d;
`;

const ProductWrapper = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: center;
  margin: 0 auto;
`;

const ProductCard = styled.div`
  margin: 1rem;
  width: 300px;
  background-color: #d9d9d9;
  border-radius: 10%;
`;

const ProductImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  border-radius: 10%;
  border-bottom: 5px solid transparent;
  border-image: linear-gradient(90deg, #7052ff -1.01%, #d06aff 100%) 1;
  /* box-shadow: -0.5px 1px 9.5px 2px #bababa; */
`;

const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: start;
  margin-bottom: 10px;
`;

const ProductTitle = styled.h2`
  font-weight: 500;
  font-size: 1rem;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  text-align: center;
`;
