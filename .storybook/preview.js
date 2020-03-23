import React from "react";
import { addDecorator } from "@storybook/react";
import { Box, GlobalStyles } from "../src";

addDecorator(story => (
  <>
    <GlobalStyles />
    <Box p={4}>{story()}</Box>
  </>
));
