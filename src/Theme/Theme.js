import { createTheme, alpha } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#98C11D",
      extraLight: alpha("#98C11D", 0.2),
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#079865",
      extraLight: alpha("#079865", 0.2),
      contrastText: "#ffffff",
    },
    background: {
      common: "#071828",
    },
    success: {
      main: "#2E7D32",
      extraLight: alpha("#2E7D32", 0.2),
    },
    draft: {
      main: "#BD4500",
      extraLight: alpha("#BD4500", 0.2),
    },
    external: {
      main: "#C409D1",
      extraLight: alpha("#C409D1", 0.2),
    },
    mark: {
      main: "#ffeb3b",
      extraLight: alpha("#ffeb3b", 0.2),
    },
    error: {
      main: "#D32F2F",
      extraLight: alpha("#D32F2F", 0.2),
    },
    warning: {
      main: "#ED6C02",
      extraLight: alpha("#ED6C02", 0.2),
    },
    info: {
      main: "#0288d1",
      extraLight: alpha("#0288d1", 0.2),
    },
  },
  typography: {
    h4: {
      fontFamily: ["Poppins"].join(","),
    },
    button: {
      fontFamily: ["Poppins"].join(","),
      textTransform: "capitalize",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          lineHeight: 2,
        },
      },
    },
  },
});

export default theme;
