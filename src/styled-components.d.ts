// Source: https://github.com/styled-components/styled-components-website/issues/392
import "styled-components";
import { ThemeInterface } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeInterface {}
}
