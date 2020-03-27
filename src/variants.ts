import { variant } from "styled-system";

export interface LevelProps {
  level?: 0 | 1;
}
export const level = variant({
  key: "levels",
  prop: "level",
});
