import { flexbox, FlexboxProps } from "styled-system";
import styled from "styled-components";
import { Box, BoxProps } from "../Box";

export interface FlexProps extends BoxProps, FlexboxProps {}

const Flex = styled(Box).attrs({
  display: "flex",
})<FlexProps>`
  ${flexbox}
`;

export { Flex };
