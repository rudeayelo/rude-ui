import React from "react";
import {
  Grid as BaseGrid,
  Column as BaseColumn,
  Row as BaseRow,
} from "react-ui";
import { ElementProps } from "../../types";
import { tokens } from "../../theme";

export interface GridProps extends ElementProps {
  gap?: "auto" | "none";
  columnGap?: keyof typeof tokens.space;
  rowGap?: keyof typeof tokens.space;
}

export const Grid: React.FC<GridProps> = props => <BaseGrid {...props} />;

type Columns = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface ColumnProps extends CSS {
  span?: 0 | Columns;
  start?: Columns;
  end?: Columns;
}

export const GridColumn: React.FC<ColumnProps> = props => (
  <BaseColumn {...props} />
);

export const GridRow: React.FC<GridProps> = props => <BaseRow {...props} />;
