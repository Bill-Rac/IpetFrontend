import React from "react";
import styled from "styled-components";
import { BsStarFill } from "react-icons/bs";
import { useState } from "react";

const colors = {
  gold: "#F8961E",
  grey: "#D9D9D9",
};

const Stars = () => {
  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = React.useState(0);
  const [hoverValue, setHoverValue] = React.useState(undefined);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (value) => {
    setHoverValue(undefined);
  };

  return (
    <Container>
      <div style={StyleSheet.stars}>
        {stars.map((_, index) => {
          return (
            <BsStarFill
              key={index}
              size={24}
              style={{
                marginRight: 10,
                cursor: "pointer",
              }}
              color={
                (hoverValue || currentValue) > index ? colors.gold : colors.grey
              }
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default Stars;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
