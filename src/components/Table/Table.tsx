import React from "react";
import { Element } from "react-ui";
import { ElementProps, AllHTMLProps } from "../../types";

type NativeTableProps = AllHTMLProps<HTMLTableElement>;
export interface TableProps extends NativeTableProps, ElementProps {}

export const Table: React.FC<TableProps> = props => (
  <Element as="table" component="Table" {...props} />
);

type NativeTableCellProps = AllHTMLProps<HTMLTableCellElement>;
export interface TdProps extends NativeTableCellProps, ElementProps {}

export const Td: React.FC<TdProps> = props => (
  <Element as="td" component="Td" {...props} />
);

export interface ThProps extends TdProps {}

export const Th: React.FC<ThProps> = props => (
  <Element as="th" component="Th" {...props} />
);

type NativeTableRowElement = AllHTMLProps<HTMLTableRowElement>;
export interface TrProps extends NativeTableRowElement, ElementProps {}

export const Tr: React.FC<TrProps> = props => (
  <Element as="tr" component="Tr" {...props} />
);

type NativeHeadElement = AllHTMLProps<HTMLHeadElement>;
export interface TheadProps extends NativeHeadElement, ElementProps {}

export const Thead: React.FC<TheadProps> = props => (
  <Element as="thead" component="Thead" {...props} />
);

type NativeBodyElement = AllHTMLProps<HTMLBodyElement>;
export interface TbodyProps extends NativeBodyElement, ElementProps {}

export const Tbody: React.FC<TbodyProps> = props => (
  <Element as="tbody" component="Tbody" {...props} />
);

type NativeTableSectionElement = AllHTMLProps<HTMLTableSectionElement>;
export interface TfootProps extends NativeTableSectionElement, ElementProps {}

export const Tfoot: React.FC<TfootProps> = props => (
  <Element as="tfoot" component="Tfoot" {...props} />
);
