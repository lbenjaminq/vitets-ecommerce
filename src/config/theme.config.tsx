import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";

type ThemeProp = {
  children: JSX.Element
}

enum themePalette {
  BG = "white",
  BLUE= "#2A94FF",
  BLACKZUL = "#436587",
  FONT_GLOBAL = "'JetBrains Mono', monospace",
  ERROR_MAIN ="#f44336",
  BG_ERROR_MAIN= "rgba(244,67,54,0.1)",
  SUCCESS_MAIN = "green",
  BG_SUCCESS_MAIN= "rgba(60,60,60,60,0.1)"
}

const theme = createTheme({
  palette:{
    background:{
      default: themePalette.BG
    },
    primary:{
      main:themePalette.BLUE
    },
    secondary:{
      main:themePalette.BLACKZUL
    }
  },
  typography:{
    fontFamily:themePalette.FONT_GLOBAL,
  },
  components:{
    MuiButton:{
      defaultProps:{
        style:{
          textTransform:"none",
          boxShadow:"none",
          borderRadius:"0.5em",
        }
      }
    },
  }
})

export const ThemeConfig: React.FC<ThemeProp> = ({children}) => {
    return(
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        {children}
      </ThemeProvider>
    )
}