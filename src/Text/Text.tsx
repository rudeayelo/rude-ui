import styled from "styled-components";
import { textCrop, DEFAULT_TEXT_SIZE } from "../utils";
import { Box, BoxProps } from "../Box";

export interface TextProps extends BoxProps {}

export const Text = styled(Box)<TextProps>`
  ${textCrop}
`;

Text.defaultProps = {
  fontSize: DEFAULT_TEXT_SIZE,
};
