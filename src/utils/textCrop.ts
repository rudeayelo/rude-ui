import { css, StyledProps } from "styled-components";
import { BoxProps } from "../Box";

export const DEFAULT_TEXT_SIZE = 2;

export const textCrop = css`
  ${({ fontSize = DEFAULT_TEXT_SIZE, theme }: StyledProps<BoxProps>) => {
    const refTopCrop = 5;
    const refBottomCrop = 5;
    const referenceFontSize = 16;
    const referenceLineHeight = 1.4;
    // @ts-ignore
    const currentLineHeight = theme.textSizes[fontSize]["lineHeight"];

    const topCrop =
      Math.max(
        refTopCrop +
          (currentLineHeight - referenceLineHeight) * (referenceFontSize / 2),
        0,
      ) / referenceFontSize;
    const bottomCrop =
      Math.max(
        refBottomCrop +
          (currentLineHeight - referenceLineHeight) * (referenceFontSize / 2),
        0,
      ) / referenceFontSize;

    return css`
      line-height: ${currentLineHeight};

      &::before,
      &::after {
        content: "";
        display: block;
        height: 0;
        width: 0;
        padding-top: 1px;
      }

      &::before {
        margin-bottom: calc(-${topCrop}em - 1px);
      }

      &::after {
        margin-top: calc(-${bottomCrop}em - 1px);
      }
    `;
  }}
`;
