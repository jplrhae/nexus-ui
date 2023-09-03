import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#EF3340",
    },
    secondary: {
      main: "#000000",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#FFFFFF",
    },
    text: {
      primary: "#000000",
      secondary: "#000000",
    },
  },
});

export default theme;
