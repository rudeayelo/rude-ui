import {
  alignItems,
  alignSelf,
  display,
  flex,
  flexDirection,
  height,
  justifyContent,
  maxWidth,
  order,
  space,
  width,
  AlignItemsProps,
  AlignSelfProps,
  DisplayProps,
  FlexProps,
  FlexDirectionProps,
  HeightProps,
  JustifyContentProps,
  MaxWidthProps,
  OrderProps,
  SpaceProps,
  WidthProps,
} from "styled-system";
import styled from "styled-components";
import { ClassName } from "../types";

export interface BoxProps
  extends AlignSelfProps,
    AlignItemsProps,
    DisplayProps,
    FlexProps,
    FlexDirectionProps,
    HeightProps,
    JustifyContentProps,
    MaxWidthProps,
    OrderProps,
    SpaceProps,
    WidthProps,
    ClassName {}

const Box = styled.div<BoxProps>`
  ${alignItems}
  ${alignSelf}
  ${display}
  ${flex}
  ${flexDirection}
  ${height}
  ${justifyContent}
  ${maxWidth}
  ${order}
  ${space}
  ${width}
`;

Box.defaultProps = {
  display: "flex",
};

export default Box;
