"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#14B8A6",
      light: "#2DD4BF",
      dark: "#0D9488",
      contrastText: "#020617",
    },
    secondary: {
      main: "#F59E0B",
      light: "#FBBF24",
      dark: "#D97706",
      contrastText: "#020617",
    },
    background: {
      default: "#0F172A",
      paper: "#1E293B",
    },
    text: {
      primary: "#F8FAFC",
      secondary: "#94A3B8",
    },
    divider: "rgba(148, 163, 184, 0.14)",
  },
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: "-0.03em",
      lineHeight: 1.08,
    },
    h5: {
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 9999,
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0 10px 24px -6px rgba(20, 184, 166, 0.35)",
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundImage: "none",
          backgroundColor: "#1E293B",
          border: "1px solid rgba(148, 163, 184, 0.18)",
          borderRadius: 20,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(15, 23, 42, 0.85)",
          borderRadius: 12,
        },
      },
    },
  },
});

export default theme;
