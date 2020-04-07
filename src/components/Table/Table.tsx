import React from "react";
import { Element } from "react-ui";
import { ElementProps } from "../../types";

export interface TableProps extends HTMLTableElement, ElementProps {}

export const Table: React.FC<TableProps> = props => (
  <Element as="table" component="Table" {...props} />
);

export interface TdProps extends HTMLTableCellElement, ElementProps {}

export const Td: React.FC<TdProps> = props => (
  <Element as="td" component="Td" {...props} />
);

export interface ThProps extends TdProps {}

export const Th: React.FC<ThProps> = props => (
  <Element as="th" component="Th" {...props} />
);

export interface TrProps extends HTMLTableRowElement, ElementProps {}

export const Tr: React.FC<TrProps> = props => (
  <Element as="tr" component="Tr" {...props} />
);

export interface TheadProps extends HTMLHeadElement, ElementProps {}

export const Thead: React.FC<TheadProps> = props => (
  <Element as="thead" component="Thead" {...props} />
);

export interface TbodyProps extends HTMLBodyElement, ElementProps {}

export const Tbody: React.FC<TbodyProps> = props => (
  <Element as="tbody" component="Tbody" {...props} />
);

export interface TfootProps extends HTMLTableSectionElement, ElementProps {}

export const Tfoot: React.FC<TfootProps> = props => (
  <Element as="tfoot" component="Tfoot" {...props} />
);
