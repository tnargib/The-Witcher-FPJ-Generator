import { createMuiTheme } from "@material-ui/core";
import { brown, amber } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: amber,
    secondary: brown,
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
