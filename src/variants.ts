import { variant } from "styled-system";
import { style } from "styled-system";

export const lineHeight = style({
  prop: "lineHeight",
  cssProperty: "lineHeight",
  key: "lineHeights",
  transformValue: n => n,
  scale: [1.5, 1.5, 1.5, 1.4, 1.2, 1.1, 1, 1, 0.9],
});

export interface Level {
  level?: 0 | 1;
}
export const level = variant({
  key: "levels",
  prop: "level",
});

export interface TextSize {
  textSize?: number;
}
export const textSize = variant({
  key: "textSizes",
  prop: "textSize",
});
