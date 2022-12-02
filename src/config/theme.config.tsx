import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React from "react";

type ThemeProp = {
  children: JSX.Element
}

enum themePalette {
  BG = "#1b262c",
  BLUE = "rgba(29,221,255,0.9)",
  BLUE_LIGHT = "rgba(137,237,255,1)",
  WHITE = "#FFFFFF",
  BLACK = "#1A1A1A",
  FONT_GLOBAL = "'JetBrains Mono', monospace",
  ERROR_MAIN = "#f44336",
  BG_ERROR_MAIN = "rgba(244,67,54,0.1)",
  SUCCESS_MAIN = "BLUE",
  BG_SUCCESS_MAIN = "rgba(60,60,60,60,0.1)"
}

export const theme = createTheme({
  palette: {
    primary: {
      main: themePalette.BLACK,
      dark: themePalette.BLUE,
      light: themePalette.WHITE,
    },
    secondary: {
      main: themePalette.WHITE
    },
  },
  typography: {
    fontFamily: themePalette.FONT_GLOBAL,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: themePalette.BLUE,
          color: themePalette.WHITE,
          "&:hover": {
            backgroundColor: themePalette.WHITE,
            color: themePalette.BLACK,
            textDecoration: "underline"
          },
        },
        outlined: {
          "&:hover": {
            border: `1px ${themePalette.BLUE} solid`
          },
        }
      },
      defaultProps: {
        style: {
          textTransform: "none",
          boxShadow: "none",
          borderRadius: "0.5em",
          padding: "2px 10px"
        },
      }
    },
  }
})

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}