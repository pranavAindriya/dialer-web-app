import React from "react";
import "./style.css";
import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";

const LayoutDefault = ({ children }: { children: React.ReactNode }) => {
  const theme = createTheme({
    palette: {
      mode: "light",
      primary: { main: "#4caf50" },
      background: { default: "#f5f5f5", paper: "#ffffff" },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: { textTransform: "none" },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ height: "100dvh" }}>{children}</Box>
    </ThemeProvider>
  );
};

export default LayoutDefault;
