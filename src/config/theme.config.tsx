import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";

type ThemeProp = {
  children: JSX.Element
}

enum themePalette {
  BG = "#414141",
  GREEN = "#EAFF00",
  WHITE = "#FFFFFF",
  BLACK = "#1A1A1A",
  FONT_GLOBAL = "'JetBrains Mono', monospace",
  ERROR_MAIN = "#f44336",
  BG_ERROR_MAIN = "rgba(244,67,54,0.1)",
  SUCCESS_MAIN = "green",
  BG_SUCCESS_MAIN = "rgba(60,60,60,60,0.1)"
}

export const theme = createTheme({
  palette: {
    background: {
      default: themePalette.WHITE
    },
    primary: {
      main: themePalette.BLACK,
      dark: themePalette.GREEN,
      light: themePalette.WHITE,
    },
    secondary: {
      main: themePalette.GREEN
    },
  },
  typography: {
    fontFamily: themePalette.FONT_GLOBAL,
    allVariants:{
      color: "white"
    }
  },
  components: {
    MuiButton: {
      styleOverrides:{
        contained:{
          backgroundColor: themePalette.WHITE,
          "&:hover": {
            backgroundColor: themePalette.BLACK,
            color:themePalette.WHITE
          },
        }
      },
      defaultProps: {
        style: {
          textTransform: "none",
          boxShadow: "none",
          borderRadius: "0.5em",
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