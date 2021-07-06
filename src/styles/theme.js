import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
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
