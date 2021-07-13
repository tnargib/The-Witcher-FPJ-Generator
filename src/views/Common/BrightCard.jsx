import { Card, withStyles } from "@material-ui/core";

const BrightCard = withStyles({
  root: {
    background: "none",
    backdropFilter: "brightness(0.5)",
  },
})(Card);

export default BrightCard;
