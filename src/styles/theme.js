import { createMuiTheme } from "@material-ui/core";
import { yellow, blue, cyan } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: cyan,
    secondary:
      {main: "#0277bd",}
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
