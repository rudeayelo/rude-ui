import React from "react";
import { createGlobalStyle } from "styled-components";
import { baseTheme } from "../theme";

const loadWebfont = () => {
  const head = document.head;
  const link = document.createElement("link");

  link.type = "text/css";
  link.rel = "stylesheet";
  link.href =
    "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap";

  head.appendChild(link);
};

export const CSSReset = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    background: "white";
    color: ${({ theme }) => theme.colors.primaryText};
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: ${({ theme }) => theme.fontSizes[2]};
    line-height: ${({ theme }) => theme.lineHeights[2]};
  }

  ul,
  ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  a:not([class]) {
    color: ${({ theme }) => theme.colors.linkText};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  img {
    max-width: 100%;
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }
`;

CSSReset.defaultProps = {
  theme: baseTheme,
};

export interface GlobalStyle {
  withWebfont?: boolean;
}

export const GlobalStyles: React.FC<GlobalStyle> = ({ withWebfont }) => {
  React.useEffect(() => {
    withWebfont && loadWebfont();
  }, [withWebfont]);

  return <CSSReset />;
};

GlobalStyles.defaultProps = {
  withWebfont: true,
};
