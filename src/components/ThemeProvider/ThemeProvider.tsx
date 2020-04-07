import React from "react";
import { ThemeProvider as BaseThemeProvider } from "react-ui";
import { theme, ThemeTokens } from "../../theme";

const loadWebfont = () => {
  const head = document.head;
  const link = document.createElement("link");

  link.type = "text/css";
  link.rel = "stylesheet";
  link.href =
    "https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap";

  head.appendChild(link);
};

export interface ThemeProvider {
  withWebfont?: boolean;
  tokens: ThemeTokens;
  components: {};
}

export const ThemeProvider: React.FC<ThemeProvider> = ({
  withWebfont = true,
  tokens = theme.tokens,
  components = theme.components,
  ...rest
}) => {
  React.useEffect(() => {
    withWebfont && loadWebfont();
  }, [withWebfont]);

  return (
    <BaseThemeProvider tokens={tokens} components={components} {...rest} />
  );
};
