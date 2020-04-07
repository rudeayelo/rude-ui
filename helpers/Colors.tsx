import React from "react";
import { Card, Stack, Text } from "../src";

export const ColorCard = ({ color, css }: { color: string; css?: {} }) => {
  const colorShade = color.split(".")[0];
  const colorValue = parseInt(color.split(".")[1], 10);
  const textValue = colorValue > 500 ? "300" : "800";
  return (
    <Stack align="flex-end" css={{ backgroundColor: color, size: 16, ...css }}>
      <Text
        marginBottom={2}
        marginLeft={2}
        size={2}
        css={{ fontFamily: "mono", color: `${colorShade}.${textValue}` }}
      >
        {colorValue}
      </Text>
    </Stack>
  );
};

export const ColorBand = ({
  color,
  css,
  ...rest
}: {
  color: string;
  css?: {};
}) => {
  return (
    <Card level={2} css={{ maxWidth: "fit-content", ...css }} {...rest}>
      <Stack>
        <ColorCard
          color={`${color}.100`}
          css={{ borderRadius: "4px 0 0 4px" }}
        />
        <ColorCard color={`${color}.200`} />
        <ColorCard color={`${color}.300`} />
        <ColorCard color={`${color}.400`} />
        <ColorCard color={`${color}.500`} />
        <ColorCard color={`${color}.600`} />
        <ColorCard color={`${color}.700`} />
        <ColorCard color={`${color}.800`} />
        <ColorCard
          color={`${color}.900`}
          css={{ borderRadius: "0 4px 4px 0" }}
        />
      </Stack>
    </Card>
  );
};
