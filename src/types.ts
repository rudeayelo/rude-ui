import { FC } from "react";
import * as csstype from "csstype";
import { tokens } from "./theme";

type SpaceScale = keyof typeof tokens.space;

export interface Margins {
  margin?: SpaceScale;
  marginX?: SpaceScale;
  marginY?: SpaceScale;
  marginTop?: SpaceScale;
  marginRight?: SpaceScale;
  marginBottom?: SpaceScale;
  marginLeft?: SpaceScale;
}

export interface CSS {
  css?: csstype.Properties | {};
}

export interface ElementProps extends CSS, Margins {
  as?: keyof HTMLElementTagNameMap | FC;
  component?: string;
}

export type Tone = "neutral" | "info" | "positive" | "critical" | "caution";

export type FontSizes =
  | keyof Omit<typeof tokens.fontSizes, "Heading">
  | keyof typeof tokens.fontSizes.Heading;
