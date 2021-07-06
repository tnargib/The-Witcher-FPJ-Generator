import { Card, CardContent, CardHeader, Grid } from "@material-ui/core";

const Carac = () => {
  return (
    <Card>
      <CardHeader title="Caractéristiques" />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={10}>
            Corps (COR)
          </Grid>
          <Grid item xs={2}>
            12
          </Grid>

          <Grid item xs={10}>
            Réflexe (REF)
          </Grid>
          <Grid item xs={2}>
            12
          </Grid>

          <Grid item xs={10}>
            Dextérité (DEX)
          </Grid>
          <Grid item xs={2}>
            12
          </Grid>

          <Grid item xs={10}>
            Vitesse (VIT)
          </Grid>
          <Grid item xs={2}>
            12
          </Grid>

          <Grid item xs={10}>
            Technique (TECH)
          </Grid>
          <Grid item xs={2}>
            12
          </Grid>

          <Grid item xs={10}>
            Intelligence (INT)
          </Grid>
          <Grid item xs={2}>
            12
          </Grid>

          <Grid item xs={10}>
            Volonté (VOL)
          </Grid>
          <Grid item xs={2}>
            12
          </Grid>

          <Grid item xs={10}>
            Empathie (EMP)
          </Grid>
          <Grid item xs={2}>
            12
          </Grid>

          <Grid item xs={10}>
            Chance (CHA)
          </Grid>
          <Grid item xs={2}>
            12
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Carac;
