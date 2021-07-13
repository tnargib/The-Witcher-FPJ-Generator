import { CardContent, CardHeader, Divider, Grid } from "@material-ui/core";
import { mean } from "ramda";
import BrightCard from "../Common/BrightCard";

const Carac = ({ caracs }) => {
  return (
    <BrightCard>
      <CardHeader title="Caractéristiques" />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={10}>
            Corps (COR)
          </Grid>
          <Grid item xs={2}>
            {caracs.COR}
          </Grid>

          <Grid item xs={10}>
            Réflexe (REF)
          </Grid>
          <Grid item xs={2}>
            {caracs.REF}
          </Grid>

          <Grid item xs={10}>
            Dextérité (DEX)
          </Grid>
          <Grid item xs={2}>
            {caracs.DEX}
          </Grid>

          <Grid item xs={10}>
            Vitesse (VIT)
          </Grid>
          <Grid item xs={2}>
            {caracs.VIT}
          </Grid>

          <Grid item xs={10}>
            Technique (TECH)
          </Grid>
          <Grid item xs={2}>
            {caracs.TECH}
          </Grid>

          <Grid item xs={10}>
            Intelligence (INT)
          </Grid>
          <Grid item xs={2}>
            {caracs.INT}
          </Grid>

          <Grid item xs={10}>
            Volonté (VOL)
          </Grid>
          <Grid item xs={2}>
            {caracs.VOL}
          </Grid>

          <Grid item xs={10}>
            Empathie (EMP)
          </Grid>
          <Grid item xs={2}>
            {caracs.EMP}
          </Grid>

          <Grid item xs={10}>
            Chance (CHA)
          </Grid>
          <Grid item xs={2}>
            {caracs.CHA}
          </Grid>
        </Grid>

        <br />
        <Divider />
        <br />

        <Grid container spacing={2}>
          <Grid item xs={10}>
            Moyenne
          </Grid>
          <Grid item xs={2}>
            {mean(Object.values(caracs)).toFixed(2)}
          </Grid>
        </Grid>
      </CardContent>
    </BrightCard>
  );
};

export default Carac;
