import {
  alignSelf,
  AlignSelfProps,
  flex,
  FlexProps,
  layout,
  LayoutProps,
  order,
  OrderProps,
  position,
  PositionProps,
  space,
  SpaceProps,
} from "styled-system";
import styled from "styled-components";
import { ClassName } from "../types";

export interface BoxProps
  extends AlignSelfProps,
    FlexProps,
    LayoutProps,
    OrderProps,
    PositionProps,
    SpaceProps,
    ClassName {}

const Box = styled.div<BoxProps>`
  ${alignSelf}
  ${flex}
  ${layout}
  ${order}
  ${position}
  ${space}
`;

export { Box };
