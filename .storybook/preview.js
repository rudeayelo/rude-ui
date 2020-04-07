import React from "react";
import { Stack, ThemeProvider } from "../src";
import { addDecorator } from "@storybook/react";

addDecorator(story => (
  <ThemeProvider>
    <Stack css={{ padding: 4 }}>{story()}</Stack>
  </ThemeProvider>
));
