import styled from "styled-components";
import { themeGet } from "styled-system";
import { level, Level } from "../variants";
import Box from "../Box";

const Card = styled(Box)<Level>`
  background: ${themeGet("colors.accentBackground")};
  border-radius: 16px;

  ${level}
`;
Card.defaultProps = {
  display: "block",
  level: 1,
};

export default Card;
