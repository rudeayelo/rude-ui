import styled from "styled-components";
import { space, SpaceProps } from "styled-system";
import { Text, TextProps } from "../Text";
import { baseTheme } from "../theme";

export interface TableProps extends SpaceProps {}

export const Table = styled.table<TableProps>`
  border-collapse: collapse;
  width: 100%;

  ${space}
`;

Table.defaultProps = {
  theme: baseTheme,
};

export interface TdProps extends TextProps {}

export const Td = styled(Text).attrs({ as: "td" })<TdProps>`
  font-variant-numeric: tabular-nums;

  &:last-of-type {
    padding-right: 0;
  }
`;

Td.defaultProps = {
  pt: 3,
  pb: 3,
  pr: 3,
  borderBottom: "1px solid",
  borderColor: "g.90",
  fontSize: 1,
  lineHeight: 1,
  theme: baseTheme,
};

export interface ThProps extends TdProps {}

export const Th = styled(Td)<ThProps>({});

Th.defaultProps = {
  fontSize: 0,
  fontWeight: 1,
  color: "secondaryText",
};

export const Tr = styled.tr({});
export const Thead = styled.thead({});
export const Tbody = styled.tbody({});
export const Tfoot = styled.tfoot({});
