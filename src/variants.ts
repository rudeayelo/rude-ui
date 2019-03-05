import { variant } from "styled-system";

export interface Level {
  level?: 0 | 1;
}
export const level = variant({
  key: "levels",
  prop: "level",
});
