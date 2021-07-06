import { Card, CardContent, CardHeader, Grid } from "@material-ui/core";

const CaracDeriv = () => {
  return (
    <Card>
      <CardHeader title="Dérivées" />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={10}>
            Vigueur (VIG)
          </Grid>
          <Grid item xs={2}>
            12
          </Grid>

          <Grid item xs={10}>
            Etourdissement (ETOU)
          </Grid>
          <Grid item xs={2}>
            12
          </Grid>

          <Grid item xs={10}>
            Course (COU)
          </Grid>
          <Grid item xs={2}>
            12
          </Grid>

          <Grid item xs={10}>
            Saut (SAU)
          </Grid>
          <Grid item xs={2}>
            12
          </Grid>

          <Grid item xs={10}>
            Points de Santé (PS)
          </Grid>
          <Grid item xs={2}>
            12
          </Grid>

          <Grid item xs={10}>
            Endurance (END)
          </Grid>
          <Grid item xs={2}>
            12
          </Grid>

          <Grid item xs={10}>
            Encombrement (ENC)
          </Grid>
          <Grid item xs={2}>
            12
          </Grid>

          <Grid item xs={10}>
            Récupération (NEC)
          </Grid>
          <Grid item xs={2}>
            12
          </Grid>

          <Grid item xs={10}>
            Points
          </Grid>
          <Grid item xs={2}>
            12
          </Grid>

          <Grid item xs={10}>
            Pieds
          </Grid>
          <Grid item xs={2}>
            12
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CaracDeriv;
