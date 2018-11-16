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
} from "./styleProps";
import {
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
import { ClassName } from "./types";

type Props = AlignSelfProps &
  AlignItemsProps &
  DisplayProps &
  FlexProps &
  FlexDirectionProps &
  HeightProps &
  JustifyContentProps &
  MaxWidthProps &
  OrderProps &
  SpaceProps &
  WidthProps & {
    className?: ClassName
  };

const Box = styled.div<Props>`
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
