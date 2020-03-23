import styled from "styled-components";
import { textSize, TextSizeProps } from "../variants";
import { Box, BoxProps } from "../Box";

export interface TextProps extends BoxProps, TextSizeProps {}

export const Text = styled(Box)<TextProps>(textSize);
