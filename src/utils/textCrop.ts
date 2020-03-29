import { css, StyledProps } from "styled-components";
import { BoxProps } from "../Box";

export const DEFAULT_TEXT_SIZE = 2;

/* Code reference: http://text-crop.eightshapes.com/?typeface-selection=google-font&typeface=Inter&custom-typeface-name=Helvetica&custom-typeface-url=&custom-typeface-weight=400&custom-typeface-style=normal&weight-and-style=500&size=16&line-height=1.4&top-crop=5&bottom-crop=5 */
export const textCrop = css`
  ${({ fontSize = DEFAULT_TEXT_SIZE, theme }: StyledProps<BoxProps>) => {
    const refTopCrop = 5;
    const refBottomCrop = 5;
    const referenceFontSize = 16;
    const referenceLineHeight = 1.4;
    // @ts-ignore
    const currentLineHeight = theme.lineHeights[fontSize];

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
