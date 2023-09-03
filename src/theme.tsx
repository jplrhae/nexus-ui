import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#EF3340",
    },
    secondary: {
      main: "#FFFFFF",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#333333",
    },
    text: {
      primary: "#FFFFFF",
    },
  },
});

export default theme;
