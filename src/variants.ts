import { variant } from "styled-system";

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
