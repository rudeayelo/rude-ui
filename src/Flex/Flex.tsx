import styled from "styled-components";
import { Box, BoxProps } from "../Box";

export interface FlexProps extends BoxProps {}

export const Flex = styled(Box)<FlexProps>({});

Flex.defaultProps = {
  display: "flex",
};
