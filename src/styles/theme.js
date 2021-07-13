import { createTheme } from "@material-ui/core";
import { cyan } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: cyan,
    secondary: { main: "#0277bd" },
  },
  props: {
    MuiTextField: {
      variant: "outlined",
    },
    MuiSelect: {
      variant: "outlined",
    },
  },
});

export default theme;
