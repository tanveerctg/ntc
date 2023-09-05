import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import "@fontsource/mulish/700.css";

const theme = {
  fonts: {
    heading: `'Mulish', sans-serif`,
  },
  colors: {
    brand: {
      purple: {
        50: "#faf6fa",
        100: "#eddbea",
        200: "#ddbbd8",
        300: "#ca95c2",
        400: "#bf7fb5",
        500: "#b061a4",
        600: "#a24694",
        700: "#8f297f",
        800: "#79236c",
        900: "#58194f",
      },
      purpleAlpha: "#8f297fCC",
      // purpleAlpha: '#952b8599'
    },
  },
  breakpoints: {
    xs: "320px",
    sm: "480px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
    "3xl": "2240px",
  },
};

export default extendTheme(theme);
