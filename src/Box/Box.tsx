import {
  alignItems,
  AlignItemsProps,
  alignSelf,
  AlignSelfProps,
  display,
  DisplayProps,
  flex,
  flexDirection,
  FlexDirectionProps,
  FlexProps,
  height,
  HeightProps,
  justifyContent,
  JustifyContentProps,
  maxWidth,
  MaxWidthProps,
  minWidth,
  MinWidthProps,
  order,
  OrderProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  width,
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
    MinWidthProps,
    MaxWidthProps,
    PositionProps,
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
  ${minWidth}
  ${maxWidth}
  ${position}
  ${order}
  ${space}
  ${width}
`;

Box.defaultProps = {
  display: "flex",
};

export default Box;
