import React from "react";
import styled from "styled-components";
import { color, ColorProps } from "styled-system";
import { baseTheme, Box, Card, Text } from "../src";

const ColorCardContainer = styled(Card).attrs({
  level: 0,
  flexDirection: "column",
  width: "140px",
})``;

interface ColorCardColorProps extends ColorProps {}

const ColorCardColor = styled.div<ColorCardColorProps>`
  height: 100px;
  background: currentColor;
  border-radius: 16px 16px 0 0;

  ${color}
`;

interface ColorCardProps {
  color: string;
}

const getColorValue = (color: string) => {
  const [base, variant] = color.split(".");
  const colorBase = baseTheme.colors[base];

  return variant ? colorBase[variant] : colorBase;
};

const ColorCard = ({ color }: ColorCardProps) => {
  return (
    <ColorCardContainer display="inline-flex" mr={3} mb={3}>
      <ColorCardColor color={color} />
      <Box px={3} py={2} display="block">
        <Text fontWeight="bold" fontSize={0}>
          {color}
        </Text>
        <Text fontSize={0}>{getColorValue(color)}</Text>
      </Box>
    </ColorCardContainer>
  );
};

export default ColorCard;
