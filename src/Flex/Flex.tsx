import styled from "styled-components";
import { Box, BoxProps } from "../Box";

export const Flex = styled(Box)<BoxProps>({});

Flex.defaultProps = {
  display: "flex",
};
